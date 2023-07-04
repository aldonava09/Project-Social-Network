import { apiInstance } from "./api.js";
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

      await apiInstance.editUserPicture(this._profilePictureInput, "users/me/avatar");

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