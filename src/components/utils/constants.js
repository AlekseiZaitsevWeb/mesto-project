const selectors = {
  // popup
  popupSelector:                        '.popup',
  popupCloseButtonSelector:             '.popup__button-close',
  // profileEdit
  profileEditButtonSelector:            '.profile__edit-button',
  profileNameTextSelector:              '.profile__name',
  profileJobTextSelector:               '.profile__description',
  // profilePopup
  profilePopupSelector:                 '.popup_type_profile-edit',
  profilePopupNameInputSelector:        '.popup__input_profile_name',
  profilePopupJobInputSelector:         '.popup__input_profile_description',
  profilePopupFormSelector:             '.popup__form_type_profile-edit',
  // placeAddButton
  addPlaceButtonSelector:               '.profile__add-button',
  // addPlacePopup
  addPlacePopupSelector:                '.popup_type_add-place',
  addPlacePopupFormSelector:            '.popup__form_type_add-place',
  addPlacePopupNameInputSelector:       '.popup__input_place_name',
  addPlacePopupLinkInputSelector:       '.popup__input_place_link',
  // viewPopup
  viewPopupSelector:                    '.popup_type_view',
  viewPopupImageSelector:               '.popup__image',
  viewPopupCaptionSelector:             '.popup__caption',
  // card
  cardTemplateSelector:                 '.card__template',
  cardWrapSelector:                     '.photo-grid__items',
  cardItemSelector:                     '.photo-grid__item',
  cardImageSelector:                    '.photo-grid__image',
  cardImageCaptionSelector:             '.photo-grid__image-title',
  cardLikeButtonSelector:               '.photo-grid__like-button',
  cardDeleteButtonSelector:             '.photo-grid__delete-button',
  // form button
  submitButtonForm:                     '.popup__button-submit'
}

const classAction = {
  // popup
  popupOpenedClass:                     'popup_opened',
  // card
  cardLikeButtonActiveClass:            'photo-grid__like-button_active'
}


// const popup = {
//   selector:               '.popup',
//   closeButtonSelector:    '.popup__button-close',
//   openedClass:            'popup_opened'
// }

// const profilePopup = {
//   selector:               '.popup_type_profile-edit',
//   editButtonSelector:     '.profile__edit-button',
//   nameTextSelector:       '.profile__name',
//   jobTextSelector:        '.profile__description',
//   nameInputSelector:      '.popup__input_profile_name',
//   jobInputSelector:       '.popup__input_profile_description',
//   formSelector:           '.popup__form_type_profile-edit',
// }

// const addPlacePopup = {
//   selector:               '.popup_type_add-place',
//   buttonSelector:         '.profile__add-button',
//   formSelector:           '.popup__form_type_add-place',
//   nameInputSelector:      '.popup__input_place_name',
//   linkInputSelector:      '.popup__input_place_link',
// }

// const viewPopup = {
//   selector:               '.popup_type_view',
//   imageSelector:          '.popup__image',
//   captionSelector:        '.popup__caption',
// }

// const card = {
//   templateSelector:       '.card__template',
//   wrapSelector:           '.photo-grid__items',
//   itemSelector:           '.photo-grid__item',
//   imageSelector:          '.photo-grid__image',
//   imageCaptionSelector:   '.photo-grid__image-title',
//   likeButtonSelector:     '.photo-grid__like-button',
//   deleteButtonSelector:   '.photo-grid__delete-button',
//   likeButtonActiveClass:  'photo-grid__like-button_active',
// }

export {selectors, classAction}
