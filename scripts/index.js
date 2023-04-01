const editProfileButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.profile__edit-form-close-button');
const profileFormContainer = document.querySelector('.profile__edit-form-container_hidden');
const overlay = document.querySelector('.overlay_hidden');

function editProfileOpen() {

    profileFormContainer.classList.toggle('profile__edit-form-container');
    overlay.classList.toggle('overlay');

}

editProfileButton.addEventListener("click" , editProfileOpen);
closeProfileButton.addEventListener("click" , editProfileOpen);

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileNameInput = document.querySelector('.profile__input-name');
const profileProfessionInput = document.querySelector('.profile__input-profession');


profileName.textContent = "Aldo Navarro"
profileProfession.textContent = "Programador"

const profileSubmitButton = document.querySelector('.profile__submit-button');


function editProfaileValues(evt) {

    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileProfession.textContent = profileProfessionInput.value;
    profileFormContainer.classList.toggle('profile__edit-form-container');
    overlay.classList.toggle('overlay');

}

profileSubmitButton.addEventListener("click" , editProfaileValues);

const addNewImgButton = document.querySelector('.profile__add-button-container');
const closeNewPlaceButton = document.querySelector('.profile__new-place-form-close-button');
const newPlaceFormContainer = document.querySelector('.profile__new-place-form-container_hidden');

function addNewImgOpen() {

    newPlaceFormContainer.classList.toggle('profile__new-place-form-container');
    overlay.classList.toggle('overlay');

}  

addNewImgButton.addEventListener("click", addNewImgOpen);
closeNewPlaceButton.addEventListener("click", addNewImgOpen);
const cardTitleInput = document.querySelector('.profile__new-place-input-title');
const cardLinkInput = document.querySelector('.profile__new-place-input-image-link');
const cards = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template").content;
const card = cardTemplate.querySelector(".cards__card").cloneNode(true);

const initialCards = [
    {
      name: "Nueva York, Nueva York",
      link: "../"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ]; 

