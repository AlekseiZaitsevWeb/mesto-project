import {selectors, classAction} from './utils/constants.js';
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
function createCardElement(card, userId) {



  const cardElement = cardTemplateElement.querySelector(selectors.cardItemSelector).cloneNode(true);
  const cardImageElement = cardElement.querySelector(selectors.cardImageSelector);

  cardImageElement.src = card.link;
  cardImageElement.alt = `Изображение ${card.name}`;

  const cardTitleElement = cardElement.querySelector(selectors.cardImageCaptionSelector);
  cardTitleElement.textContent = card.name;

  // Кнопка Like
  // 1) загрузить состояние активности сердечка, если есть id то подсветить, если нет то нет
  // 2) при нажатии отправлять на сервер данные о лайке и потом вызывать функцию запроса состояния лайка на сервер и по ответу отрисовывать

  // нужны функции:
  // 1) получения всех лайков, это будет количество и в нем буду искать ID для отрисовки активности лайка
  // 2) При нажатии отправка данных о лайке и выполнение функции 1)

  const cardLikeBtnElement = cardElement.querySelector(selectors.cardLikeButtonSelector);
  cardLikeBtnElement.addEventListener('click', () => activeCardLikeButton(cardLikeBtnElement, classAction.cardLikeButtonActiveClass));


  // Удаление карты
  if(card.owner._id === userId) {
    const cardDeleteBtnElement = cardElement.querySelector(selectors.cardDeleteButtonSelector);
    cardDeleteBtnElement.classList.add(cardDeleteButtonActiveClass);
    cardDeleteBtnElement.addEventListener('click', (evt) => deleteCard(evt.target, selectors.cardItemSelector));
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
export const addCard = (card, userId) => {
  renderCard(createCardElement(card, userId));
}

// Вывожу карточки при загрузке страницы
export function loadCards(cards, userId) {
  cards.forEach(card => addCard(card, userId));
}

// Подключение карточек
// export const enableCard = () => {
//   loadCards();
// }
