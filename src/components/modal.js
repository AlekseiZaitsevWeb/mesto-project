import {selectors, classAction} from './utils/constants.js';
import {addCard} from './card.js';

// popup
const popupList = document.querySelectorAll(selectors.popupSelector);
// profileEdit
const profileEditButtonElement = document.querySelector(selectors.profileEditButtonSelector);
const profileNameTextElement = document.querySelector(selectors.profileNameTextSelector);
const profileJobTextElement  = document.querySelector(selectors.profileJobTextSelector);
// profilePopup
const profilePopupElement = document.querySelector(selectors.profilePopupSelector);
const profilePopupNameInputElement = profilePopupElement.querySelector(selectors.profilePopupNameInputSelector);
const profilePopupJobInputElement  = profilePopupElement.querySelector(selectors.profilePopupJobInputSelector);
const profilePopupFormElement = profilePopupElement.querySelector(selectors.profilePopupFormSelector);
const profilePopupSubmitButtonElement = profilePopupElement.querySelector(selectors.submitButtonForm);
// placeAddButton
const addPlaceButtonElement = document.querySelector(selectors.addPlaceButtonSelector);
// placeAddPopup
const addPlacePopupElement = document.querySelector(selectors.addPlacePopupSelector);
const addPlacePopupFormElement = addPlacePopupElement.querySelector(selectors.addPlacePopupFormSelector);
const addPlacePopupNameInputElement = addPlacePopupFormElement.querySelector(selectors.addPlacePopupNameInputSelector);
const addPlacePopupLinkInputElement = addPlacePopupFormElement.querySelector(selectors.addPlacePopupLinkInputSelector);
const addPlacePopupSubmitButtonElement = addPlacePopupElement.querySelector(selectors.submitButtonForm);
// viewPopup
const viewPopupElement = document.querySelector(selectors.viewPopupSelector);
const viewPopupImageElement = viewPopupElement.querySelector(selectors.viewPopupImageSelector);
const viewPopupCaptionElement = viewPopupElement.querySelector(selectors.viewPopupCaptionSelector);

// Закрытие popup по кнопке Escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupElementActive = document.querySelector(`.${classAction.popupOpenedClass}`);
    if(popupElementActive) {
      closePopup(popupElementActive);
    }
  }
}

// Открытие popup
function openPopup(element) {
  element.classList.add(classAction.popupOpenedClass);
  document.addEventListener('keydown', closeByEscape);
}

// Закрытие popup
function closePopup(element) {
  element.classList.remove(classAction.popupOpenedClass);
  document.removeEventListener('keydown', closeByEscape);
}

// Открытие popup view
export function openPopupView(data){
  viewPopupImageElement.setAttribute('src', data.link);
  viewPopupImageElement.setAttribute('alt', `Изображение ${data.name}`);
  viewPopupCaptionElement.textContent = data.name;
  openPopup(viewPopupElement);
}

// Закрытие popup по оверлей
const closePopupByClickOnOverlay = ( event ) => {
  const target = event.target;
  const currentTarget = event.currentTarget;
  if (target === currentTarget) {
    closePopup(event.currentTarget);
  }
}

// Сохранение введенных данные в профиль
function saveEditProfile(event){
  event.preventDefault();
  profileNameTextElement.textContent = profilePopupNameInputElement.value;
  profileJobTextElement.textContent = profilePopupJobInputElement.value;
  closePopup(profilePopupElement);
}

// Подключение profilePopup
const enableModalProfile = () => {
  profileEditButtonElement.addEventListener('click', () => {
    profilePopupNameInputElement.value = profileNameTextElement.textContent;
    profilePopupJobInputElement.value = profileJobTextElement.textContent;
    profilePopupSubmitButtonElement.setAttribute('disabled', true);
    openPopup(profilePopupElement);
  });
  profilePopupFormElement.addEventListener('submit', saveEditProfile);
}

// Добавление карточки
function addPlace(event){
  event.preventDefault();
  addCard(addPlacePopupNameInputElement.value, addPlacePopupLinkInputElement.value);
  closePopup(addPlacePopupElement);
  addPlacePopupNameInputElement.value = '';
  addPlacePopupLinkInputElement.value = '';
  addPlacePopupSubmitButtonElement.setAttribute('disabled', true);
}

// Подключение addPlacePopup
const enableModalAddPlace = () => {
  addPlaceButtonElement.addEventListener('click', () => openPopup(addPlacePopupElement));
  addPlacePopupFormElement.addEventListener('submit', addPlace);
}

// Подключение всех popup
export const enableModal = () => {
  enableModalProfile();
  enableModalAddPlace();

  popupList.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(classAction.popupOpenedClass)) {
        closePopup(popup)
      }
      if (evt.target.classList.contains(classAction.popupCloseButtonSelector)) {
        closePopup(popup)
      }
    })
  })
}
