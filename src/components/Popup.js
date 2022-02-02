export default class Popup {
  _escape = "Escape";
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closePopupButton = this._popupElement.querySelector(".popup__button-close");
    this.close = this.close.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }
  open() {
    this._popupElement.classList.add("popup_opened");
    this._setEventListeners();
  }
  close() {
    this._popupElement.classList.remove("popup_opened");
    this._removeEventListeners();
  }
  _handleClose(evt) {
    if (evt.key === this._escape || evt.target === this._popupElement || evt.target === this._closePopupButton) {
      this.close();
    }
  }
  _setEventListeners() {
    this._popupElement.addEventListener("click", this._handleClose);
    document.addEventListener("keydown", this._handleClose);
    this._closePopupButton.addEventListener("click", this._handleClose);
  }
  _removeEventListeners() {
    this._popupElement.removeEventListener("click", this._handleClose);
    document.removeEventListener("keydown", this._handleClose);
    this._closePopupButton.removeEventListener("click", this._handleClose);
  }
}