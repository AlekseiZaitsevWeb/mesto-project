import {config} from './utils/constants.js';

export const userData = {};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getInitial = () => {
  const headers = config.headers;
  return fetch(`${config.baseUrl}/users/me`, {
    headers
  })
    .then(checkResponse)
}

// Загрузка карточек
export const getCards = () => {
  const headers = config.headers;
  return fetch(`${config.baseUrl}/cards`, {
    headers
  })
    .then(checkResponse)
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
    .then(checkResponse)
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
    .then(checkResponse)
};

// Удаление карточки
export function deleteCardApi(cardId) {
  const headers = config.headers;
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers
  })
    .then(checkResponse)
};

// Добавление лайка
export function addLikeApi(cardElement) {
  const headers = config.headers;
  return fetch(`${config.baseUrl}/cards/likes/${cardElement.id}`, {
    method: 'PUT',
    headers
  })
    .then(checkResponse)
};

// Удаление лайка
export function deleteLikeApi(cardElement) {
  const headers = config.headers;
  return fetch(`${config.baseUrl}/cards/likes/${cardElement.id}`, {
    method: 'DELETE',
    headers
  })
    .then(checkResponse)
};

// Редактирование профиля
export const editAvatar = (avatar) => {
  const headers = config.headers;
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
    .then(checkResponse)
};

export const saveUserData = (user) => {
  for (let key in user) {
    userData[key] = user[key];
  }
};
