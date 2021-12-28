import {config} from './utils/constants';

console.log(config);

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    config['headers']
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
}
