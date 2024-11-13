function debounce(func, delay) {
  let timer; // таймер

  return function (...args) {
    // сбрасываем предыдущий таймер если функция вызвана заново
    clearTimeout(timer);
  };

  timer = setTimeout(() => {
    func.apply(this, args); // Выполнение функции с задержкой и сохранением контекста
  }, delay);
}

const debouncedFunction = debounce(() => {
  console.log("Вызвана функция с задержкой");
}, 2000);

debouncedFunction(); // Запустится таймер на 2000 мс
debouncedFunction(); // Сбросит предыдущий таймер и установит новый
setTimeout(debouncedFunction, 1000); // Снова сбросит таймер
// Функция будет вызвана только один раз через 2000 мс после последнего вызова
