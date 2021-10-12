// Редактировать профиль
// name="profile-edit"
// Жак-Ив Кусто
// Исследователь океана
// Сохранить
{/* <input class="popup__input-text" type="text" name="profile-name" placeholder="Имя">
<input class="popup__input-text" type="text" name="profile-description" placeholder="О себе"></input> */}

/*
modalHeader - заголовок модального окна
formName - атрибут формы name,
textButton - текст кнопки submit,
arrInputText - архив данных для создания тектовых полей формы
*/

function createElementsModal(modalHeader, formName, textButton, arrInputText) {

  // Получаю модальное окно
  const modalProfileEdit = document.querySelector('.popup');

  // Получаю кнопку submit модального окна
  const buttonSubmit = modalProfileEdit.querySelector('.popup__button-submit');
  // Устанавливаю текст кнопки
  buttonSubmit.textContent = 'Сохранить';

  // Создаю inputText - Имя
  const inputTextName = document.createElement('input');
  addAttributesForInputTex(inputTextName);
  inputTextName.setAttribute('name', 'profile-name');
  inputTextName.setAttribute('placeholder', 'Имя');

  // Создаю inputText - О себе
  const inputTextDescription = document.createElement('input');
  addAttributesForInputTex(inputTextDescription);
  inputTextDescription.setAttribute('name', 'profile-description');
  inputTextDescription.setAttribute('placeholder', 'О себе');

  // Вставляю созданные inputText перед кнопкой buttonSubmit
  const formProfileEdit = modalProfileEdit.querySelector('form');
  formProfileEdit.before(inputTextName);
  formProfileEdit.before(inputTextDescription);

}

function addAttributesForInputTex(inputText) {
  inputText.setAttribute('class', 'popup__input-text');
  inputText.setAttribute('type', 'text');
}

function deleteElementsModalProfileEdit() {
  // Получаю модальное окно
  const modalProfileEdit = document.querySelector('.popup');

  // Получаю кнопку submit модального окна
  const buttonSubmit = modalProfileEdit.querySelector('.popup__button-submit');
  // Очищаю текст кнопки
  buttonSubmit.textContent = '';

  // Получаю поля inputText и удаляю их

}

createElementsModalProfileEdit();

