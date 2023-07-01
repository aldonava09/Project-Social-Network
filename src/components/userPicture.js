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
        try{
          this._submitButton.textContent = "Saving...";

          const res = await fetch("https://around.nomoreparties.co/v1/web_es_05/users/me/avatar", {
              method: "PATCH",
              headers: {
                authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                avatar: this._profilePictureInput.value,
              })
            });
      
            if (res.ok) {
              this.setUserPicture();
            } else {
              console.error(`Error: ${res.error}`);
            }
        } catch (error) {
            console.error(error);
        } finally {
          this._submitButton.textContent = "Save";
        }
    }
  
    setEventListeners(){
      this._submitButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        this.editProfilePicture();
      });
    }
}; 

export {UserPicture};