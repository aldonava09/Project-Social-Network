export class FormValidator {
  constructor(objConfig, formElement) {
    this._objConfig = objConfig;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(this._objConfig.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._objConfig.inputSelector));
  }

  _showError(inputElement) {
    const errorElement = this._formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.add(this._objConfig.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._objConfig.errorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.remove(this._objConfig.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._objConfig.errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  }

  _toggleButtonState() {
    if (this._formElement.checkValidity()) {
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(this._objConfig.inactiveButtonClass);
    } else {
      this._submitButton.disabled = true;
      this._submitButton.classList.add(this._objConfig.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}