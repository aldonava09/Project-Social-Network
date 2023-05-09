const profileFormContainer = document.querySelector('.popup_edit-profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.popup__close-button_edit-profile');
const overlay = document.querySelector('.overlay');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileImage = document.querySelector('.profile__image');
const profileNameInput = document.querySelector('.popup__input_name');
const profileProfessionInput = document.querySelector('.popup__input_profession');
const profileImageInput = document.querySelector('.popup__input_profile-image');

profileName.textContent = 'Aldo Navarro';
profileProfession.textContent = 'Programador';
profileNameInput.value = profileName.textContent;
profileProfessionInput.value = profileProfession.textContent;
profileImage.src = './images/profile-pic.jpg'

const profileSubmitButton = document.querySelector('.popup__button_edit-profile');

/*Agregé la opcion de cambiar la foto de perfil, 
aun que no viene en las indicaciones de la realizacion del proyecto. */

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

profileSubmitButton.addEventListener('click' , editProfaileValues);

const addNewImgButton = document.querySelector('.profile__add-button-container');
const closeNewPlaceButton = document.querySelector('.popup__close-button_new-place');
const newPlaceFormContainer = document.querySelector('.popup_new-place');

export {profileFormContainer, editProfileButton, closeProfileButton, overlay, addNewImgButton, closeNewPlaceButton, newPlaceFormContainer, profileSubmitButton};