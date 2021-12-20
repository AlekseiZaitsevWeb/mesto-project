import {cards} from './data.js';
import {openPopupView} from './modal.js';

// Активация кнопки Like карточки
function activeCardLikeButton(element, cardLikeButtonActiveClass){
  element.classList.toggle(cardLikeButtonActiveClass)
}


// Удаление карточки
function deleteCard(element, cardItemSelector){
  element.closest(cardItemSelector).remove();
}


// Создание карточки
function createCardElement(data, cardTemplateElement, cardLikeButtonActiveClass, cardItemSelector, cardImageSelector, cardImageCaptionSelector, cardLikeButtonSelector, cardDeleteButtonSelector, viewPopupSelector, viewPopupImageSelector,viewPopupCaptionSelector, viewPopupOpenedClass) {

  // Клонирую шаблон карточки
  const cardElement = cardTemplateElement.querySelector(cardItemSelector).cloneNode(true);

  // Вношу данные
  const cardImageElement = cardElement.querySelector(cardImageSelector);
  cardImageElement.src = data.link;
  cardImageElement.alt = `Изображение ${data.name}`;
  const cardTitleElement = cardElement.querySelector(cardImageCaptionSelector);
  cardTitleElement.textContent = data.name;

  // Вешаю слушателей ---

  // Кнопка Like
  const cardLikeBtnElement = cardElement.querySelector(cardLikeButtonSelector);
  cardLikeBtnElement.addEventListener('click', () => activeCardLikeButton(cardLikeBtnElement, cardLikeButtonActiveClass));

  // Удаление карты
  const cardDeleteBtnElement = cardElement.querySelector(cardDeleteButtonSelector);
  cardDeleteBtnElement.addEventListener('click', (evt) => deleteCard(evt.target, cardItemSelector));

  // Открытие картинки
  cardImageElement.addEventListener('click', (evt) => openPopupView({src: data.link, name: data.name}, viewPopupSelector, viewPopupImageSelector,viewPopupCaptionSelector, viewPopupOpenedClass));

  // Возвращаю элемент карточки
  return cardElement;

}


// Вывод одной карточки
function renderCard(cardElement, wrapCardsElement) {
  wrapCardsElement.prepend(cardElement);
}


// Вывожу карточки при загрузке страницы
export function loadCards(
  data,
  cardTemplateElement,
  wrapCardsElement,
  cardLikeButtonActiveClass,
  cardItemSelector,
  cardImageSelector,
  cardImageCaptionSelector,
  cardLikeButtonSelector,
  cardDeleteButtonSelector,
  viewPopupSelector,
  viewPopupImageSelector,
  viewPopupCaptionSelector,
  viewPopupOpenedClass
  ) {
  data.forEach(item => renderCard(createCardElement(item, cardTemplateElement, cardLikeButtonActiveClass, cardItemSelector, cardImageSelector, cardImageCaptionSelector, cardLikeButtonSelector, cardDeleteButtonSelector, viewPopupSelector, viewPopupImageSelector,viewPopupCaptionSelector, viewPopupOpenedClass), wrapCardsElement));
}


// Подключение карточек
export const enableCard = ({
  cardTemplateSelector,
  cardWrapSelector,
  cardItemSelector,
  cardImageSelector,
  cardImageCaptionSelector,
  cardLikeButtonSelector,
  cardDeleteButtonSelector,
  cardLikeButtonActiveClass,
  viewPopupSelector,
  viewPopupImageSelector,
  viewPopupCaptionSelector,
  viewPopupOpenedClass
}) => {

  // ---  Получаю элементы  ---

  // Получаю шаблон карточки
  const cardTemplateElement = document.querySelector(cardTemplateSelector).content;

  // Врапер для карточек
  const wrapCardsElement =  document.querySelector(cardWrapSelector);


  // ---  Слушатели и действия


  // Вывожу карточки при загрузке страницы
  loadCards(cards, cardTemplateElement, wrapCardsElement, cardLikeButtonActiveClass, cardItemSelector, cardImageSelector, cardImageCaptionSelector, cardLikeButtonSelector, cardDeleteButtonSelector, viewPopupSelector, viewPopupImageSelector,viewPopupCaptionSelector, viewPopupOpenedClass);

}




