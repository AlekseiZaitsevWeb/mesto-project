export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector}) {
    this._nameElement = documnet.querySelector(`.${nameSelector}`);
    this._aboutElement = documnet.querySelector(`.${aboutSelector}`);
    this._avatarElement = documnet.querySelector(`.${avatarSelector}`);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
      avatar: this._avatarElement.src
    };
  }

  setUserInfo({name, about, avatar}) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
    this._avatarElement.src = avatar;
  }
}
