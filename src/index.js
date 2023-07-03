import "./styles/index.css";
import closeButonSrc from "./images/Close-button.png";
import headerLogoSrc from "./images/Logo.svg";
import editButtonSrc from "./images/Edit-Button.svg";
import addButtonSrc from "./images/Add-Button.svg";
import { PopupWithForm } from "./components/popupWithForm.js"; 
import {overlay, profileFormContainer, editProfileButton, closeProfileButton, profileForm, profileSubmitButton, addNewImgButton, closeNewPlaceButton, newPlaceFormContainer, newPlaceForm, newPlaceSubmitButton, profileImageContainer, profileOverlay, profileImageEditCover, profilePictureFormContainer, closePopupProfileImageButton, profilePictureForm, profileImageSubmitButton, profilePicture, profileName, profileProfession, profilePictureInput, profileNameInput, profileProfessionInput, newCardNameInput, newCardLinkInput} from "./components/const.js";
import { Api } from "./components/api.js";
import { UserInfo } from "./components/userInfo.js";
import { UserPicture } from "./components/userPicture.js";
import { FormValidator } from "./components/formValidatior.js";


function renderInitialUserInfo(result) {
  profileName.textContent = result.name;
  profileProfession.textContent = result.about;
  profilePicture.src = result.avatar;
};

function changeButtonText(buttonSelector, newText) {
  buttonSelector.textContent = newText;
}

function restoreOriginalButtonText(buttonSelector, originalText) {
  buttonSelector.textContent = originalText;
}

const userApiInfo = new Api("https://around.nomoreparties.co/v1/web_es_05/users/me");
userApiInfo.getUserInfo();

newPlaceSubmitButton.addEventListener('click', () =>{
  const newCard = new Api("https://around.nomoreparties.co/v1/web_es_05/cards");
  newCard.postNewCard(newCardNameInput, newCardLinkInput);
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

const userProfilePicture = new UserPicture(profilePicture, profilePictureInput, profileImageSubmitButton)
userProfilePicture.setEventListeners();

const profilePictureFormValidator = new FormValidator({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}, document.querySelector('.popup__form_profile-picture'));

profilePictureFormValidator.enableValidation();

export {renderInitialUserInfo, changeButtonText, restoreOriginalButtonText}; 