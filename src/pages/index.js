import './index.css';
import {enableCard} from '../components/card';
import {enableModal} from '../components/modal.js';
import {enableValidation} from '../components/validate.js';

const popup = {
  selector:               '.popup',
  closeButtonSelector:    '.popup__button-close',
  openedClass:            'popup_opened'
}

const profilePopup = {
  selector:               '.popup_type_profile-edit',
  editButtonSelector:     '.profile__edit-button',
  nameTextSelector:       '.profile__name',
  jobTextSelector:        '.profile__description',
  nameInputSelector:      '.popup__input_profile_name',
  jobInputSelector:       '.popup__input_profile_description',
  formSelector:           '.popup__form_type_profile-edit',
}

const addPlacePopup = {
  selector:               '.popup_type_add-place',
  buttonSelector:         '.profile__add-button',
  formSelector:           '.popup__form_type_add-place',
  nameInputSelector:      '.popup__input_place_name',
  linkInputSelector:      '.popup__input_place_link',
}

const viewPopup = {
  selector:               '.popup_type_view',
  imageSelector:          '.popup__image',
  captionSelector:        '.popup__caption',
}

const card = {
  templateSelector:       '.card__template',
  wrapSelector:           '.photo-grid__items',
  itemSelector:           '.photo-grid__item',
  imageSelector:          '.photo-grid__image',
  imageCaptionSelector:   '.photo-grid__image-title',
  likeButtonSelector:     '.photo-grid__like-button',
  deleteButtonSelector:   '.photo-grid__delete-button',
  likeButtonActiveClass:  'photo-grid__like-button_active',
}

enableCard(card, viewPopup, popup.openedClass);

enableModal(popup, profilePopup, addPlacePopup, viewPopup, card);

enableValidation({
  formSelector:               '.popup__form',
  formSectionSelector:        '.popup__form-section',
  inputSelector:              '.popup__input-text',
  inputTextError:             '.popup__input-text-error',
  submitButtonSelector:       '.popup__button-submit',
  inputErrorClass:            'popup__input-text_color_error',
  errorClass:                 'popup__input-text-error_active'
});
