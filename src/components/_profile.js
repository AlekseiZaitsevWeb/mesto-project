import {selectors, classAction} from './utils/constants.js';

// profileEdit
const profileAvatarWraperElement = document.querySelector(selectors.profileAvatarWraperSelector);
const profileAvatarCoverElement = profileAvatarWraperElement.querySelector(selectors.profileAvatarCoverSelector);
const profileAvatarElement = profileAvatarWraperElement.querySelector(selectors.profileAvatarSelector);
const profileNameTextElement = document.querySelector(selectors.profileNameTextSelector);
const profileJobTextElement  = document.querySelector(selectors.profileAboutTextSelector);

export const enableProfile = () => {
  profileAvatarWraperElement.addEventListener('mouseover', () => {
    profileAvatarCoverElement.classList.add(classAction.profileAvatarCoverActive);
  });
  profileAvatarWraperElement.addEventListener('mouseout', () => {
    profileAvatarCoverElement.classList.remove(classAction.profileAvatarCoverActive);
  });
};

export function setProfile(user){
  profileAvatarElement.src = user.avatar;
  profileAvatarElement.alt = user.name;
  profileNameTextElement.textContent = user.name;
  profileJobTextElement.textContent = user.about;
}
