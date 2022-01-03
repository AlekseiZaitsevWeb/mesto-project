import {selectors, classAction} from './utils/constants.js';
import {openPopupView} from './modal.js';
import {userData, deleteCard, deleteLike} from '../components/api.js';

const cardTemplateElement = document.querySelector(selectors.cardTemplateSelector).content;
const wrapCardsElement =  document.querySelector(selectors.cardWrapSelector);

// Активация кнопки Like карточки
function activeCardLikeButton(element, likeButtonActiveClass){

  // -проверка класса активности лайка
  // -если активен отправляю запрос delete
  // -если не активен то запрос на put
  // - из ответа меняю кол-во лаков и класс активности лайка

  if(element.classList.contains(likeButtonActiveClass)) {
    deleteLike(element.id);
  }

  element.classList.toggle(likeButtonActiveClass)
}

// Удаление карточки
export function removeCard(elementId){
  document.getElementById(`${elementId}`).remove();
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

  // Кнопка Like
  // 1) загрузить состояние активности сердечка, если есть id то подсветить, если нет то нет
  // 2) при нажатии отправлять на сервер данные о лайке и потом вызывать функцию запроса состояния лайка на сервер и по ответу отрисовывать

  // нужны функции:
  // 1) получения всех лайков, это будет количество и в нем буду искать ID для отрисовки активности лайка
  // 2) При нажатии отправка данных о лайке и выполнение функции 1)

  const cardLikeBtnElement = cardElement.querySelector(selectors.cardLikeButtonSelector);
  cardLikeBtnElement.addEventListener('click', () => activeCardLikeButton(cardLikeBtnElement, classAction.cardLikeButtonActiveClass));

  // Кол-во лайков
  const cardLineCountElement = cardElement.querySelector(selectors.cardLineCountSelector);
  cardLineCountElement.textContent = card.likes.length;

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
