// Создание карточки
function createCardElement(data) {

  // Получаю шаблон карточки
  const cardTemplate = document.querySelector('.card__template').content;

  // Клонирую шаблон карточки
  const cardElement = cardTemplate.querySelector('.photo-grid__item').cloneNode(true);

  // Вношу данные
  const cardImageElement = cardElement.querySelector('.photo-grid__image');
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  const cardTitleElement = cardElement.querySelector('.photo-grid__image-title');
  cardTitleElement.textContent = data.name;

  // Вешаю слушателей ---

  // Кнопка Like
  const cardLikeBtnElement = cardElement.querySelector('.photo-grid__like-button');
  cardLikeBtnElement.addEventListener('click', () => cardLikeBtnElement.classList.toggle('photo-grid__like-button_active'));

  // Удаление карты
  const cardDeleteBtnElement = cardElement.querySelector('.photo-grid__delete-button');
  cardDeleteBtnElement.addEventListener('click', (evt) => evt.target.closest('.photo-grid__item').remove());

  // Открытие картинки
  cardImageElement.addEventListener('click', (evt) => openPopupView({src: data.link, name: data.name}));

  // Возвращаю элемент карточки
  return cardElement;

}


// Вывод карточки
function renderCard(data, wrapElement) {
  data.forEach((item) => wrapElement.prepend(createCardElement(item)));
}


// Открытие popup
function openPopup(elemen) {
  elemen.classList.add('popup_opened');
}


// Закрытие popup
function closePopup(element) {
  element.classList.remove('popup_opened');
}


// Сохранение введенных данные в профиль
function saveEditProfile(popupElement){

  // Получаю значения полей из формы
  const nameInputValue = document.querySelector('.popup__input_profile_name').value;
  const jobInputValue  = document.querySelector('.popup__input_profile_description').value;

  // Получаю элементы полей в профиле
  const nameInputElement = document.querySelector('.profile__name');
  const jobInputElement  = document.querySelector('.profile__description');

  // Записываю значения в профиль
  nameInputElement.textContent = nameInputValue;
  jobInputElement.textContent = jobInputValue;

  // Закрываю окно
  closePopup(popupElement);
}


// Добавление карточки
function addPlace(popupElement, wrapCardsElement){

  // Получаю значения полей из формы
  const nameInputElement = document.querySelector('.popup__inpu_place_name');
  const linkInputElement = document.querySelector('.popup__inpu_place_link');

  // Создаю и вывожу карточку
  wrapCardsElement.prepend(createCardElement({name: nameInputElement.value, link: linkInputElement.value}));

  // Закрываю окно
  closePopup(popupElement);

  // Очищаю поля
  nameInputElement.value = '';
  linkInputElement.value = '';
}


// Открытие popup view
function openPopupView(data){

  // Получаю элемент popup
  const popupImageElement = document.querySelector('.popup_type_view');

  // Загружаю данные
  const imageElement = popupImageElement.querySelector('.popup__image');
  imageElement.setAttribute('src', data.src);
  imageElement.setAttribute('alt', data.name);
  const captionElement = popupImageElement.querySelector('.popup__caption');
  captionElement.textContent = data.name;

  // Открываю popup
  openPopup(popupImageElement);
}


// ---


// Вывожу карточки при загрузке страницы
const wrapCardsElement =  document.querySelector('.photo-grid__items');
renderCard(cards, wrapCardsElement);


// Открытие popup edit profile
const popupProfileEditElement = document.querySelector('.popup_type_profile-edit');
const profileEditBtnElement = document.querySelector('.profile__edit-button');
profileEditBtnElement.addEventListener('click', () => {

  // Получаю значение полей
  const nameInputText = document.querySelector('.profile__name').textContent;
  const jobInputText  = document.querySelector('.profile__description').textContent;

  // Получаю элементы полей формы
  const nameInputElement = document.querySelector('.popup__input_profile_name');
  const jobInputElement  = document.querySelector('.popup__input_profile_description');

  // Записываю в поля формы
  nameInputElement.value = nameInputText;
  jobInputElement.value = jobInputText;

  // Открываю popup
  openPopup(popupProfileEditElement);
});


// Сохранение данных в профиле
const formProfileEditElement = popupProfileEditElement.querySelector('.popup__form_type_profile-edit');
formProfileEditElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  saveEditProfile(popupProfileEditElement);
});


// Закрытие popup
const closeButtonElements = document.querySelectorAll('.popup__button-close');
closeButtonElements.forEach(closeButtonElement => {
  closeButtonElement.addEventListener('click', (evt) => {
    closePopup(evt.target.closest('.popup'));
  })
})


// Открытие popup add place
const popupPlaceAddElement = document.querySelector('.popup_type_add-place');
const placeAddBtnElement = document.querySelector('.profile__add-button');
placeAddBtnElement.addEventListener('click', () => openPopup(popupPlaceAddElement));


// Добавление карточки
const formPlaceAddElement = popupPlaceAddElement.querySelector('.popup__form_type_add-place');
formPlaceAddElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addPlace(popupPlaceAddElement, wrapCardsElement);
});
