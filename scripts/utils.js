import {overlay, editProfileButton, closeProfileButton, profileFormContainer, addNewImgButton, closeNewPlaceButton, newPlaceFormContainer, profileSubmitButton} from "./index.js";
import { FormValidator } from "./formValidatior.js";
import { newPlaceSubmitButton } from "./card.js";

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

    const editProfileFormValidator = new FormValidator({
      inputSelector: '.popup__input',
      submitButtonSelector: '.popup__button',
      inactiveButtonClass: 'popup__button_disabled',
      inputErrorClass: 'popup__input_type_error',
      errorClass: 'popup__error_visible'
    }, document.querySelector('.popup__form'));
      
    editProfileFormValidator.enableValidation();

    document.getElementById("editProfileForm").reset();
}

editProfileButton.addEventListener('click', editProfileOpen);
closeProfileButton.addEventListener('click', editProfileOpen);
profileSubmitButton.addEventListener('click' , editProfileOpen);

function addNewImgOpen() {
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
    
    const newPlaceFormValidator = new FormValidator({
      inputSelector: '.popup__input',
      submitButtonSelector: '.popup__button',
      inactiveButtonClass: 'popup__button_disabled',
      inputErrorClass: 'popup__input_type_error',
      errorClass: 'popup__error_visible'
    }, document.querySelector('.popup__form_new-place'));
    
    newPlaceFormValidator.enableValidation();

    document.getElementById("newPlaceForm").reset();
}  

addNewImgButton.addEventListener('click', addNewImgOpen);
closeNewPlaceButton.addEventListener('click', addNewImgOpen);
newPlaceSubmitButton.addEventListener('click', addNewImgOpen);
