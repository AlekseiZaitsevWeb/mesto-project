import './index.css';
import {getInitial, saveUserData, getCards} from '../components/_api.js';
import {enableProfile, setProfile} from '../components/_profile.js';
import {enableModal} from '../components/_modal.js';
import {enableValidation} from '../components/_validate.js';
import {loadCards} from '../components/_card.js';
import {config} from '../components/utils/constants.js';

getInitial()
  .then(user => {
    saveUserData(user); // Сохраняю данные пользователя
    setProfile(user); // Установка информации о пользователе в профиль
    getCards() // Загрузка карточек с сервера
    .then(cards => {
      loadCards(cards);
    })
    .catch((err) => {
      console.log(err);
    });
  })
  .catch((err) => {
    console.log(err);
  });


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

import Api from "../components/Api.js";

const api = new Api(config);
