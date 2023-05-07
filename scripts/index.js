import { Card } from "./card.js";

export const profileFormContainer = document.querySelector('.popup_edit-profile');
export const editProfileButton = document.querySelector('.profile__edit-button');
export const closeProfileButton = document.querySelector('.popup__close-button_edit-profile');
export const overlay = document.querySelector('.overlay');

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

export const addNewImgButton = document.querySelector('.profile__add-button-container');
export const closeNewPlaceButton = document.querySelector('.popup__close-button_new-place');
export const newPlaceFormContainer = document.querySelector('.popup_new-place');

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

function addCrads(){
  initialCards.forEach((el)=>{
      const card = new Card(el);
      const cardElement = card.generateCard();
      document.querySelector('.cards').prepend(cardElement);
  });
};

export const imagesPopUpContainer = document.querySelector('.images-popup');

addCrads();

const newPlaceSubmitButton = document.querySelector('.popup__button_new-place');

newPlaceSubmitButton.addEventListener('click', function generateNewCards(){
    let newCardName = document.querySelector('.popup__input_title').value;
    let newCradLink = document.querySelector('.popup__input_url').value;

    let newCard = {
        name: newCardName,
        link: newCradLink
    };

    initialCards.push(newCard);

    function addNewCrad(arr){
      arr[arr.length -1] = new Card(arr[arr.length -1]);
      const cardElement = arr[arr.length -1].generateCard();
      document.querySelector('.cards').prepend(cardElement);
    };

    addNewCrad(initialCards);
});