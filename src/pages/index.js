import './index.css';
import {getInitial} from '../components/api.js';
import {enableProfile} from '../components/profile.js';
import {enableModal} from '../components/modal.js';
import {enableValidation} from '../components/validate.js';

getInitial();

enableProfile();

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
