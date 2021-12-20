import {cards} from './data.js';
import {openPopupView} from './modal.js';


// Активация кнопки Like карточки
function activeCardLikeButton(element, likeButtonActiveClass){
  element.classList.toggle(likeButtonActiveClass)
}


// Удаление карточки
function deleteCard(element, itemSelector){
  element.closest(itemSelector).remove();
}


// Создание карточки
export function createCardElement(data, cardTemplateElement, card, viewPopup, openedClass) {

  // Клонирую шаблон карточки
  const cardElement = cardTemplateElement.querySelector(card.itemSelector).cloneNode(true);

  // Вношу данные
  const cardImageElement = cardElement.querySelector(card.imageSelector);
  cardImageElement.src = data.link;
  cardImageElement.alt = `Изображение ${data.name}`;
  const cardTitleElement = cardElement.querySelector(card.imageCaptionSelector);
  cardTitleElement.textContent = data.name;

  // Вешаю слушателей ---

  // Кнопка Like
  const cardLikeBtnElement = cardElement.querySelector(card.likeButtonSelector);
  cardLikeBtnElement.addEventListener('click', () => activeCardLikeButton(cardLikeBtnElement, card.likeButtonActiveClass));

  // Удаление карты
  const cardDeleteBtnElement = cardElement.querySelector(card.deleteButtonSelector);
  cardDeleteBtnElement.addEventListener('click', (evt) => deleteCard(evt.target, card.itemSelector));

  // Открытие картинки
  cardImageElement.addEventListener('click', (evt) => openPopupView({link: data.link, name: data.name}, viewPopup, openedClass));

  // Возвращаю элемент карточки
  return cardElement;

}


// Вывод одной карточки
export function renderCard(cardElement, wrapCardsElement) {
  wrapCardsElement.prepend(cardElement);
}


// Вывожу карточки при загрузке страницы
export function loadCards(cards, cardTemplateElement, wrapCardsElement, card, viewPopup, openedClass) {
  cards.forEach(item => renderCard(createCardElement(item, cardTemplateElement, card, viewPopup, openedClass), wrapCardsElement));
}


// Подключение карточек
export const enableCard = (card, viewPopup, openedClass) => {

  // Получаю шаблон карточки
  const cardTemplateElement = document.querySelector(card.templateSelector).content;

  // Врапер для карточек
  const wrapCardsElement =  document.querySelector(card.wrapSelector);

  // Вывожу карточки при загрузке страницы
  loadCards(cards, cardTemplateElement, wrapCardsElement, card, viewPopup, openedClass);
}
