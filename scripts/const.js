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

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileImage = document.querySelector('.profile__image');
const profileNameInput = document.querySelector('.popup__input_name');
const profileProfessionInput = document.querySelector('.popup__input_profession');

profileName.textContent = 'Aldo Navarro';
profileProfession.textContent = 'Programador';
profileNameInput.value = profileName.textContent;
profileProfessionInput.value = profileProfession.textContent;
profileImage.src = './images/profile-pic.jpg';

const cardListSelector = ".cards";

export {overlay, profileFormContainer, editProfileButton, closeProfileButton, profileForm, profileSubmitButton, addNewImgButton, closeNewPlaceButton, newPlaceFormContainer, newPlaceForm, newPlaceSubmitButton, profileName, profileProfession, profileNameInput, profileProfessionInput, cardListSelector};