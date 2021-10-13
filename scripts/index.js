// Load cards
loadingCards(cards);


// Open edit profile popup
const profileEditBtn = document.querySelector('.profile__edit-button');
profileEditBtn.addEventListener('click', () => {
  openPopup(popups.profileEdit);
});


// Open add new place popup
const placeAddBtn = document.querySelector('.profile__add-button');
placeAddBtn.addEventListener('click', () => {
  openPopup(popups.placeAdd);
});


// Close popup
const profileCloseBtn = document.querySelector('.popup__button-close');
profileCloseBtn.addEventListener('click', closePopup);


// Submit form
const form = document.querySelector('.popup__form');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  form.getAttribute('name') === 'profile-edit' ? editProfile() : addPlace();
});





//--- Functions ---


// Edit profile
function editProfile(){

  // Получаю значения полей из формы
  const nameInputValue = document.querySelector('.popup__input_profile_name').value;
  const jobInputValue  = document.querySelector('.popup__input_profile_description').value;

  // Получаю элементы полей в профиле
  const nameInput = document.querySelector('.profile__name');
  const jobInput  = document.querySelector('.profile__description');

  // Записываю значения в профиль
  nameInput.textContent = nameInputValue;
  jobInput.textContent = jobInputValue;

  // Закрываю окно
  closePopup();
}


// Add place
function addPlace(){

  // Получаю значения полей из формы
  const nameInputValue = document.querySelector('.popup__inpu_place_name').value;
  const linkInputValue  = document.querySelector('.popup__inpu_place_link').value;

  // Получаю контейнер для карточек
  const carsContainer = document.querySelector('.photo-grid__items');

  // Создаю и вывожу карточку
  carsContainer.prepend(createCard({name: nameInputValue, link: linkInputValue}));

  closePopup();
}


// Вывод карточек при загрузке страницы
function loadingCards(arrCards) {

  // Получаю контейнер для карточек
  const carsContainer = document.querySelector('.photo-grid__items');

  // Создаю карточки
  let resCards = [];
  arrCards.forEach((item) => {
    resCards.push(createCard(item));
  })

  // Вывожу карточки
  resCards.forEach((item) => {
    carsContainer.append(item);
  })

}


// Создание карточки
function createCard(сard) {

  // Получаю шаблон карточки
  const cardTemplate = document.querySelector('.card__template').content;

  // Клонирую шаблон карточки
  const cardElement = cardTemplate.querySelector('.photo-grid__item').cloneNode(true);

  // Вноше данные
  const cardImage = cardElement.querySelector('.photo-grid__image');
  cardImage.src = сard.link;
  cardImage.alt = сard.name;
  const cardName = cardElement.querySelector('.photo-grid__image-title');
  cardName.textContent = сard.name;

  // Вешаю слушателей
  // Like card
  const cardLikeBtn = cardElement.querySelector('.photo-grid__like-button');
  cardLikeBtn.addEventListener('click', () => {
    cardLikeBtn.classList.toggle('photo-grid__like-button_active');
  });
  // Delete card
  const cardDeleteBtn = cardElement.querySelector('.photo-grid__delete-button');
  cardDeleteBtn.addEventListener('click', (evt) => {
    evt.target.closest('.photo-grid__item').remove();
  });

  // Возвращаю элемент карточки
  return cardElement;

}


function openPopup(dataPopup) {

  // Получаю окно
  const popup = document.querySelector('.popup');

  // Очищаю форму
  cleanPopup(popup);

  // Имя формы
  const popupForm = popup.querySelector('form');
  popupForm.setAttribute('name', dataPopup.name);

  // Заголовок
  const popupTitle = popup.querySelector('.popup__title');
  popupTitle.textContent = dataPopup.title;

  // Кнопка submit
  const popupBtn = popup.querySelector('.popup__button-submit');
  popupBtn.textContent = dataPopup.button;

  // Создаю input-ы
  const arrInput = [];
  dataPopup.input.forEach((item) => {
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', item.type);
    inputElement.setAttribute('name', item.name);
    inputElement.setAttribute('class', item.class);
    inputElement.setAttribute('placeholder', item.placeholder);
    if(item.value) inputElement.setAttribute('value', document.querySelector(item.value).textContent);
    if(item.required) inputElement.setAttribute('required', '');
    arrInput.push(inputElement);
  });

  // Добавляю input-ы в окно
  arrInput.forEach((item) => {
    popupBtn.before(item);
  });

  // Показываю окно
  popup.classList.add('popup_opened');

}


function closePopup() {

  // Получаю окно
  const popup = document.querySelector('.popup');

  // Скрываю окно
  popup.classList.remove('popup_opened');

}


function cleanPopup(element) {

  // Имя формы
  const popupForm = element.querySelector('form');
  popupForm.setAttribute('name', '');

  // Заголовок
  const popupTitle = element.querySelector('.popup__title');
  popupTitle.textContent = '';

  // Кнопка submit
  const popupBtn = element.querySelector('.popup__button-submit');
  popupBtn.textContent = '';

  // input-ы
  const popupInputs = element.querySelectorAll('input');
  popupInputs.forEach((input) => {
    input.remove();
  });

}
