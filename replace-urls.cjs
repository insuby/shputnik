const fs = require('fs');
const path = require('path');

// Функция для замены URL в файле
function replaceUrlsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // P2P страница
    const p2pReplacements = [
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-5.svg', to: '/img/p2p/vector-1-5.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-1.svg', to: '/img/p2p/vector-1-1.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-1948755022.png', to: '/img/p2p/frame-1948755022.png' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-8.svg', to: '/img/p2p/vector-8.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-5.svg', to: '/img/p2p/vector-5.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector.svg', to: '/img/p2p/vector.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-21.svg', to: '/img/p2p/vector-21.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-7.svg', to: '/img/p2p/vector-7.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-4-1.svg', to: '/img/p2p/vector-4-1.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-147.svg', to: '/img/p2p/vector-147.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-3.svg', to: '/img/p2p/vector-1-3.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-19-4.svg', to: '/img/p2p/frame-19-4.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-4-4.svg', to: '/img/p2p/vector-4-4.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-19-5.svg', to: '/img/p2p/frame-19-5.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-10.svg', to: '/img/p2p/vector-1-10.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-152.svg', to: '/img/p2p/vector-152.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-160.svg', to: '/img/p2p/vector-160.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-161.svg', to: '/img/p2p/vector-161.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-162.svg', to: '/img/p2p/vector-162.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-17.svg', to: '/img/p2p/frame-17.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-138.svg', to: '/img/p2p/vector-138.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-6.svg', to: '/img/p2p/vector-1-6.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-9.svg', to: '/img/p2p/vector-9.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-83-4.svg', to: '/img/p2p/frame-83-4.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-83-5.svg', to: '/img/p2p/frame-83-5.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-83-6.svg', to: '/img/p2p/frame-83-6.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-7.svg', to: '/img/p2p/vector-1-7.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-1-11.svg', to: '/img/p2p/vector-1-11.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-136-1.svg', to: '/img/p2p/vector-136-1.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-137.svg', to: '/img/p2p/vector-137.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-136.svg', to: '/img/p2p/vector-136.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-137-1.svg', to: '/img/p2p/vector-137-1.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/vector-3-1.svg', to: '/img/p2p/vector-3-1.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/subtract.svg', to: '/img/p2p/subtract.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/subtract-2.svg', to: '/img/p2p/subtract-2.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/subtract-1.svg', to: '/img/p2p/subtract-1.svg' },
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/subtract-3.svg', to: '/img/p2p/subtract-3.svg' },
    ];

    // IslamFinans страница
    const islamfinansReplacements = [
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-1-7.svg', to: '/img/islamfinans/vector-1-7.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector.svg', to: '/img/islamfinans/vector.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-1.svg', to: '/img/islamfinans/vector-1.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-19.svg', to: '/img/islamfinans/vector-19.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-17.svg', to: '/img/islamfinans/vector-17.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-6.svg', to: '/img/islamfinans/vector-6.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-20.svg', to: '/img/islamfinans/vector-20.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-8.svg', to: '/img/islamfinans/vector-8.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-18.svg', to: '/img/islamfinans/vector-18.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-16.svg', to: '/img/islamfinans/vector-16.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-7.svg', to: '/img/islamfinans/vector-7.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-5.svg', to: '/img/islamfinans/vector-5.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-13.svg', to: '/img/islamfinans/vector-13.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-4.svg', to: '/img/islamfinans/vector-4.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/side-view-business-man-outdoor-1.png', to: '/img/islamfinans/business-man.png' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-141.svg', to: '/img/islamfinans/vector-141.svg' },
      { from: 'https://c.animaapp.com/mdbz7w7uO4dbSg/img/vector-4-3.svg', to: '/img/islamfinans/vector-4-3.svg' },
    ];

    // BankCredit страница
    const bankcreditReplacements = [
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-1-9.svg', to: '/img/bankcredit/vector-1-9.svg' },
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/frame-1948755022-1.png', to: '/img/bankcredit/frame-1948755022-1.png' },
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-10.svg', to: '/img/bankcredit/vector-10.svg' },
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-7.svg', to: '/img/bankcredit/vector-7.svg' },
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-11.svg', to: '/img/bankcredit/vector-11.svg' },
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-8.svg', to: '/img/bankcredit/vector-8.svg' },
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-44.svg', to: '/img/bankcredit/vector-44.svg' },
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-21.svg', to: '/img/bankcredit/vector-21.svg' },
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-15.svg', to: '/img/bankcredit/vector-15.svg' },
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-14.svg', to: '/img/bankcredit/vector-14.svg' },
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-5.svg', to: '/img/bankcredit/vector-5.svg' },
    ];

    // Autocredit страница
    const autocreditReplacements = [
      { from: 'https://c.animaapp.com/mdbwdb25WGmSiu/img/vector-1-9.svg', to: '/img/autocredit/vector-1-9.svg' },
      { from: 'https://c.animaapp.com/mdbwdb25WGmSiu/img/vector.svg', to: '/img/autocredit/vector.svg' },
      { from: 'https://c.animaapp.com/mdbwdb25WGmSiu/img/vector-7.svg', to: '/img/autocredit/vector-7.svg' },
      { from: 'https://c.animaapp.com/mdbwdb25WGmSiu/img/vector-4-3.svg', to: '/img/autocredit/vector-4-3.svg' },
    ];

    // Feedback widget
    const feedbackReplacements = [
      { from: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-1.svg', to: '/img/feedback/vector-1.svg' },
      { from: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-2-1.svg', to: '/img/feedback/vector-2-1.svg' },
      { from: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-147.svg', to: '/img/feedback/vector-147.svg' },
      { from: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-4.svg', to: '/img/feedback/vector-4.svg' },
      { from: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/ellipse-32.svg', to: '/img/feedback/ellipse-32.svg' },
    ];

    // About страница
    const aboutReplacements = [
      { from: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-1-1.svg', to: '/img/about/vector-1-1.svg' },
      { from: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-3.svg', to: '/img/about/vector-3.svg' },
      { from: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-2.svg', to: '/img/about/vector-2.svg' },
      { from: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/vector-3-1.svg', to: '/img/about/vector-3-1.svg' },
      { from: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/coat-of-arms-of-moscow.svg', to: '/img/about/coat-of-arms-of-moscow.svg' },
      { from: 'https://c.animaapp.com/mdbvk8mczCRqJy/img/rus-murmansk-coa.svg', to: '/img/about/rus-murmansk-coa.svg' },
    ];

    // Trust widget
    const trustReplacements = [
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-17-1.svg', to: '/img/trust/frame-17-1.svg' },
    ];

    // Zain checker widget
    const zainCheckerReplacements = [
      { from: 'https://c.animaapp.com/mdextfbtMdhAnq/img/vector-1.svg', to: '/img/zain-checker/vector-1.svg' },
      { from: 'https://c.animaapp.com/mdextfbtMdhAnq/img/frame-18-2.svg', to: '/img/zain-checker/frame-18-2.svg' },
      { from: 'https://c.animaapp.com/mdextfbtMdhAnq/img/vector-129.svg', to: '/img/zain-checker/vector-129.svg' },
      { from: 'https://c.animaapp.com/mdextfbtMdhAnq/img/frame-18-4.svg', to: '/img/zain-checker/frame-18-4.svg' },
      { from: 'https://c.animaapp.com/mdextfbtMdhAnq/img/vector-1-1.svg', to: '/img/zain-checker/vector-1-1.svg' },
    ];

    // Объединяем все замены
    const allReplacements = [
      ...p2pReplacements,
      ...islamfinansReplacements,
      ...bankcreditReplacements,
      ...autocreditReplacements,
      ...feedbackReplacements,
      ...aboutReplacements,
      ...trustReplacements,
      ...zainCheckerReplacements
    ];

    // Выполняем замены
    allReplacements.forEach(replacement => {
      if (content.includes(replacement.from)) {
        content = content.replace(new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement.to);
        hasChanges = true;
      }
    });

    // Заменяем background URL
    const backgroundReplacements = [
      { from: 'https://c.animaapp.com/mdewjqqsHhwSma/img/frame-1948755022.png', to: '/img/p2p/frame-1948755022.png' },
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/frame-1948755022-1.png', to: '/img/bankcredit/frame-1948755022-1.png' },
      { from: 'https://c.animaapp.com/mdezuaqhB7xfWK/img/vector-14.svg', to: '/img/bankcredit/vector-14.svg' },
    ];

    backgroundReplacements.forEach(replacement => {
      if (content.includes(replacement.from)) {
        content = content.replace(new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement.to);
        hasChanges = true;
      }
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Обновлен файл: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Ошибка при обработке ${filePath}:`, error.message);
  }
}

// Список файлов для обработки
const filesToProcess = [
  'src/screens/P2P/index.tsx',
  'src/screens/IslamFinans/index.tsx',
  'src/screens/BankCredit/index.tsx',
  'src/screens/Autocredit/index.tsx',
  'src/widgets/feedback.tsx',
  'src/screens/About/index.tsx',
  'src/widgets/trust.tsx',
  'src/widgets/zain-checker.tsx'
];

console.log('Начинаем замену внешних URL на локальные пути...');

filesToProcess.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    replaceUrlsInFile(filePath);
  } else {
    console.log(`⚠️ Файл не найден: ${filePath}`);
  }
});

console.log('🎉 Замена URL завершена!'); 