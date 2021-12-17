const showInputError = (formSelector, inputElement, inputTextError, errorMessage, inputErrorClass, errorClass) => {
  const errorMessageElement = inputElement.closest(formSelector).querySelector(inputTextError);

  inputElement.classList.add(inputErrorClass);
  errorMessageElement.classList.add(errorClass);
  errorMessageElement.textContent = errorMessage;
}


const hideInputError = (formSelector, inputElement, inputTextError, inputErrorClass, errorClass) => {
  const errorMessageElement = inputElement.closest(formSelector).querySelector(inputTextError);

  inputElement.classList.remove(inputErrorClass);
  errorMessageElement.classList.remove(errorClass);
  errorMessageElement.textContent = '';
}


const checkInputValidity = (formSelector, inputElement, inputTextError, inputErrorClass, errorClass) => {
  const isInputValid = inputElement.validity.valid;

  if(!isInputValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(formSelector, inputElement, inputTextError, errorMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formSelector, inputElement, inputTextError, inputErrorClass, errorClass);
  }
}


function hasInvalidInput(inputListArray) {
  return inputListArray.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}


function toggleButtonState(inputListArray, submitButtonElement) {
  if(hasInvalidInput(inputListArray)) {
    submitButtonElement.setAttribute('disabled', true);
  } else {
    submitButtonElement.removeAttribute('disabled');
  }
}


const setEventListeners = (formSelector, formElement, inputTextError, inputSelector, submitButtonSelector, inputErrorClass, errorClass) => {
  const inputListArray = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButtonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputListArray, submitButtonElement);

  const handleInput = (event) =>{
    checkInputValidity(formSelector, event.target, inputTextError, inputErrorClass, errorClass);
    toggleButtonState(inputListArray, submitButtonElement);
  }

  inputListArray.forEach(inputElement => {
    inputElement.addEventListener('input', handleInput);
  });
}


export const enableValidation = ({formSelector,
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
    setEventListeners(formSelector, formElement, inputTextError, inputSelector, submitButtonSelector, inputErrorClass, errorClass);
  });
};
