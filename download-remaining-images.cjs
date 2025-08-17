const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const SRC_ROOT = path.resolve('src');
const IMG_ROOT = path.resolve('public/img');

const ANIMA_REGEX = /https:\/\/c\.animaapp\.com\/[^")'\s]+/g;
const LOCAL_IMG_DIR_REGEX = /\/img\/([^"'\)\s]+?)\//;

const walkFiles = (dir, exts, acc) => {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			walkFiles(full, exts, acc);
			continue;
		}
		const ext = path.extname(entry.name).toLowerCase();
		if (exts.has(ext)) acc.push(full);
	}
	return acc;
};

const ensureDir = (dir) => {
	if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const getUniquePath = (dir, filename) => {
	ensureDir(dir);
	const ext = path.extname(filename);
	const base = path.basename(filename, ext);
	let candidate = path.join(dir, filename);
	let counter = 1;
	while (fs.existsSync(candidate)) {
		candidate = path.join(dir, `${base}-${counter}${ext}`);
		counter += 1;
	}
	return candidate;
};

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const detectPreferredSubdir = (filePath, fileContent) => {
	const localMatch = fileContent.match(LOCAL_IMG_DIR_REGEX);
	if (localMatch && localMatch[1]) {
		return localMatch[1];
	}
	const screensMatch = filePath.match(/src\/(screens)\/([^\/]+)/);
	if (screensMatch) {
		const group = screensMatch[2];
		if (group === 'Layout') {
			if (/HeaderSection\.tsx$/.test(filePath)) return 'header';
			if (/FooterSection\.tsx$/.test(filePath)) return 'footer';
			return 'layout';
		}
		return group.toLowerCase();
	}
	const widgetsMatch = filePath.match(/src\/(widgets)\/([^\/]*)/);
	if (widgetsMatch) {
		const base = path.basename(filePath, path.extname(filePath));
		return base ? base.toLowerCase() : 'widgets';
	}
	return 'common';
};

const downloadTo = (url, destAbsPath) => {
	execFileSync('curl', ['-L', url, '-o', destAbsPath], { stdio: 'ignore' });
};

const processFile = (absPath, globalCache) => {
	const original = fs.readFileSync(absPath, 'utf8');
	const urls = Array.from(new Set(original.match(ANIMA_REGEX) || []));
	if (urls.length === 0) return false;
	const subdir = detectPreferredSubdir(absPath, original);
	const targetDirAbs = path.join(IMG_ROOT, subdir);
	const replacements = [];
	for (const url of urls) {
		const urlKey = `${url}::${subdir}`;
		let localPublicPath = globalCache.get(urlKey);
		if (!localPublicPath) {
			const cleanUrl = url.split('?')[0];
			const filename = decodeURIComponent(path.basename(cleanUrl));
			const destAbs = getUniquePath(targetDirAbs, filename);
			downloadTo(url, destAbs);
			const rel = path.relative(path.resolve('public'), destAbs).split(path.sep).join('/');
			localPublicPath = `/${rel}`;
			globalCache.set(urlKey, localPublicPath);
		}
		replacements.push({ from: url, to: localPublicPath });
	}
	let updated = original;
	for (const r of replacements) {
		updated = updated.replace(new RegExp(escapeRegExp(r.from), 'g'), r.to);
	}
	if (updated !== original) {
		fs.writeFileSync(absPath, updated, 'utf8');
		return true;
	}
	return false;
};

const main = () => {
	const files = walkFiles(SRC_ROOT, new Set(['.tsx', '.ts', '.css']), []);
	const cache = new Map();
	let changed = 0;
	for (const f of files) {
		if (processFile(f, cache)) changed += 1;
	}
	return changed;
};

main(); 