const overlay = document.querySelector('.overlay');

const profileFormContainer = document.querySelector('.popup_edit-profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.popup__close-button_edit-profile');
const profileForm = document.getElementById("editProfileForm");
const profileSubmitButton = document.querySelector('.popup__button_edit-profile');

const addNewImgButton = document.querySelector('.profile__add-button-container');
const closeNewPlaceButton = document.querySelector('.popup__close-button_new-place');
const newPlaceForm = document.getElementById("newPlaceForm");
const newPlaceFormContainer = document.querySelector('.popup_new-place');
const newPlaceSubmitButton = document.querySelector('.popup__button_new-place');

const profileImageContainer = document.querySelector(".profile__image-container");
const profileOverlay = document.querySelector(".profile__image-overlay");
const profileImageEditCover = document.querySelector(".profile__image-edit");

const profilePictureFormContainer = document.querySelector('.popup_profile-picture');
const closePopupProfileImageButton = document.querySelector('.popup__close-button_profile-picture');
const profilePictureForm = document.getElementById("profilePictureForm");
const profileImageSubmitButton = document.querySelector('.popup__button_profile-picture');

const profilePicture = document.querySelector('.profile__image');
const profilePictureInput = document.querySelector('.popup__input_profile-picture');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileNameInput = document.querySelector('.popup__input_name');
const profileProfessionInput = document.querySelector('.popup__input_profession');

const newCardNameInput = document.querySelector('.popup__input_title');
const newCardLinkInput = document.querySelector('.popup__input_url');

const authorizationToken = "9ffaeb5f-3406-466e-a952-2ace02206b0c";
const cardListSelector = ".cards";

export {overlay, profileFormContainer, editProfileButton, closeProfileButton, profileForm, profileSubmitButton, addNewImgButton, closeNewPlaceButton, newPlaceFormContainer, newPlaceForm, newPlaceSubmitButton, profileImageContainer, profileOverlay, profileImageEditCover, profilePictureFormContainer, closePopupProfileImageButton, profilePictureForm, profileImageSubmitButton, profilePicture, profileName, profileProfession, profilePictureInput, profileNameInput, profileProfessionInput, newCardNameInput, newCardLinkInput, authorizationToken, cardListSelector};