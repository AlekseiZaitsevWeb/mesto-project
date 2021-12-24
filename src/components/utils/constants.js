const selectors = {
  // popup
  popupSelector:                        '.popup',
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
  popupCloseButtonSelector:             'popup__button-close',
  // card
  cardLikeButtonActiveClass:            'photo-grid__like-button_active'
}

export {selectors, classAction}
