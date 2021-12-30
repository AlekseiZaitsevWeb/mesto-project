import './index.css';
import {enableCard} from '../components/card.js';
import {enableModal} from '../components/modal.js';
import {enableValidation} from '../components/validate.js';

import {getInitial} from '../components/api.js';


const profileAvatarWraperElement = document.querySelector('.profile__avatar-wraper');
const profileAvatarCoverElement = document.querySelector('.profile__avatar-cover');


profileAvatarWraperElement.addEventListener('mouseover', () => {
  profileAvatarCoverElement.classList.add('profile__avatar-cover_active');
});
profileAvatarWraperElement.addEventListener('mouseout', () => {
  profileAvatarCoverElement.classList.remove('profile__avatar-cover_active');
});

getInitial();

// enableCard();

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
