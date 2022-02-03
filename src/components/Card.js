export default class Card {
  constructor(data, { userId, handleCardClick, handleLikeToggle, handleDeleteCard }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleLikeToggle = handleLikeToggle;
    this._handleDeleteCard = handleDeleteCard;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.photo-grid__item')
      .cloneNode(true);
    return cardElement;
  }
  checkLike() {
    return Boolean(this._likes.find(item => item._id === this._userId));
  }
  _updateLike() {
    this._element.querySelector('.photo-grid__count-like').textContent = this._likes.length;
    if (this.checkLike()) this._element.querySelector('.photo-grid__like-button').classList.add('photo-grid__like-button_active');
    else
      this._element.querySelector('.photo-grid__like-button').classList.remove('photo-grid__like-button_active');
  }
  _setEventListeners() {
    this._element.querySelector('.photo-grid__delete-button').addEventListener('ckick', () => this._handleDeleteCard(this));
    this._element.querySelector('.photo-grid__like-button').addEventListener('ckick', () => this._handleLikeToggle(this));
    this._element.querySelector('.photo-grid__image').addEventListener('ckick', () => this._handleCardClick(this));
  }
  removeCard() {
    this._element.remove();
  }
  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._updateLike();
    if(this._userId === this._ownerId) {
      this._element.querySelector('.photo-grid__delete-button').classList.add('photo-grid__delete-button_active');
    }
    const img = this._element.querySelector('.photo-grid__image');
    img.src = this._link;
    img.alt = this._name;
    this._element.querySelector('.photo-grid__image-title').textContent = this._name;
    return this._element;
  }
  setLike(data) {
    this._likes = data.likes;
    this._updateLike();
  }
  getCardId() {
    return this._id;
  }
}