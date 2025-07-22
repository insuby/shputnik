const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Список изображений для скачивания, разложенных по папкам
const imagesToDownload = [
  // P2P страница
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-5.svg',
    localPath: 'public/img/p2p/vector-1-5.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-1.svg',
    localPath: 'public/img/p2p/vector-1-1.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-1948755022.png',
    localPath: 'public/img/p2p/frame-1948755022.png'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-8.svg',
    localPath: 'public/img/p2p/vector-8.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-5.svg',
    localPath: 'public/img/p2p/vector-5.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector.svg',
    localPath: 'public/img/p2p/vector.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-21.svg',
    localPath: 'public/img/p2p/vector-21.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-7.svg',
    localPath: 'public/img/p2p/vector-7.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-4-1.svg',
    localPath: 'public/img/p2p/vector-4-1.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-147.svg',
    localPath: 'public/img/p2p/vector-147.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-3.svg',
    localPath: 'public/img/p2p/vector-1-3.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-19-4.svg',
    localPath: 'public/img/p2p/frame-19-4.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-4-4.svg',
    localPath: 'public/img/p2p/vector-4-4.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-19-5.svg',
    localPath: 'public/img/p2p/frame-19-5.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-10.svg',
    localPath: 'public/img/p2p/vector-1-10.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-152.svg',
    localPath: 'public/img/p2p/vector-152.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-160.svg',
    localPath: 'public/img/p2p/vector-160.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-161.svg',
    localPath: 'public/img/p2p/vector-161.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-162.svg',
    localPath: 'public/img/p2p/vector-162.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-17.svg',
    localPath: 'public/img/p2p/frame-17.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-138.svg',
    localPath: 'public/img/p2p/vector-138.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-6.svg',
    localPath: 'public/img/p2p/vector-1-6.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-9.svg',
    localPath: 'public/img/p2p/vector-9.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-83-4.svg',
    localPath: 'public/img/p2p/frame-83-4.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-83-5.svg',
    localPath: 'public/img/p2p/frame-83-5.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-83-6.svg',
    localPath: 'public/img/p2p/frame-83-6.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-7.svg',
    localPath: 'public/img/p2p/vector-1-7.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-11.svg',
    localPath: 'public/img/p2p/vector-1-11.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-136-1.svg',
    localPath: 'public/img/p2p/vector-136-1.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-137.svg',
    localPath: 'public/img/p2p/vector-137.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-136.svg',
    localPath: 'public/img/p2p/vector-136.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-137-1.svg',
    localPath: 'public/img/p2p/vector-137-1.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-3-1.svg',
    localPath: 'public/img/p2p/vector-3-1.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/subtract.svg',
    localPath: 'public/img/p2p/subtract.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/subtract-2.svg',
    localPath: 'public/img/p2p/subtract-2.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/subtract-1.svg',
    localPath: 'public/img/p2p/subtract-1.svg'
  },
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/subtract-3.svg',
    localPath: 'public/img/p2p/subtract-3.svg'
  },

  // IslamFinans страница
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-1-7.svg',
    localPath: 'public/img/islamfinans/vector-1-7.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector.svg',
    localPath: 'public/img/islamfinans/vector.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-1.svg',
    localPath: 'public/img/islamfinans/vector-1.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-19.svg',
    localPath: 'public/img/islamfinans/vector-19.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-17.svg',
    localPath: 'public/img/islamfinans/vector-17.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-6.svg',
    localPath: 'public/img/islamfinans/vector-6.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-20.svg',
    localPath: 'public/img/islamfinans/vector-20.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-8.svg',
    localPath: 'public/img/islamfinans/vector-8.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-18.svg',
    localPath: 'public/img/islamfinans/vector-18.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-16.svg',
    localPath: 'public/img/islamfinans/vector-16.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-7.svg',
    localPath: 'public/img/islamfinans/vector-7.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-5.svg',
    localPath: 'public/img/islamfinans/vector-5.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-13.svg',
    localPath: 'public/img/islamfinans/vector-13.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-4.svg',
    localPath: 'public/img/islamfinans/vector-4.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/side-view-business-man-outdoor-1.png',
    localPath: 'public/img/islamfinans/business-man.png'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-141.svg',
    localPath: 'public/img/islamfinans/vector-141.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-4-3.svg',
    localPath: 'public/img/islamfinans/vector-4-3.svg'
  },

  // BankCredit страница
  {
    url: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-1-9.svg',
    localPath: 'public/img/bankcredit/vector-1-9.svg'
  },
  {
    url: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/frame-1948755022-1.png',
    localPath: 'public/img/bankcredit/frame-1948755022-1.png'
  },
  {
    url: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-10.svg',
    localPath: 'public/img/bankcredit/vector-10.svg'
  },
  {
    url: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-7.svg',
    localPath: 'public/img/bankcredit/vector-7.svg'
  },
  {
    url: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-11.svg',
    localPath: 'public/img/bankcredit/vector-11.svg'
  },
  {
    url: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-8.svg',
    localPath: 'public/img/bankcredit/vector-8.svg'
  },
  {
    url: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-44.svg',
    localPath: 'public/img/bankcredit/vector-44.svg'
  },
  {
    url: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-21.svg',
    localPath: 'public/img/bankcredit/vector-21.svg'
  },
  {
    url: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-15.svg',
    localPath: 'public/img/bankcredit/vector-15.svg'
  },
  {
    url: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-14.svg',
    localPath: 'public/img/bankcredit/vector-14.svg'
  },
  {
    url: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-5.svg',
    localPath: 'public/img/bankcredit/vector-5.svg'
  },

  // Autocredit страница
  {
    url: 'https://c.animaapp.com/mdbwdb25WGmSiu/img/vector-1-9.svg',
    localPath: 'public/img/autocredit/vector-1-9.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbwdb25WGmSiu/img/vector.svg',
    localPath: 'public/img/autocredit/vector.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbwdb25WGmSiu/img/vector-7.svg',
    localPath: 'public/img/autocredit/vector-7.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbwdb25WGmSiu/img/vector-4-3.svg',
    localPath: 'public/img/autocredit/vector-4-3.svg'
  },

  // Feedback widget
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-1.svg',
    localPath: 'public/img/feedback/vector-1.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-2-1.svg',
    localPath: 'public/img/feedback/vector-2-1.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-147.svg',
    localPath: 'public/img/feedback/vector-147.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-4.svg',
    localPath: 'public/img/feedback/vector-4.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/ellipse-32.svg',
    localPath: 'public/img/feedback/ellipse-32.svg'
  },

  // About страница
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-1-1.svg',
    localPath: 'public/img/about/vector-1-1.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-3.svg',
    localPath: 'public/img/about/vector-3.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-2.svg',
    localPath: 'public/img/about/vector-2.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-3-1.svg',
    localPath: 'public/img/about/vector-3-1.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/coat-of-arms-of-moscow.svg',
    localPath: 'public/img/about/coat-of-arms-of-moscow.svg'
  },
  {
    url: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/rus-murmansk-coa.svg',
    localPath: 'public/img/about/rus-murmansk-coa.svg'
  },

  // Trust widget
  {
    url: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-17-1.svg',
    localPath: 'public/img/trust/frame-17-1.svg'
  },

  // Zain checker widget
  {
    url: 'https://c.animaapp.com/mdextfbtMdhAnq/img/vector-1.svg',
    localPath: 'public/img/zain-checker/vector-1.svg'
  },
  {
    url: 'https://c.animaapp.com/mdextfbtMdhAnq/img/frame-18-2.svg',
    localPath: 'public/img/zain-checker/frame-18-2.svg'
  },
  {
    url: 'https://c.animaapp.com/mdextfbtMdhAnq/img/vector-129.svg',
    localPath: 'public/img/zain-checker/vector-129.svg'
  },
  {
    url: 'https://c.animaapp.com/mdextfbtMdhAnq/img/frame-18-4.svg',
    localPath: 'public/img/zain-checker/frame-18-4.svg'
  },
  {
    url: 'https://c.animaapp.com/mdextfbtMdhAnq/img/vector-1-1.svg',
    localPath: 'public/img/zain-checker/vector-1-1.svg'
  }
];

console.log('Начинаем скачивание всех изображений...');
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