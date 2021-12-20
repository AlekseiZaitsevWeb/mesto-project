import './styles/index.css';
import {enableCard} from './components/card';
import {enableModal} from './components/modal.js';
import {enableValidation} from './components/validate.js';

enableCard({
  cardTemplateSelector:       '.card__template',
  cardWrapSelector:           '.photo-grid__items',
  cardItemSelector:           '.photo-grid__item',
  cardImageSelector:          '.photo-grid__image',
  cardImageCaptionSelector:   '.photo-grid__image-title',
  cardLikeButtonSelector:     '.photo-grid__like-button',
  cardDeleteButtonSelector:   '.photo-grid__delete-button',
  cardLikeButtonActiveClass:  'photo-grid__like-button_active',
  viewPopupSelector:          '.popup_type_view',
  viewPopupImageSelector:     '.popup__image',
  viewPopupCaptionSelector:   '.popup__caption',
  viewPopupOpenedClass:       'popup_opened'
});

enableModal({
  popupSelector:              '.popup',
  popupCloseButtonSelector:   '.popup__button-close',
  profilePopupSelector:       '.popup_type_profile-edit',
  profileEditButtonSelector:  '.profile__edit-button',
  profileNameTextSelector:    '.profile__name',
  profileJobTextSelector:     '.profile__description',
  profileNameInputSelector:   '.popup__input_profile_name',
  profileJobInputSelector:    '.popup__input_profile_description',
  profileFormSelector:        '.popup__form_type_profile-edit',
  addPlacePopupSelector:      '.popup_type_add-place',
  addPlaceButtonSelector:     '.profile__add-button',
  addPlaceFormSelector:       '.popup__form_type_add-place',
  addPlaceNameInputSelector:  '.popup__input_place_name',
  addPlaceLinknputSelector:   '.popup__input_place_link',
  popupOpenedClass:           'popup_opened'
});

enableValidation({
  formSelector:               '.popup__form',
  formSectionSelector:        '.popup__form-section',
  inputSelector:              '.popup__input-text',
  inputTextError:             '.popup__input-text-error',
  submitButtonSelector:       '.popup__button-submit',
  inputErrorClass:            'popup__input-text_color_error',
  errorClass:                 'popup__input-text-error_active'
});
