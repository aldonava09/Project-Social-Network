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
      try {
        this._submitButton.textContent = "Saving...";
        
        const res = await fetch("https://around.nomoreparties.co/v1/web_es_05/users/me", {
          method: "PATCH",
          headers: {
            authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: this._nameInput.value,
            about: this._professionInput.value
          })
        });
  
        if (res.ok) {
          this.setUserInfo();
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
        this.editProfile();
      });
    }
};

export { UserInfo };