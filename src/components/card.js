import {selectors, classAction} from './utils/constants';
import {cards} from './data.js';
import {openPopupView} from './modal.js';

const cardTemplateElement = document.querySelector(selectors.cardTemplateSelector).content;
const wrapCardsElement =  document.querySelector(selectors.cardWrapSelector);

// Активация кнопки Like карточки
function activeCardLikeButton(element, likeButtonActiveClass){
  element.classList.toggle(likeButtonActiveClass)
}

// Удаление карточки
function deleteCard(element, itemSelector){
  element.closest(itemSelector).remove();
}

// Создание карточки
function createCardElement(data) {
  const cardElement = cardTemplateElement.querySelector(selectors.cardItemSelector).cloneNode(true);
  const cardImageElement = cardElement.querySelector(selectors.cardImageSelector);
  cardImageElement.src = data.link;
  cardImageElement.alt = `Изображение ${data.name}`;
  const cardTitleElement = cardElement.querySelector(selectors.cardImageCaptionSelector);
  cardTitleElement.textContent = data.name;
  // Кнопка Like
  const cardLikeBtnElement = cardElement.querySelector(selectors.cardLikeButtonSelector);
  cardLikeBtnElement.addEventListener('click', () => activeCardLikeButton(cardLikeBtnElement, classAction.cardLikeButtonActiveClass));
  // Удаление карты
  const cardDeleteBtnElement = cardElement.querySelector(selectors.cardDeleteButtonSelector);
  cardDeleteBtnElement.addEventListener('click', (evt) => deleteCard(evt.target, selectors.cardItemSelector));
  // Открытие картинки
  cardImageElement.addEventListener('click', (evt) => openPopupView({link: data.link, name: data.name}));
  return cardElement;
}

// Вывод одной карточки
function renderCard(cardElement) {
  wrapCardsElement.prepend(cardElement);
}

// Добавление карточки
export const addCard = (name, link) => {
  renderCard(createCardElement({name: name, link: link}));
}

// Вывожу карточки при загрузке страницы
function loadCards() {
  cards.forEach(item => addCard(item.name, item.link));
}

// Подключение карточек
export const enableCard = () => {
  loadCards();
}
