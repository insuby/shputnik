const fs = require('fs');
const path = require('path');

// Функция для замены URL в файле
function replaceUrlsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // P2P страница
    const p2pReplacements = [

    ];

    // IslamFinans страница
    const islamfinansReplacements = [

    ];

    // BankCredit страница
    const bankcreditReplacements = [

    ];

    // Autocredit страница
    const autocreditReplacements = [
    ];

    // Feedback widget
    const feedbackReplacements = [
    ];

    // About страница
    const aboutReplacements = [
    ];

    // Trust widget
    const trustReplacements = [
    ];

    // Zain checker widget
    const zainCheckerReplacements = [
    ];

    // BusinessCredit страница
    const businesscreditReplacements = [
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
      ...zainCheckerReplacements,
      ...businesscreditReplacements
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
  'src/widgets/zain-checker.tsx',
  'src/screens/BusinessCredit/index.tsx'
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