import {selectors} from './constants.js';

const getElements(selectors) {
  for (var key in selectors) {
    if(key.isArray()) {
      const key = document.querySelectorAll(selectors[key]);
    } else {
      const key = document.querySelector(selectors[key]);
    }
  }
}

// // popup
// const popupList = document.querySelectorAll(popup.selector);  // popup
// const closeButtonElements = document.querySelectorAll(popup.closeButtonSelector); // Список кнопкок закрытия popup
// // card
// const cardTemplateElement = document.querySelector(card.templateSelector).content; // Получаю шаблон карточки
// const wrapCardsElement =  document.querySelector(card.wrapSelector); // Врапер для карточек
// //
// const profileEditBtnElement = document.querySelector(profilePopup.editButtonSelector); // Кнопка редактировать профиль
// const popupProfileEditElement = document.querySelector(profilePopup.selector); // Popup Profile Edit
// const nameTextElement = document.querySelector(profilePopup.nameTextSelector); // Получаю элементы полей в профиле
// const jobTextElement  = document.querySelector(profilePopup.jobTextSelector); // Получаю элементы полей в профиле
// const nameInputElement = popupProfileEditElement.querySelector(profilePopup.nameInputSelector); // Получаю инпуты из формы редактирования профиля
// const jobInputElement  = popupProfileEditElement.querySelector(profilePopup.jobInputSelector); // Получаю инпуты из формы редактирования профиля
// const formProfileEditElement = popupProfileEditElement.querySelector(profilePopup.formSelector);  // Форма Profile Edit

// const popupPlaceAddElement = document.querySelector(addPlacePopup.selector); // Popup Place Add
// const placeAddBtnElement = document.querySelector(addPlacePopup.buttonSelector); // Кнопка добавить место
// const formPlaceAddElement = popupPlaceAddElement.querySelector(addPlacePopup.formSelector); // Форма добавления места
// const addPlaceNameInputElement = formPlaceAddElement.querySelector(addPlacePopup.nameInputSelector); // Получаю значения полей из формы
// const addPlaceLinkInputElement = formPlaceAddElement.querySelector(addPlacePopup.linkInputSelector); // Получаю значения полей из формы

// const popupImageElement = document.querySelector(viewPopup.selector); // Получаю элемент popup wiew
// const imageElement = popupImageElement.querySelector(viewPopup.imageSelector); // Элемент картинки
// const captionElement = popupImageElement.querySelector(viewPopup.captionSelector); // Название картинки
