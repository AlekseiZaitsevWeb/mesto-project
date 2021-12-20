// Открытие popup
function openPopup(element, popupOpenedClass) {
  element.classList.add(popupOpenedClass);
}


// Закрытие popup
function closePopup(element, popupOpenedClass) {
  element.classList.remove(popupOpenedClass);
}


// Закрытие popup по оверлей
const closePopupByClickOnOverlay = ( popupOpenedClass ) => ( event ) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target === currentTarget) {
    closePopup(event.currentTarget, popupOpenedClass);
  }
}


// Добавление карточки
function addPlace(popupElement, addPlaceNameInputElement, addPlaceLinknputElement, popupOpenedClass){

  // Создаю и вывожу карточку
  //renderCard(createCardElement({name: nameInputPlaceAdd.value, link: linkInputPlaceAdd.value}));

  // Закрываю окно
  closePopup(popupElement, popupOpenedClass);

  // Очищаю поля
  addPlaceNameInputElement.value = '';
  addPlaceLinknputElement.value = '';
}


// Сохранение введенных данные в профиль
function saveEditProfile(popupElement, nameTextElement, jobTextElement,  nameInputElement, jobInputElement, popupOpenedClass){

  // Записываю значения в профиль
  nameTextElement.textContent = nameInputElement.value;
  jobTextElement.textContent = jobInputElement.value;

  // Закрываю окно
  closePopup(popupElement, popupOpenedClass);
}


const enableModalProfile = (
  profilePopupSelector,
  profileEditButtonSelector,
  profileNameTextSelector,
  profileJobTextSelector,
  profileNameInputSelector,
  profileJobInputSelector,
  profileFormSelector,
  popupOpenedClass
) => {

  //--- Получаю элементы ---

  // Кнопка редактировать профиль
  const profileEditBtnElement = document.querySelector(profileEditButtonSelector);

  // Popup Profile Edit
  const popupProfileEditElement = document.querySelector(profilePopupSelector);

  // Получаю элементы полей в профиле
  const nameTextElement = document.querySelector(profileNameTextSelector);
  const jobTextElement  = document.querySelector(profileJobTextSelector);

  // Получаю инпуты из формы редактирования профиля
  const nameInputElement = popupProfileEditElement.querySelector(profileNameInputSelector);
  const jobInputElement  = popupProfileEditElement.querySelector(profileJobInputSelector);

  // Форма Profile Edit
  const formProfileEditElement = popupProfileEditElement.querySelector(profileFormSelector);


  //--- Вешаю слушателей ---


  // Открытие popup edit profile
  profileEditBtnElement.addEventListener('click', () => {

    // Записываю в поля формы из разметки
    nameInputElement.value = nameTextElement.textContent;
    jobInputElement.value = jobTextElement.textContent;

    // Открываю popup
    openPopup(popupProfileEditElement, popupOpenedClass);
  });

  // Сохранение данных в профиле
  formProfileEditElement.addEventListener('submit', (evt) => {
    saveEditProfile(popupProfileEditElement, nameTextElement, jobTextElement,  nameInputElement, jobInputElement, popupOpenedClass);
  });
}


const enableModalAddPlace = (
  addPlacePopupSelector,
  addPlaceButtonSelector,
  addPlaceFormSelector,
  addPlaceNameInputSelector,
  addPlaceLinknputSelector,
  popupOpenedClass
) => {

  //--- Получаю элементы ---


  // Popup Place Add
  const popupPlaceAddElement = document.querySelector(addPlacePopupSelector);

  // Кнопка добавить место
  const placeAddBtnElement = document.querySelector(addPlaceButtonSelector);

  // Форма добавления места
  const formPlaceAddElement = popupPlaceAddElement.querySelector(addPlaceFormSelector);

  // Получаю значения полей из формы
  const addPlaceNameInputElement = formPlaceAddElement.querySelector(addPlaceNameInputSelector);
  const addPlaceLinknputElement = formPlaceAddElement.querySelector(addPlaceLinknputSelector);

  //--- Вешаю слушателей ---


  // Открытие popup add place
  placeAddBtnElement.addEventListener('click', () => openPopup(popupPlaceAddElement, popupOpenedClass));

  // Добавление карточки
  formPlaceAddElement.addEventListener('submit', (evt) => {
    addPlace(popupPlaceAddElement, addPlaceNameInputElement, addPlaceLinknputElement, popupOpenedClass);
  });
}


// Открытие popup view
export function openPopupView(data, viewPopupSelector, viewPopupImageSelector, viewPopupCaptionSelector, popupOpenedClass){

  // Получаю элемент popup wiew
  const popupImageElement = document.querySelector(viewPopupSelector);

  // Загружаю данные
  const imageElement = popupImageElement.querySelector(viewPopupImageSelector);
  imageElement.setAttribute('src', data.src);
  imageElement.setAttribute('alt', `Изображение ${data.name}`);
  const captionElement = popupImageElement.querySelector(viewPopupCaptionSelector);
  captionElement.textContent = data.name;

  // Открываю popup
  openPopup(popupImageElement, popupOpenedClass);
}


export const enableModal = ({
  popupSelector,
  popupCloseButtonSelector,
  profilePopupSelector,
  profileEditButtonSelector,
  profileNameTextSelector,
  profileJobTextSelector,
  profileNameInputSelector,
  profileJobInputSelector,
  profileFormSelector,
  addPlacePopupSelector,
  addPlaceButtonSelector,
  addPlaceFormSelector,
  addPlaceNameInputSelector,
  addPlaceLinknputSelector,
  popupOpenedClass
}) => {

  //--- Получаю общие элементы ---


  // Список кнопкок закрытия popup
  const closeButtonElements = document.querySelectorAll(popupCloseButtonSelector);

  // popup
  const popupList = document.querySelectorAll(popupSelector);

  //--- Вешаю слушателей ---

  // Закрытие popup по кноке крестик
  closeButtonElements.forEach(closeButtonElement => {
    closeButtonElement.addEventListener('click', (evt) => {
      closePopup(evt.target.closest(popupSelector), popupOpenedClass);
    })
  })

  // Закрытие popup по оверлею
  popupList.forEach(popup => {
    popup.addEventListener('click', closePopupByClickOnOverlay(popupOpenedClass));
  })

  // Подключаю окно - Редактировать профиль
  enableModalProfile(
    profilePopupSelector,
    profileEditButtonSelector,
    profileNameTextSelector,
    profileJobTextSelector,
    profileNameInputSelector,
    profileJobInputSelector,
    profileFormSelector,
    popupOpenedClass);

  // Подключаю окно - Добавить место
  enableModalAddPlace(
    addPlacePopupSelector,
    addPlaceButtonSelector,
    addPlaceFormSelector,
    addPlaceNameInputSelector,
    addPlaceLinknputSelector,
    popupOpenedClass
  );
}
