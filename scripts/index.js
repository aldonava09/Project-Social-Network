const editProfileButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.profile__edit-form-close-button');
const profileFormContainer = document.querySelector('.profile__edit-form-container_hidden');
const overlay = document.querySelector('.overlay_hidden');

function editProfileOpen() {
    profileFormContainer.classList.toggle('profile__edit-form-container');
    overlay.classList.toggle('overlay');
}

editProfileButton.addEventListener('click' , editProfileOpen);
closeProfileButton.addEventListener('click' , editProfileOpen);

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileNameInput = document.querySelector('.profile__input-name');
const profileProfessionInput = document.querySelector('.profile__input-profession');

profileName.textContent = 'Aldo Navarro'
profileProfession.textContent = 'Programador'

const profileSubmitButton = document.querySelector('.profile__submit-button');

function editProfaileValues(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileProfession.textContent = profileProfessionInput.value;
    profileFormContainer.classList.toggle('profile__edit-form-container');
    overlay.classList.toggle('overlay');
}

profileSubmitButton.addEventListener('click' , editProfaileValues);

const addNewImgButton = document.querySelector('.profile__add-button-container');
const closeNewPlaceButton = document.querySelector('.profile__new-place-form-close-button');
const newPlaceFormContainer = document.querySelector('.profile__new-place-form-container_hidden');

function addNewImgOpen() {
    newPlaceFormContainer.classList.toggle('profile__new-place-form-container');
    overlay.classList.toggle('overlay');
}  

addNewImgButton.addEventListener('click', addNewImgOpen);
closeNewPlaceButton.addEventListener('click', addNewImgOpen);

const cardTitleInput = document.querySelector('.profile__new-place-input-title');
const cardLinkInput = document.querySelector('.profile__new-place-input-image-link');
const newPlaceSubmitButton = document.querySelector('.profile__new-place-submit-button');
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
    const imagesPopUpContainer = document.querySelector('.images-popup__container');
    const imagePopUpTemplate = document.querySelector('#images-popup__template').content;
    const imagePopUp = imagePopUpTemplate.querySelector('.images-popup-hidden').cloneNode(true);
    let popUpCloseButton = imagePopUp.querySelector('.images-popup__close-button');
    imagePopUp.querySelector('.images-popup__image').src = el.link;;
    imagePopUp.querySelector('.images-popup__title').textContent = el.name;
    imagesPopUpContainer.prepend(imagePopUp);
    overlay.classList.toggle('overlay');
    imagePopUp.classList.toggle('images-popup');

    popUpCloseButton.addEventListener('click', function closePopUp(){
      overlay.classList.remove('overlay');
      imagePopUp.remove();
    });
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
      const imagesPopUpContainer = document.querySelector('.images-popup__container');
      const imagePopUpTemplate = document.querySelector('#images-popup__template').content;
      const imagePopUp = imagePopUpTemplate.querySelector('.images-popup-hidden').cloneNode(true);
      let popUpCloseButton = imagePopUp.querySelector('.images-popup__close-button');
      imagePopUp.querySelector('.images-popup__image').src = cardLinkInput.value;
      imagePopUp.querySelector('.images-popup__title').textContent = cardTitleInput.value;
      imagesPopUpContainer.prepend(imagePopUp);
      overlay.classList.toggle('overlay');
      imagePopUp.classList.toggle('images-popup');
  
      popUpCloseButton.addEventListener('click', function closePopUp(){
        overlay.classList.remove('overlay');
        imagePopUp.remove();
      });
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


