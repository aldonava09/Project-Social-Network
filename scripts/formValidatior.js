/*class FormValidator{
  constructor(data, inputElement){
    this.formSelector = data.formSelector;
    this.inputSelector = inputElement;
  }

  _showInputError = (data, inputElement, errorMessage) => {
    const errorElement = data.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__error_visible");
  };

  _hideInputError = (data, inputElement) => {
    const errorElement = data.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.remove("popup__input_type_error");
    errorElement.classList.remove("popup__error_visible");
    errorElement.textContent = "";
  };

  _checkInputValidity = (data, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(data, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(data, inputElement);
    }
  };

  _toggleButtonState = (inputList, submitButton) => {
    if (hasInvalidInput(inputList)) {
      submitButton.setAttribute("disabled", "");
      submitButton.classList.add("popup__button_disabled");
    } else {
      submitButton.removeAttribute("disabled", "");
      submitButton.classList.remove("popup__button_disabled");
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  
  _setEventListeners = (data) => {
    const inputList = Array.from(data.querySelectorAll(".popup__input"));
    const submitButton = data.querySelector('.popup__button');
    
    toggleButtonState(inputList, submitButton);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(data, inputElement);
        toggleButtonState(inputList, submitButton);
      });
    });
  };
  
  enableValidation = (data) => {
    data.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      data._setEventListeners(data);
    });
  };
};
*/


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error_visible");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__error_visible");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, submitButton) => {
  if (hasInvalidInput(inputList)) {
    submitButton.setAttribute("disabled", "");
    submitButton.classList.add("popup__button_disabled");
  } else {
    submitButton.removeAttribute("disabled", "");
    submitButton.classList.remove("popup__button_disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const submitButton = formElement.querySelector('.popup__button');
  
  toggleButtonState(inputList, submitButton);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButton);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
     setEventListeners(formElement);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});

export{showInputError,  hideInputError, checkInputValidity, setEventListeners, enableValidation};


/*export { FormValidator }; */