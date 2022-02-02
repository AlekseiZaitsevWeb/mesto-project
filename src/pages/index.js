import './index.css';
import {getInitial, saveUserData, getCards} from '../components/_api.js';
import {enableProfile, setProfile} from '../components/_profile.js';
import {enableModal} from '../components/_modal.js';
import {enableValidation} from '../components/_validate.js';
import {loadCards} from '../components/_card.js';
import {config, selectors} from '../components/utils/constants.js';

import Api from "../components/Api.js";
import UserInfo from "../components/UserInfo";
import FormValidator from "../components/validate.js";

const profileFormValidator = new FormValidator(constant.settings, constant.formProfile);
const CardFormValidator = new FormValidator(constant.settings, constant.formPosts);
const avatarFormValidator = new FormValidator(constant.settings, constant.formAvatar);
profileFormValidator.enableValidation();
CardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

const api = new Api(config);






