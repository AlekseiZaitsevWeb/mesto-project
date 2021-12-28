import './index.css';
import {enableCard} from '../components/card';
import {enableModal} from '../components/modal.js';
import {enableValidation} from '../components/validate.js';

import {config} from '../components/utils/constants.js';

console.log(config);
console.log(config.headers);

enableCard();

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
