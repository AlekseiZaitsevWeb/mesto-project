// Open edit profile popup
const profileEditBtn = document.querySelector('.profile__edit-button');
profileEditBtn.addEventListener('click', () => {
  openPopup(popups.profileEdit);
});


// Open add new place popup
const placeAddBtn = document.querySelector('.profile__add-button');
placeAddBtn.addEventListener('click', () => {
  openPopup(popups.placeAdd);
});


// Close popup
const profileCloseBtn = document.querySelector('.popup__button-close');
profileCloseBtn.addEventListener('click', closePopup);


// Submit form
const form = document.querySelector('.popup__form');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  form.getAttribute('name') === 'profile-edit' ? editProfile() : addPlace();
});


//--- Functions


// Edit profile
function editProfile(){

  // Получаю значения полей из формы
  const nameInputValue = document.querySelector('.popup__input_profile_name').value;
  const jobInputValue  = document.querySelector('.popup__input_profile_description').value;

  // Получаю элементы полей в профиле
  const nameInput = document.querySelector('.profile__name');
  const jobInput  = document.querySelector('.profile__description');

  // Записываю значения в профиль
  nameInput.textContent = nameInputValue;
  jobInput.textContent = jobInputValue;

  // Закрываю окно
  closePopup();
}


// Add place
function addPlace(){
  console.log('add');
  closePopup();
}

