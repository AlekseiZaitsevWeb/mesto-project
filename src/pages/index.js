import './index.css';
import {getInitial, saveUserData, getCards} from '../components/api.js';
import {enableProfile, setProfile} from '../components/profile.js';
import {enableModal} from '../components/modal.js';
import {enableValidation} from '../components/validate.js';
import {loadCards} from '../components/card.js';


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
