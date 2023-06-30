import "./styles/index.css";
import closeButonSrc from "./images/Close-button.png";
import headerLogoSrc from "./images/Logo.svg";
import profileImageSrc from "./images/profile-pic.jpg";
import editButtonSrc from "./images/Edit-Button.svg";
import addButtonSrc from "./images/Add-Button.svg";
import { PopupWithForm } from "./components/popupWithForm.js"; 
import {overlay, profileFormContainer, editProfileButton, closeProfileButton, profileForm, profileSubmitButton, addNewImgButton, closeNewPlaceButton, newPlaceFormContainer, newPlaceForm, newPlaceSubmitButton, profileImageContainer, profileOverlay, profileImageEditCover, profilePictureFormContainer, closePopupProfileImageButton, profilePictureForm, profileImageSubmitButton, profileName, profileProfession, profileNameInput, profileProfessionInput, cardListSelector} from "./components/const.js";
import { Api } from "./components/api.js";
import { UserInfo } from "./components/userInfo.js";
import { Popup } from "./components/popup.js";
import {handleCardClick, handleDeleteCardClick, Card, generateNewCards} from "./components/card.js";
import { Section } from "./components/section.js";
import { FormValidator } from "./components/formValidatior.js";

const userApiInfo = new Api("https://around.nomoreparties.co/v1/web_es_05/users/me");
userApiInfo.getUserInfo();

newPlaceSubmitButton.addEventListener('click', () =>{
  const newCard = new Api("https://around.nomoreparties.co/v1/web_es_05/cards");
  newCard.postNewCard();
});

profileImageContainer.addEventListener("mouseover", ()=>{
  profileOverlay.classList.add("profile__image-overlay_visible");
  profileImageEditCover.classList.add("profile__image-edit_visible")
});

profileImageContainer.addEventListener("mouseout", ()=>{
  profileOverlay.classList.remove("profile__image-overlay_visible");
  profileImageEditCover.classList.remove("profile__image-edit_visible")
});

const initialCards = new Api("https://around.nomoreparties.co/v1/web_es_05/cards");
initialCards.getInitialCards();

const profileEditCloseButtonImage = document.getElementById("profileEditCloseButton");
profileEditCloseButtonImage.src = closeButonSrc;

const newPlaceCloseButtonImage = document.getElementById("newPlaceCloseButton");
newPlaceCloseButtonImage.src = closeButonSrc;

const headerLogoImage = document.getElementById("headerLogo");
headerLogoImage.src = headerLogoSrc;

const profileImage = document.getElementById("profileImage");
profileImage.src = profileImageSrc;

const editButtonImage = document.getElementById("editButon");
editButtonImage.src = editButtonSrc;

const addButtonImage = document.getElementById("addButton");
addButtonImage.src = addButtonSrc;

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

const popupWithFormProfilePicture = new PopupWithForm(profilePictureFormContainer, profileImageContainer, closePopupProfileImageButton, profilePictureForm, profileImageSubmitButton, overlay);
popupWithFormProfilePicture.setEventListeners();

const profilePictureFormValidator = new FormValidator({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}, document.querySelector('.popup__form_profile-picture'));

profilePictureFormValidator.enableValidation();

/*const initialCardList = new Section({
    items: initialCards,
    renderer: (el) => {
      const card = new Card(el, handleCardClick, handleDeleteCardClick);
      const cardElement = card.generateCard();
      return cardElement;
    }
}, cardListSelector);
  
initialCardList.render();

renderCards();*/


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

export {Api}; 