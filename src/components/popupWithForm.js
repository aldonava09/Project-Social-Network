import { Popup } from "./popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, openButonSelector, closeButtonSelector, formSelector, SubmitButton, overlay) {
      super(popupSelector, overlay);
      this._openButton = openButonSelector;
      this._closeButton = closeButtonSelector;
      this._form = formSelector;
      this._submitButton = SubmitButton;
      this._inputList = this._form.querySelectorAll('.popup__input');
    }
  
    setEventListeners() {
      super.setEventListeners();
  
      this._openButton.addEventListener('click', () => {
        this.open();
        this._form.reset();
      });
  
      this._closeButton.addEventListener('click', () => {
        this.close();
        this._form.reset();
      });
  
      this._overlay.addEventListener('click', () => {
        this.close();
        this._form.reset();
      });
  
      this._submitButton.addEventListener('click', () => {
        setTimeout(() => {
          this.close();
        }, 900);
      });
    }
};

export {PopupWithForm};