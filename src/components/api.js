import {config} from './utils/constants.js';
import {setProfile} from './profile.js';
import {loadCards} from './card.js';

let userId = 'NO';

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
      userId = user._id;

      // console.log(userId);

      setProfile(user);
      getInitialCards();
    })
    .catch((err) => {
      console.log(err);
    });
}


export const getInitialCards = () => {
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

      // console.log(cards, userId);

      loadCards(cards, userId);
    })
    .catch((err) => {
      console.log(err);
    });
}
