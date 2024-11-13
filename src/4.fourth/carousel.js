document.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images img");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;
  const imageWidth = images[0].clientWidth;
  let interval;

  // Функция для показа изображения
  function showImage(index) {
    carouselImages.style.transform = `translateX(${-index * imageWidth}px)`;
  }

  // Автоматическая смена изображений
  function startCarousel() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 3000);
  }

  // Остановка карусели при мануальном управлении
  function stopCarousel() {
    clearInterval(interval);
  }

  // Обработка кнопки "Назад"
  prevButton.addEventListener("click", () => {
    stopCarousel();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    startCarousel(); // перезапуск карусели после ручного управления
  });

  // Обработка кнопки "Вперед"
  nextButton.addEventListener("click", () => {
    stopCarousel();
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    startCarousel(); // перезапуск карусели после ручного управления
  });

  // Запуск карусели при загрузке страницы
  startCarousel();
});
