/*controladores de eventos y abrir y cerrar ventanas modal.*/
import{showInputError,  hideInputError, checkInputValidity, setEventListeners, enableValidation} from "./formValidatior.js";
import {overlay, editProfileButton, closeProfileButton, profileFormContainer, addNewImgButton, closeNewPlaceButton, newPlaceFormContainer} from "./index.js";

function editProfileOpen() {
    profileFormContainer.classList.toggle('popup_visible');
    overlay.classList.toggle('overlay-visible');
    overlay.addEventListener('click', function editProfileClose(){
      overlay.classList.remove('overlay-visible');
      profileFormContainer.classList.remove('popup_visible');
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.key === "Escape") {
        overlay.classList.remove('overlay-visible');
        profileFormContainer.classList.remove('popup_visible');
    }});

    addEventListener("DOMContentLoaded",() =>{
      showInputError(formElement, inputElement, errorMessage);
      hideInputError(formElement, inputElement);
      checkInputValidity(formElement, inputElement)
      setEventListeners(formElement);
      enableValidation({
        formSelector: ".popup__form",
        inputSelector: ".popup__input",
        submitButtonSelector: ".popup__button",
        inactiveButtonClass: "popup__button_disabled",
        inputErrorClass: "popup__input_type_error",
        errorClass: "popup__error_visible"
      });
    });
}

editProfileButton.addEventListener('click', editProfileOpen);
closeProfileButton.addEventListener('click', editProfileOpen);

function addNewImgOpen(evt) {
    newPlaceFormContainer.classList.toggle('popup_visible');
    overlay.classList.toggle('overlay-visible');
    overlay.addEventListener('click', function addNewImgClose(){
      overlay.classList.remove('overlay-visible');
      newPlaceFormContainer.classList.remove('popup_visible');
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.key === "Escape") {
        overlay.classList.remove('overlay-visible');
        newPlaceFormContainer.classList.remove('popup_visible');
    }});
    
      addEventListener("DOMContentLoaded",() =>{
        showInputError(formElement, inputElement, errorMessage);
        hideInputError(formElement, inputElement);
        checkInputValidity(formElement, inputElement)
        setEventListeners(formElement);
        enableValidation({
          formSelector: ".popup__form",
          inputSelector: ".popup__input",
          submitButtonSelector: ".popup__button",
          inactiveButtonClass: "popup__button_disabled",
          inputErrorClass: "popup__input_type_error",
          errorClass: "popup__error_visible"
        });
    });
}  

addNewImgButton.addEventListener('click', addNewImgOpen);
closeNewPlaceButton.addEventListener('click', addNewImgOpen);