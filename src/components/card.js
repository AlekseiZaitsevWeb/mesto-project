import {selectors, classAction} from './utils/constants.js';
import {openPopupView} from './modal.js';
import {userData, deleteCardApi, deleteLikeApi, addLikeApi} from '../components/api.js';

const cardTemplateElement = document.querySelector(selectors.cardTemplateSelector).content;
const wrapCardsElement =  document.querySelector(selectors.cardWrapSelector);

// Вывод кол-ва лаков
export function viewCountLike(cardElement, countLike) {
  const cardLineCountElement = cardElement.querySelector(selectors.cardLineCountSelector);
  cardLineCountElement.textContent = countLike;
}

// Активация лайка
export function activationLike(likeButton) {
  likeButton.classList.add(classAction.cardLikeButtonActiveClass);
}

// Деактивация лайка
export function deactivationLike(likeButton) {
  likeButton.classList.remove(classAction.cardLikeButtonActiveClass);
}

// Добавление лайка
function addLike(element, likeButton) {
  addLikeApi(element, likeButton)
    .then((res) => {
      viewCountLike(element, res.likes.length);
      activationLike(likeButton);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Удаление лайка
function deleteLike(element, likeButton) {
  deleteLikeApi(element, likeButton)
    .then((res) => {
      viewCountLike(element, res.likes.length);
      deactivationLike(likeButton);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Активация кнопки Like карточки
function activeCardLikeButton(element, likeButton){
  if(likeButton.classList.contains(classAction.cardLikeButtonActiveClass)) {
    deleteLike(element, likeButton);
  } else {
    addLike(element, likeButton);
  }
}

// Удаление карточки из разметки
export function removeCard(elementId){
  document.getElementById(`${elementId}`).remove();
}

// Удаление карточки
function deleteCard(cardId) {
  deleteCardApi(cardId)
  .then((res) => {
    removeCard(cardId);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Создание карточки
function createCardElement(card) {

  const cardElement = cardTemplateElement.querySelector(selectors.cardItemSelector).cloneNode(true);
  const cardImageElement = cardElement.querySelector(selectors.cardImageSelector);

  cardElement.id = card._id;

  cardImageElement.src = card.link;
  cardImageElement.alt = `Изображение ${card.name}`;

  const cardTitleElement = cardElement.querySelector(selectors.cardImageCaptionSelector);
  cardTitleElement.textContent = card.name;

  const cardLikeBtnElement = cardElement.querySelector(selectors.cardLikeButtonSelector);
  // Активность лайка
  card.likes.forEach(likeUserData => {
    if(likeUserData._id === userData._id) {
      activationLike(cardLikeBtnElement);
    }
  });
  cardLikeBtnElement.addEventListener('click', () => activeCardLikeButton(cardElement, cardLikeBtnElement));

  // Кол-во лайков
  viewCountLike(cardElement, card.likes.length);

  // Удаление карты
  if(card.owner._id === userData._id) {
    const cardDeleteBtnElement = cardElement.querySelector(selectors.cardDeleteButtonSelector);
    cardDeleteBtnElement.classList.add(classAction.cardDeleteButtonActiveClass);
    cardDeleteBtnElement.addEventListener('click', (evt) => deleteCard(card._id));
  }

  // Открытие картинки
  cardImageElement.addEventListener('click', (evt) => openPopupView({link: card.link, name: card.name}));

  return cardElement;
}

// Вывод одной карточки
function renderCard(cardElement) {
  wrapCardsElement.prepend(cardElement);
}

// Добавление карточки
export const addCard = (card) => {
  renderCard(createCardElement(card));
}

// Вывожу карточки при загрузке страницы
export function loadCards(cards) {
  cards.forEach(card => addCard(card));
}
