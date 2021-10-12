// Profile
const profileEditBtn = document.querySelector('.profile__edit-button');
profileEditBtn.addEventListener('click', () => {
  openPopup(popups.profileEdit);
});

/*
const profileEditBtn = document.querySelector('.profile__edit-button');
profileEditBtn.addEventListener('click', () => {
  openPopup(popups.placeAdd);
});
*/

const profileCloseBtn = document.querySelector('.popup__button-close');
profileCloseBtn.addEventListener('click', () => {
  closePopup();
});
