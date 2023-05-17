class UserInfo {
    constructor(nameSelector, professionSelector, nameInput, professionInput, submitButton) {
      this._nameElement = nameSelector;
      this._professionElement = professionSelector;
      this._nameInput = nameInput;
      this._professionInput = professionInput;
      this._submitButton = submitButton;
    }
  
    getUserInfo() {
      const name = this._nameElement.textContent;
      const profession = this._professionElement.textContent;
      return { name, profession };
    }
  
    setUserInfo() {
      this._nameElement.textContent = this._nameInput.value;
      this._professionElement.textContent = this._professionInput.value;
      this._nameInput.placeholder = "Name";
      this._professionInput.placeholder = "Profession";
    }
  
    setEventListeners(){
      this._submitButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        this.setUserInfo();
      });
    }
  };

  export { UserInfo };