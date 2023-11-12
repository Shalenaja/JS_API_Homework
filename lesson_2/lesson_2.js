"use strict";
/* Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

a. Контейнер для отображения текущего изображения.
b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

2. Используйте HTML для создания элементов интерфейса.

3. Используйте JavaScript для обработки событий:

a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида. */

const btnSlider = document.querySelectorAll(".btnSlider");
const indicators = document.querySelectorAll(".slider__indicator");
let currentIndex = 0;
const amountSlides = document.querySelectorAll(".slider__item").length;

btnSlider.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "Next") {
      currentIndex = currentIndex + 1;
      if (currentIndex <= amountSlides) {
        slideElementByDataAttribute("data-slide", currentIndex, "Next");
      } else {
        currentIndex = 1;
        slideElementByDataAttribute("data-slide", currentIndex, "Next");
      }
    } else {
      currentIndex = currentIndex - 1;
      if (currentIndex > -1) {
        slideElementByDataAttribute("data-slide", currentIndex, "Previous");
      } else {
        currentIndex = amountSlides - 1;
        slideElementByDataAttribute("data-slide", currentIndex, "Previous");
      }
    }
  });
});

indicators.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    const idIndicator = Number(e.target.id);
    showSlide("data-slide", idIndicator);
  });
});

const slideElementByDataAttribute = (attributeName, currentIndex, btnText) => {
  if (btnText === "Next") {
    const elements = Array.from(
      document.querySelectorAll(`[${attributeName}]`)
    );
    elements.forEach((element, index) => {
      const slideCurrent = parseFloat(element.getAttribute(attributeName));
      if (currentIndex === slideCurrent && currentIndex <= elements.length) {
        elements[index - 1].style.display = "none";
        element.style.display = "block";
      }
      if (currentIndex === elements.length) {
        elements[elements.length - 1].style.display = "none";
        elements[0].style.display = "block";
      }
    });
  } else {
    const elements = Array.from(
      document.querySelectorAll(`[${attributeName}]`)
    );
    elements.forEach((element, index) => {
      const slideCurrent = parseFloat(element.getAttribute(attributeName));
      if (currentIndex === slideCurrent && currentIndex < elements.length - 1) {
        elements[index + 1].style.display = "none";
        element.style.display = "block";
      }
      if (currentIndex === elements.length - 1) {
        elements[0].style.display = "none";
        elements[elements.length - 1].style.display = "block";
      }
    });
  }
};

const showSlide = (attributeName, idIndicator) => {
  const elements = Array.from(document.querySelectorAll(`[${attributeName}]`));
  elements.forEach((element, index) => {
    const slideCurrent = parseFloat(element.getAttribute(attributeName));
    console.log(idIndicator);
    if (idIndicator === slideCurrent) {
      element.style.display = "block";
      currentIndex = idIndicator;
    } else {
      element.style.display = "none";
    }
  });
};
