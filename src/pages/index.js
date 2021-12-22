import './index.css';
import {enableCard} from '../components/card';
import {enableModal} from '../components/modal.js';
import {enableValidation} from '../components/validate.js';

//enableCard(card, viewPopup, popup.openedClass);
enableCard();

//enableModal(popup, profilePopup, addPlacePopup, viewPopup, card);
enableModal();

enableValidation({
  formSelector:               '.popup__form',
  formSectionSelector:        '.popup__form-section',
  inputSelector:              '.popup__input-text',
  inputTextError:             '.popup__input-text-error',
  submitButtonSelector:       '.popup__button-submit',
  inputErrorClass:            'popup__input-text_color_error',
  errorClass:                 'popup__input-text-error_active'
});
