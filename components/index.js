import {loadCards, cards} from './card.js';
import {enableValidation} from './validate.js';
import {openPopup} from './modal.js';




enableModal({

  popupAddPlaceElement: '.popup__form_type_add-place',
  formAddPlaceElement:  '.popup__form_type_add-place',
  addPlaceButton:       '.profile__add-button',

  closeButton:          '.popup__button-close',

  openPopupClass:       'popup_opened'
});


{
  popupSelector: '.popup',
  openPopupClass:       'popup_opened',

  popupProfileEditButtonSelector: '.profile__edit-button' // Кнопка редактировать профиль

  profileNameTextSelector: '.profile__name',
  profileJobTextSelector: '.profile__description',
  popupImageSelector: '.popup__image',
  popupCaptionSelector: '.popup__caption',


}







// Вывожу карточки при загрузке страницы
loadCards(cards); // сделать на входе объект как у enableValidation


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input-text',
  inputTextError: '.popup__input-text-error',
  submitButtonSelector: '.popup__button-submit',
  inputErrorClass: 'popup__input-text_color_error',
  errorClass: 'popup__input-text-error_active'
});
