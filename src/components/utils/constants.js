const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-5',
  headers: {
    authorization: 'c7ce723e-eaab-417b-b741-f3f9269dcb44',
    'Content-Type': 'application/json'
  }
}
const selectors = {
  profileAvatar:                '.profile__avatar',
  profileName:                  '.profile__name',
  profileAbout:                 '.profile__description',
  popup:                        '.popup',
  profilePopupForm:             '.popup__form_type_profile-edit',
  addPlacePopupForm:            '.popup__form_type_add-place',
  avatarPopupForm:              '.popup__form_type_avatar-edit',
  cardTemplate:                 '.card__template',
  cardWrap:                     '.photo-grid__items',
  addPlacePopup:                '.popup_type_add-place',
  profilePopup:                 '.popup_type_profile-edit',
  avatarPopup:                  '.popup_type_avatar-edit',
}
const elements = {
  profileEditButton:            document.querySelector('.profile__edit-button'),
  changeAvatarButton:           document.querySelector('.profile__avatar-cover'),
  addPlaceButton:               document.querySelector('.profile__add-button'),
  profileNameInput:             document.querySelector('.popup__input_profile_name'),
  profileAboutInput:            document.querySelector('.popup__input_profile_description'),
}
const formSelectors ={
  formSectionSelector:          '.popup__form-section',
  inputSelector:                '.popup__input-text',
  inputTextError:               '.popup__input-text-error',
  submitButtonSelector:         '.popup__button-submit',
  inputErrorClass:              'popup__input-text_color_error',
  errorClass:                   'popup__input-text-error_active'
}
export {config, selectors, elements, formSelectors}