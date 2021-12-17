export const cards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }

  ];


  export const enableCard = ({
    viewPopupSelector,
    viewPopupImageSelector,
    viewPopupCaptionSelector
  }) => {
    // Вывожу карточки при загрузке страницы
    loadCards(cards);
  }


  // Получаю шаблон карточки
const cardTemplate = document.querySelector('.card__template').content;

// Врапер для карточек
const wrapCardsElement =  document.querySelector('.photo-grid__items');

// Активация кнопки Like карточки
function activeCardLikeButton(element){
  element.classList.toggle('photo-grid__like-button_active')
}

// Удаление карточки
function deleteCard(element){
  element.closest('.photo-grid__item').remove()
}

// Создание карточки
function createCardElement(data) {

  // Клонирую шаблон карточки
  const cardElement = cardTemplate.querySelector('.photo-grid__item').cloneNode(true);

  // Вношу данные
  const cardImageElement = cardElement.querySelector('.photo-grid__image');
  cardImageElement.src = data.link;
  cardImageElement.alt = `Изображение ${data.name}`;
  const cardTitleElement = cardElement.querySelector('.photo-grid__image-title');
  cardTitleElement.textContent = data.name;

  // Вешаю слушателей ---

  // Кнопка Like
  const cardLikeBtnElement = cardElement.querySelector('.photo-grid__like-button');
  cardLikeBtnElement.addEventListener('click', () => activeCardLikeButton(cardLikeBtnElement));

  // Удаление карты
  const cardDeleteBtnElement = cardElement.querySelector('.photo-grid__delete-button');
  cardDeleteBtnElement.addEventListener('click', (evt) => deleteCard(evt.target));

  // Открытие картинки
  cardImageElement.addEventListener('click', (evt) => openPopupView({src: data.link, name: data.name}));

  // Возвращаю элемент карточки
  return cardElement;

}

// Вывод карточки
function renderCard(cardElement) {
  wrapCardsElement.prepend(cardElement);
}

// Вывожу карточки при загрузке страницы
export function loadCards(data) {
  data.forEach(item => renderCard(createCardElement(item)));
}




