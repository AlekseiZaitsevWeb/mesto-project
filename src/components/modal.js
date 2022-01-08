import {selectors, classAction} from './utils/constants.js';
import {userData, saveUserData, editProfile, editAvatar, addNewCard} from './api.js';
import {setProfile} from './profile.js';
import {addCard} from './card.js';

// popup
const popupList = document.querySelectorAll(selectors.popupSelector);
// profileEdit
const profileEditButtonElement = document.querySelector(selectors.profileEditButtonSelector);
// avatarPopup
const avatarPopupElement = document.querySelector(selectors.avatarPopupSelector);
const avatarPopupFormElement = avatarPopupElement.querySelector(selectors.avatarPopupFormSelector);
const avatarPopupInputElement = avatarPopupFormElement.querySelector(selectors.avatarPopupInputSelector);
const avatarPopupSubmitButtonElement = avatarPopupFormElement.querySelector(selectors.submitButtonForm);
// profilePopup
const profilePopupElement = document.querySelector(selectors.profilePopupSelector);
const profileAvatarCoverElement = document.querySelector(selectors.profileAvatarCoverSelector);
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
// confirmPopup
// const confirmPopupElement = document.querySelector(selectors.confirmPopupSelector);
// const confirmPopupButtonElement = confirmPopupElement.querySelector(selectors.confirmPopupButtonSelector);

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
export function openPopup(element) {
  element.classList.add(classAction.popupOpenedClass);
  document.addEventListener('keydown', closeByEscape);
}

// Закрытие popup
export function closePopup(element) {
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

// Сохранение введенных данные в профиль
function saveEditProfile(event){
  event.preventDefault();
  profilePopupSubmitButtonElement.textContent  = 'Сохранение...';
  editProfile(profilePopupNameInputElement.value, profilePopupJobInputElement.value)
    .then(user => {
      saveUserData(user);
      setProfile(user);
      closePopup(profilePopupElement);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Сохранение аватара
function saveAvatar(event){
  event.preventDefault();
  avatarPopupSubmitButtonElement.textContent  = 'Сохранение...';
  editAvatar(avatarPopupInputElement.value)
    .then(user => {
      saveUserData(user);
      setProfile(user);
      closePopup(avatarPopupElement);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Подключение profilePopup
const enableModalProfile = () => {
  profileEditButtonElement.addEventListener('click', () => {
    const user = userData;
    profilePopupNameInputElement.value = user.name;
    profilePopupJobInputElement.value = user.about;
    profilePopupSubmitButtonElement.setAttribute('disabled', true);
    profilePopupSubmitButtonElement.textContent  = 'Сохранить';
    openPopup(profilePopupElement);
  });
  profilePopupFormElement.addEventListener('submit', saveEditProfile);
}

// Подключение avatarPopup
const enableModalAvatar = () => {
  profileAvatarCoverElement.addEventListener('click', () => {
    const user = userData;
    avatarPopupInputElement.value = user.avatar;
    avatarPopupSubmitButtonElement.setAttribute('disabled', true);
    avatarPopupSubmitButtonElement.textContent  = 'Сохранить';
    openPopup(avatarPopupElement);
  });
  avatarPopupFormElement.addEventListener('submit', saveAvatar);
}

// Добавление карточки
function addPlace(event){
  event.preventDefault();
  const name = addPlacePopupNameInputElement.value;
  const link = addPlacePopupLinkInputElement.value
  addPlacePopupSubmitButtonElement.textContent  = 'Создание...';
  addNewCard({name, link})
    .then(card => {
      addCard(card);
      closePopup(addPlacePopupElement);
      addPlacePopupFormElement.reset();
      addPlacePopupSubmitButtonElement.setAttribute('disabled', true);
      addPlacePopupSubmitButtonElement.textContent  = 'Создать';
    })
    .catch((err) => {
      console.log(err);
    });
}

// Подключение addPlacePopup
const enableModalAddPlace = () => {
  addPlaceButtonElement.addEventListener('click', () => openPopup(addPlacePopupElement));
  addPlacePopupFormElement.addEventListener('submit', addPlace);
}

// Подключение всех popup
export const enableModal = () => {
  enableModalProfile();
  enableModalAvatar();
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
