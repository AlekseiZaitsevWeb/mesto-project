import {selectors} from './utils/constants.js';

// profileEdit
const profileAvatarElement = document.querySelector(selectors.profileAvatarSelector);
const profileNameTextElement = document.querySelector(selectors.profileNameTextSelector);
const profileJobTextElement  = document.querySelector(selectors.profileJobTextSelector);

// Установить данные профиля
export function setProfile(user){
  profileAvatarElement.src = user.avatar;
  profileNameTextElement.textContent = user.name;
  profileJobTextElement.textContent = user.about;
}

// Взять данные профиля
export function getProfile(){
  const user = {};
  user.avatar = profileAvatarElement.src;
  user.name = profileNameTextElement.textContent;
  user.about = profileJobTextElement.textContent;
  return user;
}
