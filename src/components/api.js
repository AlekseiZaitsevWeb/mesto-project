import {config} from './utils/constants.js';
import {setProfile} from './profile.js';
import {loadCards, addCard, removeCard} from './card.js';

export const userData = {};

export const getInitial = () => {
  const headers = config.headers;
  return fetch(`${config.baseUrl}/users/me`, {
    headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(user => {

      // Сохраняю данные пользователя
      saveUserData(user);

      // Установка информации о пользователе в профиль
      setProfile(user);

      // Загрузка карточек с сервера с учетом возможного удаления каточек данным пользователем
      getCards();

    })
    .catch((err) => {
      console.log(err);
    });
}

// Загрузка карточек
export const getCards = () => {
  const headers = config.headers;
  return fetch(`${config.baseUrl}/cards`, {
    headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(cards => {
      loadCards(cards);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Редактирование профиля
export const editProfile = (name, about) => {
  const headers = config.headers;
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(user => {
      saveUserData(user);
      setProfile(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Добавление новой карточки
export const addNewCard = (card) => {
  const headers = config.headers;
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: card.name,
      link: card.link
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(card => {
      addCard(card);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Удаление карточки
export function deleteCard(cardId) {
  const headers = config.headers;
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => {
      removeCard(cardId);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Удаление лайка
export function deleteLike(cardId) {
  const headers = config.headers;
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => {
      // removeCard(cardId);
    })
    .catch((err) => {
      console.log(err);
    });
};

const saveUserData = (user) => {
  for (let key in user) {
    userData[key] = user[key];
  }
};
