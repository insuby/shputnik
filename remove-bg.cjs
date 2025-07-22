const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Список PNG файлов для обработки
const pngFiles = [
  'public/img/bnpl/frame-1948755022-1.png',
  'public/img/business-man.png',
  'public/img/frame-21.png',
  'public/img/woman-tablet.png',
  'public/img/woman-tablet-2.png',
  'public/img/frame-2.png',
  'public/img/frame-6.png',
  'public/img/screenshot-11.png',
  'public/img/screenshot-13.png',
  'public/img/screenshot-12.png',
  'public/img/about-frame-2.png',
  'public/img/about-frame-6.png'
];

console.log('Начинаем удаление белого фона с PNG изображений...');
console.log(`Всего файлов для обработки: ${pngFiles.length}`);

pngFiles.forEach((filePath, index) => {
  try {
    if (fs.existsSync(filePath)) {
      console.log(`[${index + 1}/${pngFiles.length}] Обрабатываем: ${filePath}`);
      
      // Создаем временный файл
      const tempFile = filePath.replace('.png', '_temp.png');
      
      // Применяем прозрачность к белому фону с помощью ImageMagick
      execSync(`magick "${filePath}" -fuzz 10% -transparent white "${tempFile}"`, {
        stdio: 'inherit',
        cwd: process.cwd()
      });
      
      // Заменяем оригинальный файл
      fs.renameSync(tempFile, filePath);
      
      console.log(`✅ Успешно обработан: ${filePath}`);
    } else {
      console.log(`⚠️ Файл не найден: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Ошибка при обработке ${filePath}:`, error.message);
  }
});

console.log('🎉 Удаление фона завершено!'); 