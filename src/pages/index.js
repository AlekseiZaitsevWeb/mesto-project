import './index.css';
import Api from "../components/Api.js";
import UserInfo from "../components/UserInfo";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";
import {config, selectors, elements, formSelectors} from '../components/utils/constants.js';

const api = new Api(config);

const userInfo = new UserInfo({
  nameSelector: selectors.profileName,
  aboutSelector: selectors.profileAbout,
  avatarSelector: selectors.profileAvatar
});

let userId = null;

const profileFormValidator = new FormValidator(formSelectors, selectors.profilePopupForm);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(formSelectors, selectors.addPlacePopupForm);
cardFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(formSelectors, selectors.avatarPopupForm);
avatarFormValidator.enableValidation();

const imagePopup = new PopupWithImage(selectors.popup);

const createCard = (cardData) => {
  const card = new Card({
    cardData,
    userId,
    handleCardClick: () => {
      imagePopup.open(cardData);
    },
    handleCardClick: (card) => {
      api.toogleLike(card.checkLike(), card.getCardId())
        .then(data => {
          card.setLike(data);
        })
        .catch(err => console.log(`Ошибка при изменении лайка: ${err}`))
    },
    handleDeleteCard: () => {
      api.delServerCard(card.getCardId())
        .then(removeCard())
        .catch(err => console.log(`Ошибка при изменении лайка: ${err}`))
    }
  },
    selectors.cardTemplate
  )
  return card.createCard();
}

const cardList = new Section({
  pageOutput: (data) => {
    cardList.addItem(createCard(data));
  }
},
  selectors.cardWrap
);

const addCardPopup = new PopupWithForm({
  popupSelector: selectors.addPlacePopup,
  handleFormSubmit: (data) => {
    addCardPopup.renderLoading('Создание...');
    api.addServerCard(data.place-names, data.place-link)
      .then(cardData => {
        cardList.addItem(createCard(cardData));
        addCardPopup.close();
      })
      .catch(err => console.log(`Ошибка при добавлении новой карточки: ${err}`))
      .finally(addCardPopup.renderLoading())
  }
})

const editUserPopup = new PopupWithForm({
  popupSelector: selectors.profilePopup,
  handleFormSubmit: (data) => {
    editUserPopup.renderLoading('Сохранение...');
    api.addServerUserData(data.profile-names, data.profile-description)
      .then(userData => {
        userInfo.setUserInfo({
          name: userData.name,
          about: userData.about
        })
        editUserPopup.close();
      })
      .catch(err => console.log(`Ошибка при редактировании данных пользователя: ${err}`))
      .finally(editUserPopup.renderLoading())
  }
})

const editAvatarPopup = new PopupWithForm({
  popupSelector: selectors.avatarPopup,
  handleFormSubmit: (data) => {
    editAvatarPopup.renderLoading('Сохранение...');
    api.addServerUserImage(data.avatar)
      .then(avatarData => {
        userInfo.setUserInfo({
          avatar: avatarData.avatar
        })
        editAvatarPopup.close();
      })
      .catch(err => console.log(`Ошибка при смене аватара: ${err}`))
      .finally(editAvatarPopup.renderLoading())
  }
})

elements.profileEditButton.addEventListener('click', () => {
  const currentUser = userInfo.getUserInfo();
  elements.profileNameInput.value = currentUser.name;
  elements.profileAboutInput.value = currentUser.about;
  editUserPopup.open();
})

elements.addPlaceButton.addEventListener('click', () => {
  addCardPopup.open();
})

elements.changeAvatarButton.addEventListener('click', () => {
  editAvatarPopup.open();
})

Promise.all([api.getUser(), getCards()])
  .then(([userData, cardData]) => {
    userId = userData._id;
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatar: avatarData.avatar
    });
    cardList.renderElements(cardData.reverse());
  })
  .catch(err => console.log(`Ошибка при загрузке данных с сервера: ${err}`))



