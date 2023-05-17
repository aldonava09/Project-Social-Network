import { PopupWithForm } from "./popup.js"; 
import {overlay, profileFormContainer, editProfileButton, closeProfileButton, profileForm, profileSubmitButton, addNewImgButton, closeNewPlaceButton, newPlaceFormContainer, newPlaceForm, newPlaceSubmitButton, profileName, profileProfession, profileNameInput, profileProfessionInput, cardListSelector} from "./const.js";
import { UserInfo } from "./userInfo.js";
import {initialCards, handleCardClick, Card, generateNewCards} from "./card.js";
import { Section } from "./section.js";
import { FormValidator } from "./formValidatior.js";

const popupWithFormProfile = new PopupWithForm(profileFormContainer, editProfileButton, closeProfileButton, profileForm, profileSubmitButton, overlay);
popupWithFormProfile.setEventListeners();

const userInfo = new UserInfo(profileName, profileProfession, profileNameInput, profileProfessionInput, profileSubmitButton);
userInfo.setEventListeners();

const editProfileFormValidator = new FormValidator({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}, document.querySelector('.popup__form'));

editProfileFormValidator.enableValidation();

const popupWithFormNewPLace = new PopupWithForm(newPlaceFormContainer, addNewImgButton, closeNewPlaceButton, newPlaceForm, newPlaceSubmitButton, overlay);
popupWithFormNewPLace.setEventListeners();

const newPlaceFormValidator = new FormValidator({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}, document.querySelector('.popup__form_new-place'));

newPlaceFormValidator.enableValidation();

const initialCardList = new Section({
  items: initialCards,
  renderer: (el) => {
    const card = new Card(el, handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
  }
}, cardListSelector);

initialCardList.render();

newPlaceSubmitButton.addEventListener('click', generateNewCards);

/*Agregé la opcion de cambiar la foto de perfil, 
aun que no viene en las indicaciones de la realizacion del proyecto, la utilizare posteriormente.

function editProfileImage(profileImageInput){
  if(profileImageInput.value === undefined || profileImageInput.value === "") {
    profileImageInput.value = './images/profile-pic.jpg'
    profileImage.src = profileImageInput.value;
  } else{
    profileImage.src = profileImageInput.value;
  }
};

function editProfaileValues(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileProfession.textContent = profileProfessionInput.value;
    editProfileImage(profileImageInput);
    profileNameInput.placeholder = "Name";
    profileProfessionInput.placeholder = "Profession";
    profileImageInput.placeholder = "Profile Image URL"
};
profileSubmitButton.addEventListener('click' , editProfaileValues);*/