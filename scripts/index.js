import{showInputError,  hideInputError, checkInputValidity, setEventListeners, enableValidation} from "./validate.js";

const editProfileButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.popup__close-button_edit-profile');
const profileFormContainer = document.querySelector('.popup_edit-profile');
const overlay = document.querySelector('.overlay');

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

editProfileButton.addEventListener('click' , editProfileOpen);
closeProfileButton.addEventListener('click' , editProfileOpen);


const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileNameInput = document.querySelector('.popup__input_name');
const profileProfessionInput = document.querySelector('.popup__input_profession');

profileName.textContent = 'Aldo Navarro';
profileProfession.textContent = 'Programador';
profileNameInput.value = profileName.textContent;
profileProfessionInput.value = profileProfession.textContent;

const profileSubmitButton = document.querySelector('.popup__button_edit-profile');

function editProfaileValues(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileProfession.textContent = profileProfessionInput.value;
    profileNameInput.placeholder = "Name";
    profileProfessionInput.placeholder = "Profession";
}

profileSubmitButton.addEventListener('click' , editProfaileValues);


const addNewImgButton = document.querySelector('.profile__add-button-container');
const closeNewPlaceButton = document.querySelector('.popup__close-button_new-place');
const newPlaceFormContainer = document.querySelector('.popup_new-place');

function addNewImgOpen(evt) {
    evt.preventDefault()
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

const cardTitleInput = document.querySelector('.popup__input_title');
const cardLinkInput = document.querySelector('.popup__input_url');
const newPlaceSubmitButton = document.querySelector('.popup__button_new-place');
const cards = document.querySelector('.cards');
let likeButton = document.querySelectorAll('.cards__card-like-button-container');
let deleteButton = document.querySelectorAll('.cards__card-trash-button');

const initialCards = [
  {
    name: 'Salt Lake City, Wyoming',
    link: './images/wyomig.jpg'
  },
  {
    name: 'Seattle, Washington',
    link: './images/seattle.jpg'
  },
  {
    name: 'San Francisco, California',
    link: './images/san-fransisco.jpg'
  },
  {
    name: 'Miami, Florida',
    link: './images/miami.jpg'
  },
  {
    name: 'Hollywood, Los Angeles',
    link: './images/hollywood.jpg'
  },
  {
    name: 'Nueva York, Nueva York',
    link: './images/new-york.jpg'
  },
]; 

initialCards.forEach(el =>{
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.cards__card').cloneNode(true);
  cardElement.querySelector('.cards__card-title').textContent = el.name;
  cardElement.querySelector('.cards__card-image').src = el.link;
  cards.prepend(cardElement);
  
  function popUp() {
    const imagesPopUp = document.querySelector('.images-popup');
    const imagePopUpTemplate = document.querySelector('#images-popup__template').content;
    const imagePopUpItem = imagePopUpTemplate.querySelector('.images-popup__item').cloneNode(true);
    let popUpCloseButton = imagePopUpItem.querySelector('.images-popup__item-close-button');
    imagePopUpItem.querySelector('.images-popup__item-image').src = el.link;;
    imagePopUpItem.querySelector('.images-popup__item-title').textContent = el.name;
    imagesPopUp.prepend(imagePopUpItem);
    overlay.classList.toggle('overlay-visible');
    imagePopUpItem.classList.toggle('images-popup-item-visible');

    popUpCloseButton.addEventListener('click', function closePopUp(){
      overlay.classList.remove('overlay-visible');
      imagePopUpItem.remove();
    });

    overlay.addEventListener('click', function closePopUp(){
      overlay.classList.remove('overlay-visible');
      imagePopUpItem.remove();
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.key === "Escape") {
        overlay.classList.remove('overlay-visible');
        imagePopUpItem.remove();
      }});
  }

  cardElement.querySelector('.cards__card-image').addEventListener("click", popUp);

  likeButton = document.querySelectorAll('.cards__card-like-button-container');

  likeButton.forEach(el =>{
    el.addEventListener('click', likeButtonActive);
  });

  deleteButton = document.querySelectorAll('.cards__card-trash-button');

  deleteButton.forEach(el => {
    el.addEventListener('click', () => deleteCard(el));
  });
})

function likeButtonActive(evt) {
  evt.target.classList.toggle('cards__card-like-button-container_active');
}

likeButton.forEach(el =>{ 
  el.addEventListener('click', likeButtonActive);
});

function deleteCard(el) {
  const card = el.closest('.cards__card');
  card.remove();
};

deleteButton.forEach(el => {
  el.addEventListener("click", () => deleteCard(el));
});

function addCards () { 
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.cards__card').cloneNode(true);
    cardElement.querySelector('.cards__card-title').textContent = cardTitleInput.value;
    cardElement.querySelector('.cards__card-image').src = cardLinkInput.value;
    cards.prepend(cardElement);

    function popUp() {
      const imagesPopUp = document.querySelector('.images-popup');
      const imagePopUpTemplate = document.querySelector('#images-popup__template').content;
      const imagePopUpItem = imagePopUpTemplate.querySelector('.images-popup__item').cloneNode(true);
      let popUpCloseButton = imagePopUpItem.querySelector('.images-popup__item-close-button');
      imagePopUpItem.querySelector('.images-popup__item-image').src = cardLinkInput.value;
      imagePopUpItem.querySelector('.images-popup__item-title').textContent = cardTitleInput.value;
      imagesPopUp.prepend(imagePopUpItem);
      overlay.classList.toggle('overlay-visible');
      imagePopUpItem.classList.toggle('images-popup-item-visible');
  
      popUpCloseButton.addEventListener('click', function closePopUp(){
        overlay.classList.remove('overlay-visible');
        imagePopUpItem.remove();
      });

      overlay.addEventListener('click', function closePopUp(){
        overlay.classList.remove('overlay-visible');
        imagePopUpItem.remove();
      });

      document.addEventListener('keydown', function (evt) {
        if (evt.key === "Escape") {
          overlay.classList.remove('overlay-visible');
          imagePopUpItem.remove();
        }});
    }

    cardElement.querySelector('.cards__card-image').addEventListener("click", popUp);
    
    likeButton = document.querySelectorAll('.cards__card-like-button-container');

    likeButton.forEach(el =>{
      el.addEventListener('click', likeButtonActive);
    });

    deleteButton = document.querySelectorAll('.cards__card-trash-button');

    deleteButton.forEach(el => {
      el.addEventListener('click', () => deleteCard(el));
    });
}

newPlaceSubmitButton.addEventListener('click', addCards);