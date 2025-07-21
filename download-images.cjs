const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Список изображений для скачивания
const imagesToDownload = [
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/frame-1948755022-1.png',
    localPath: 'public/img/bnpl/frame-1948755022-1.png'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/side-view-business-man-outdoor-1.png',
    localPath: 'public/img/business-man.png'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/frame-21.png',
    localPath: 'public/img/frame-21.png'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/woman-with-tablet-device-illustrating-1.png',
    localPath: 'public/img/woman-tablet.png'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/woman-with-tablet-device-illustrating-1-1.png',
    localPath: 'public/img/woman-tablet-2.png'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/frame-2.png',
    localPath: 'public/img/frame-2.png'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/frame-6.png',
    localPath: 'public/img/frame-6.png'
  },
  {
    url: 'https://c.animaapp.com/mdbwdb25WGmSiu/img/screenshot-11.png',
    localPath: 'public/img/screenshot-11.png'
  },
  {
    url: 'https://c.animaapp.com/mdbwdb25WGmSiu/img/screenshot-13.png',
    localPath: 'public/img/screenshot-13.png'
  },
  {
    url: 'https://c.animaapp.com/mdbwdb25WGmSiu/img/screenshot-12.png',
    localPath: 'public/img/screenshot-12.png'
  },
  // Дополнительные изображения из background
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/frame-2.png',
    localPath: 'public/img/about-frame-2.png'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/frame-6.png',
    localPath: 'public/img/about-frame-6.png'
  }
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