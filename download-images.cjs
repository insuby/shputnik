const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Список изображений для скачивания
}
const imagesToDownload = [
];

console.log('Начинаем скачивание изображений...');
console.log(`Всего изображений для скачивания: ${imagesToDownload.length}`);

imagesToDownload.forEach((image, index) => {
  try {
    console.log(`[${index + 1}/${imagesToDownload.length}] Скачиваем: ${image.url}`);
    
    // Создаем директорию если её нет
    const dir = path.dirname(image.localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Скачиваем изображение с помощью curl
    execSync(`curl -L "${image.url}" -o "${image.localPath}"`, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    console.log(`✅ Успешно скачано: ${image.localPath}`);
  } catch (error) {
    console.error(`❌ Ошибка при скачивании ${image.url}:`, error.message);
  }
});

console.log('🎉 Скачивание завершено!'); 