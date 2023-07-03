import { Api } from "./api.js";
import { changeButtonText, restoreOriginalButtonText } from "../index.js";

class UserInfo {
    constructor(nameSelector, professionSelector, nameInput, professionInput, submitButton) {
      this._nameElement = nameSelector;
      this._professionElement = professionSelector;
      this._nameInput = nameInput;
      this._professionInput = professionInput;
      this._submitButton = submitButton;
    }

    setUserInfo() {
      this._nameElement.textContent = this._nameInput.value;
      this._professionElement.textContent = this._professionInput.value;
      this._nameInput.placeholder = "Name";
      this._professionInput.placeholder = "Profession";
    }

    async editProfile() {
        const originalButtonText = this._submitButton.textContent;
        changeButtonText(this._submitButton, "Saving...");

        const userApi = new Api("https://around.nomoreparties.co/v1/web_es_05/users/me");
        await userApi.editUserInfo(this._nameInput, this._professionInput);

        this.setUserInfo();
        restoreOriginalButtonText(this._submitButton, originalButtonText);
    }
  
    setEventListeners(){
      this._submitButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        this.editProfile();
      });
    }
};

export { UserInfo };