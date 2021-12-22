import {selectors, classAction} from './utils/constants';
import {renderCard, createCardElement} from './card.js';

// popup
const popupList = document.querySelectorAll(selectors.popupSelector);
const popupCloseButtonList = document.querySelectorAll(selectors.popupCloseButtonSelector);
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
// card
const cardTemplateElement = document.querySelector(selectors.cardTemplateSelector).content;
const cardWrapElement =  document.querySelector(selectors.cardWrapSelector);

// Открытие popup
function openPopup(element) {
  element.classList.add(classAction.popupOpenedClass);
}

// Открытие popup view
export function openPopupView(data){
  viewPopupImageElement.setAttribute('src', data.link);
  viewPopupImageElement.setAttribute('alt', `Изображение ${data.name}`);
  viewPopupCaptionElement.textContent = data.name;
  openPopup(viewPopupElement);
}

// Закрытие popup
function closePopup(element) {
  element.classList.remove(classAction.popupOpenedClass);
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
  renderCard(createCardElement({name: profilePopupNameInputElement.value, link: profilePopupJobInputElement.value}, cardTemplateElement, card, viewPopup, openedClass), cardWrapElement);
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
  popupCloseButtonList.forEach(closeButtonElement => {
    closeButtonElement.addEventListener('click', (evt) => {
      closePopup(evt.target.closest(selectors.popupSelector));
    })
  })
  popupList.forEach(item => {
    item.addEventListener('click', closePopupByClickOnOverlay);
  })
  document.addEventListener('keydown', function (event) {
    if(event.key === 'Escape') {
      const popupElementActive = document.querySelector(`.${popup.openedClass}`);
      if(popupElementActive) {
        closePopup(popupElementActive);
      }
    }
  });
}
