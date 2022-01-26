// Показываем текст и стили ошибки ввода
const showInputError = (formSectionSelector, inputElement, inputTextError, errorMessage, inputErrorClass, errorClass) => {
  const errorMessageElement = inputElement.closest(formSectionSelector).querySelector(inputTextError);

  inputElement.classList.add(inputErrorClass);
  errorMessageElement.classList.add(errorClass);
  errorMessageElement.textContent = errorMessage;
}

// Скрываем текст и стили ошибки ввода
const hideInputError = (formSectionSelector, inputElement, inputTextError, inputErrorClass, errorClass) => {
  const errorMessageElement = inputElement.closest(formSectionSelector).querySelector(inputTextError);

  inputElement.classList.remove(inputErrorClass);
  errorMessageElement.classList.remove(errorClass);
  errorMessageElement.textContent = '';
}

// Показываем / скрываем текст и стили ошибки ввода
const checkInputValidity = (formSectionSelector, inputElement, inputTextError, inputErrorClass, errorClass) => {
  const isInputValid = inputElement.validity.valid;

  if(!isInputValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(formSectionSelector, inputElement, inputTextError, errorMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formSectionSelector, inputElement, inputTextError, inputErrorClass, errorClass);
  }
}

// Проверка полей формы на валидность
function hasInvalidInput(inputListArray) {
  return inputListArray.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

// Делаем кнопку submit неактивной если хотя бы одно поле не валидно
function toggleButtonState(inputListArray, submitButtonElement) {
  if(hasInvalidInput(inputListArray)) {
    submitButtonElement.setAttribute('disabled', true);
  } else {
    submitButtonElement.removeAttribute('disabled');
  }
}

// Вешаем события input на все поля формы
const setEventListeners = (formSectionSelector, formElement, inputTextError, inputSelector, submitButtonSelector, inputErrorClass, errorClass) => {
  const inputListArray = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButtonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputListArray, submitButtonElement);

  const handleInput = (event) =>{
    checkInputValidity(formSectionSelector, event.target, inputTextError, inputErrorClass, errorClass);
    toggleButtonState(inputListArray, submitButtonElement);
  }

  inputListArray.forEach(inputElement => {
    inputElement.addEventListener('input', handleInput);
  });
}

// Подключение валидации ко всем формам
export const enableValidation = ({formSelector,
                            formSectionSelector,
                            inputSelector,
                            inputTextError,
                            submitButtonSelector,
                            inputErrorClass,
                            errorClass}) => {
  const formListArray = Array.from(document.querySelectorAll(formSelector));

  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  formListArray.forEach(formElement => {
    formElement.addEventListener('submit', handleFormSubmit);
    setEventListeners(formSectionSelector, formElement, inputTextError, inputSelector, submitButtonSelector, inputErrorClass, errorClass);
  });
};
