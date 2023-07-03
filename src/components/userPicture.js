import { Api } from "./api.js";
import { changeButtonText, restoreOriginalButtonText } from "../index.js";

class UserPicture {
    constructor(profilePictureSelector, profilePictureInput, submitButton) {
      this._profilePictureElement = profilePictureSelector;
      this._profilePictureInput = profilePictureInput;
      this._submitButton = submitButton;
    }
  
    setUserPicture() {
      this._profilePictureElement.src = this._profilePictureInput.value;
    }

    async editProfilePicture(){
      const originalButtonText = this._submitButton.textContent;
      changeButtonText(this._submitButton, "Saving...");

      const userPictureApi = new Api("https://around.nomoreparties.co/v1/web_es_05/users/me/avatar");
      await userPictureApi.editUserPicture(this._profilePictureInput);

      this.setUserPicture();
      restoreOriginalButtonText(this._submitButton, originalButtonText);
    }
  
    setEventListeners(){
      this._submitButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        this.editProfilePicture();
      });
    }
}; 

export {UserPicture};