// Кнопка редактировать профиль
const profileEditBtnElement = document.querySelector('.profile__edit-button');

// Получаю элементы полей в профиле
const nameInputElement = document.querySelector('.profile__name');
const jobInputElement  = document.querySelector('.profile__description');

// Popup Profile Edit
const popupProfileEditElement = document.querySelector('.popup_type_profile-edit');

// Форма Profile Edit
const formProfileEditElement = popupProfileEditElement.querySelector('.popup__form_type_profile-edit');

// Получаю поля из формы редактирования профиля
const nameInputProfileEdit = popupProfileEditElement.querySelector('.popup__input_profile_name');
const jobInputProfileEdit  = popupProfileEditElement.querySelector('.popup__input_profile_description');

// Кнопка добавить место
const placeAddBtnElement = document.querySelector('.profile__add-button');

// Popup Place Add
const popupPlaceAddElement = document.querySelector('.popup_type_add-place');

// Форма добавления места
const formPlaceAddElement = popupPlaceAddElement.querySelector('.popup__form_type_add-place');

// Получаю значения полей из формы
const nameInputPlaceAdd = formPlaceAddElement.querySelector('.popup__input_place_name');
const linkInputPlaceAdd = formPlaceAddElement.querySelector('.popup__input_place_link');

// Получаю элемент popup wiew
const popupImageElement = document.querySelector('.popup_type_view');

// Вск кнопки закрытия popup
const closeButtonElements = document.querySelectorAll('.popup__button-close');






// Открытие popup
function openPopup(element) {
  element.classList.add('popup_opened');
}


// Закрытие popup
function closePopup(element) {
  element.classList.remove('popup_opened');
}




// Сохранение введенных данные в профиль
function saveEditProfile(popupElement){

  // Записываю значения в профиль
  nameInputElement.textContent = nameInputProfileEdit.value;
  jobInputElement.textContent = jobInputProfileEdit.value;

  // Закрываю окно
  closePopup(popupElement);
}







// Добавление карточки
function addPlace(popupElement, wrapCardsElement){

  // Создаю и вывожу карточку
  renderCard(createCardElement({name: nameInputPlaceAdd.value, link: linkInputPlaceAdd.value}));

  // Закрываю окно
  closePopup(popupElement);

  // Очищаю поля
  nameInputPlaceAdd.value = '';
  linkInputPlaceAdd.value = '';
}


// Открытие popup view
function openPopupView(data){

  // Загружаю данные
  const imageElement = popupImageElement.querySelector('.popup__image');
  imageElement.setAttribute('src', data.src);
  imageElement.setAttribute('alt', `Изображение ${data.name}`);
  const captionElement = popupImageElement.querySelector('.popup__caption');
  captionElement.textContent = data.name;

  // Открываю popup
  openPopup(popupImageElement);
}



// ---




// Открытие popup edit profile
profileEditBtnElement.addEventListener('click', () => {

  // Записываю в поля формы
  nameInputProfileEdit.value = nameInputElement.textContent;
  jobInputProfileEdit.value = jobInputElement.textContent;

  // Открываю popup
  openPopup(popupProfileEditElement);
});


// Сохранение данных в профиле
formProfileEditElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  saveEditProfile(popupProfileEditElement);
});


// Закрытие popup
closeButtonElements.forEach(closeButtonElement => {
  closeButtonElement.addEventListener('click', (evt) => {
    closePopup(evt.target.closest('.popup'));
  })
})


// Открытие popup add place
placeAddBtnElement.addEventListener('click', () => openPopup(popupPlaceAddElement));


// Добавление карточки
formPlaceAddElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addPlace(popupPlaceAddElement, wrapCardsElement);
});
