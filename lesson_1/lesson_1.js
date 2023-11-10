"use strict";
/* Отслеживание изменения ориентации экрана:
Напишите код, который отслеживает изменение ориентации экрана устройства (с портретной на ландшафтную и наоборот) и выводит сообщение об этом на веб-странице. */

const message = document.querySelector(".message");

window.addEventListener("orientationchange", function () {
    const mesEl = document.createElement("h2");
    mesEl.textContent = "изменена ориентация экрана устройства";
    message.append(mesEl);
  }, false
);

/* Предупреждение о несохраненных данных:
Создайте веб-форму с текстовым полем. Реализуйте функционал, при котором при попытке закрыть вкладку браузера появляется диалоговое окно с предупреждением о возможности потери введенных, но несохраненных данных. */


window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});

//для ссылки:
const linkEl = document.querySelector(".link-exit");
linkEl.addEventListener("click", () => {
    if (confirm("Вы действительно хотите закрыть страницу? Данные бутут потеряны. Продолжить закрытие?")) {
      window.close();
    }
  });
