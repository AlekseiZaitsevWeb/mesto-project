const popups = {
  profileEdit: {
    name:   'profile-edit',
    title:  'Редактировать профиль',
    input:  [
              {
                type: 'text',
                name: 'profile-name',
                class: 'popup__input-text',
                placeholder: 'Имя',
                value: '.profile__name'
              },
              {
                type: 'text',
                name: 'profile-description',
                class: 'popup__input-text',
                placeholder: 'О себе',
                value: '.profile__description'
              }
            ],
    button: 'Сохранить'
  },
  placeAdd: {
    name:   'place-add',
    title:  'Новое место',
    input:  [
              {
                type: 'text',
                name: 'place-name',
                class: 'popup__input-text',
                placeholder: 'Название'
              },
              {
                type: 'text',
                name: 'place-link',
                class: 'popup__input-text',
                placeholder: 'Ссылка на картинку'
              },
            ],
    button: 'Создать'
  }
}


function openPopup(dataPopup) {

  // Получаю окно
  const popup = document.querySelector('.popup');

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

  // Имя формы
  const popupForm = popup.querySelector('form');
  popupForm.setAttribute('name', '');

  // Заголовок
  const popupTitle = popup.querySelector('.popup__title');
  popupTitle.textContent = '';

  // Кнопка submit
  const popupBtn = popup.querySelector('.popup__button-submit');
  popupBtn.textContent = '';

  // input-ы
  const popupInputs = popup.querySelectorAll('input');
  popupInputs.forEach((input) => {
    input.remove();
  })

}
