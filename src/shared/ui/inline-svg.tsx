import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';

type InlineSvgProps = {
  src: string;
  className?: string;
  alt?: string;
};

const augmentSvg = (svg: string, className?: string, alt?: string) => {
  let updated = svg;
  if (className) {
    if (/<svg[^>]*class=/.test(updated)) {
      updated = updated.replace(
        /<svg([^>]*?)class=["']([^"']*)["']/,
        `<svg$1class="$2 ${className}"`,
      );
    } else {
      updated = updated.replace('<svg', `<svg class="${className}"`);
    }
  }
  if (alt) {
    if (/<svg[^>]*aria-label=/.test(updated)) {
      updated = updated.replace(
        /<svg([^>]*?)aria-label=["'][^"']*["']/,
        `<svg$1aria-label="${alt}"`,
      );
    } else {
      updated = updated.replace('<svg', `<svg aria-label="${alt}" role="img"`);
    }
  }
  return updated;
};

export const InlineSvg: FC<InlineSvgProps> = ({ src, className, alt }) => {
  const [content, setContent] = useState<string | null>(null);

  const finalHtml = useMemo(() => {
    if (!content) return null;
    return augmentSvg(content, className, alt);
  }, [content, className, alt]);

  useEffect(() => {
    let isActive = true;
    fetch(src)
      .then((r) => r.text())
      .then((t) => {
        if (isActive) setContent(t);
      })
      .catch(() => {
        if (isActive) setContent(null);
      });
    return () => {
      isActive = false;
    };
  }, [src]);

  if (!finalHtml) return null;

  return <span dangerouslySetInnerHTML={{ __html: finalHtml }} aria-hidden={alt ? undefined : true} />;
};


