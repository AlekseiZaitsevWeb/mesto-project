import {renderCard, createCardElement} from './card.js';

// Открытие popup
function openPopup(element, openedClass) {
  element.classList.add(openedClass);
}


// Закрытие popup
function closePopup(element, openedClass) {
  element.classList.remove(openedClass);
}


// Закрытие popup по оверлей
const closePopupByClickOnOverlay = ( openedClass ) => ( event ) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target === currentTarget) {
    closePopup(event.currentTarget, openedClass);
  }
}


// Добавление карточки
function addPlace(popupElement, nameInputElement, linkInputElement, card, viewPopup, openedClass){

  // Получаю шаблон карточки
  const cardTemplateElement = document.querySelector(card.templateSelector).content;

  // Врапер для карточек
  const wrapCardsElement =  document.querySelector(card.wrapSelector);

  // Создаю и вывожу карточку
  renderCard(createCardElement({name: nameInputElement.value, link: linkInputElement.value}, cardTemplateElement, card, viewPopup, openedClass), wrapCardsElement);

  // Закрываю окно
  closePopup(popupElement, openedClass);

  // Очищаю поля
  nameInputElement.value = '';
  linkInputElement.value = '';
}


// Сохранение введенных данные в профиль
function saveEditProfile(popupElement, nameTextElement, jobTextElement,  nameInputElement, jobInputElement, openedClass){

  // Записываю значения в профиль
  nameTextElement.textContent = nameInputElement.value;
  jobTextElement.textContent = jobInputElement.value;

  // Закрываю окно
  closePopup(popupElement, openedClass);
}


const enableModalProfile = (profilePopup, openedClass) => {

  //--- Получаю элементы ---

  // Кнопка редактировать профиль
  const profileEditBtnElement = document.querySelector(profilePopup.editButtonSelector);

  // Popup Profile Edit
  const popupProfileEditElement = document.querySelector(profilePopup.selector);

  // Получаю элементы полей в профиле
  const nameTextElement = document.querySelector(profilePopup.nameTextSelector);
  const jobTextElement  = document.querySelector(profilePopup.jobTextSelector);

  // Получаю инпуты из формы редактирования профиля
  const nameInputElement = popupProfileEditElement.querySelector(profilePopup.nameInputSelector);
  const jobInputElement  = popupProfileEditElement.querySelector(profilePopup.jobInputSelector);

  // Форма Profile Edit
  const formProfileEditElement = popupProfileEditElement.querySelector(profilePopup.formSelector);


  //--- Вешаю слушателей ---


  // Открытие popup edit profile
  profileEditBtnElement.addEventListener('click', () => {

    // Записываю в поля формы из разметки
    nameInputElement.value = nameTextElement.textContent;
    jobInputElement.value = jobTextElement.textContent;

    // Открываю popup
    openPopup(popupProfileEditElement, openedClass);
  });

  // Сохранение данных в профиле
  formProfileEditElement.addEventListener('submit', (evt) => {
    saveEditProfile(popupProfileEditElement, nameTextElement, jobTextElement,  nameInputElement, jobInputElement, openedClass);
  });
}


const enableModalAddPlace = (addPlacePopup, openedClass, card, viewPopup) => {

  //--- Получаю элементы ---

  // Popup Place Add
  const popupPlaceAddElement = document.querySelector(addPlacePopup.selector);

  // Кнопка добавить место
  const placeAddBtnElement = document.querySelector(addPlacePopup.buttonSelector);

  // Форма добавления места
  const formPlaceAddElement = popupPlaceAddElement.querySelector(addPlacePopup.formSelector);

  // Получаю значения полей из формы
  const addPlaceNameInputElement = formPlaceAddElement.querySelector(addPlacePopup.nameInputSelector);
  const addPlaceLinkInputElement = formPlaceAddElement.querySelector(addPlacePopup.linkInputSelector);

  //--- Вешаю слушателей ---

  // Открытие popup add place
  placeAddBtnElement.addEventListener('click', () => openPopup(popupPlaceAddElement, openedClass));

  // Добавление карточки
  formPlaceAddElement.addEventListener('submit', (evt) => {
    addPlace(popupPlaceAddElement, addPlaceNameInputElement, addPlaceLinkInputElement, card, viewPopup, openedClass);
  });
}


// Открытие popup view
export function openPopupView(data, viewPopup, openedClass){

  // Получаю элемент popup wiew
  const popupImageElement = document.querySelector(viewPopup.selector);

  // Загружаю данные
  const imageElement = popupImageElement.querySelector(viewPopup.imageSelector);
  imageElement.setAttribute('src', data.link);
  imageElement.setAttribute('alt', `Изображение ${data.name}`);
  const captionElement = popupImageElement.querySelector(viewPopup.captionSelector);
  captionElement.textContent = data.name;

  // Открываю popup
  openPopup(popupImageElement, openedClass);
}


export const enableModal = (popup, profilePopup, addPlacePopup, viewPopup, card) => {

  // Список кнопкок закрытия popup
  const closeButtonElements = document.querySelectorAll(popup.closeButtonSelector);

  // popup
  const popupList = document.querySelectorAll(popup.selector);

  //--- Вешаю слушателей ---

  // Закрытие popup по кноке крестик
  closeButtonElements.forEach(closeButtonElement => {
    closeButtonElement.addEventListener('click', (evt) => {
      closePopup(evt.target.closest(popup.selector), popup.openedClass);
    })
  })

  // Закрытие popup по оверлею
  popupList.forEach(item => {
    item.addEventListener('click', closePopupByClickOnOverlay(popup.openedClass));
  })

  // Закрытие popup по кнопке Esc
  document.addEventListener('keydown', function (event) {
    if(event.key === 'Escape') {
      const popupElementActive = document.querySelector(`.${popup.openedClass}`);
      if(popupElementActive) {
        closePopup(popupElementActive, popup.openedClass);
      }
    }
  });

  // Подключаю окно - Редактировать профиль
  enableModalProfile(profilePopup, popup.openedClass);

  // Подключаю окно - Добавить место
  enableModalAddPlace(addPlacePopup, popup.openedClass, card, viewPopup);
}
