module.exports = {
  // Автоматический режим - оптимизирует все компоненты
  compilationMode: 'infer',
  
  // Включаем отладку в development режиме
  debug: process.env.NODE_ENV === 'development',
};
