const editProfileButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.edit-profile__close-button');
const profileFormContainer = document.querySelector('.edit-profile');
const overlay = document.querySelector('.overlay');

function editProfileOpen() {
    profileFormContainer.classList.toggle('edit-profile-visible');
    overlay.classList.toggle('overlay-visible');
}

editProfileButton.addEventListener('click' , editProfileOpen);
closeProfileButton.addEventListener('click' , editProfileOpen);

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileNameInput = document.querySelector('.edit-profile__form-input-name');
const profileProfessionInput = document.querySelector('.edit-profile__form-input-profession');

profileName.textContent = 'Aldo Navarro'
profileProfession.textContent = 'Programador'

const profileSubmitButton = document.querySelector('.edit-profile__form-submit-button');

function editProfaileValues(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileProfession.textContent = profileProfessionInput.value;
}

profileSubmitButton.addEventListener('click' , editProfaileValues);

const addNewImgButton = document.querySelector('.profile__add-button-container');
const closeNewPlaceButton = document.querySelector('.new-place__close-button');
const newPlaceFormContainer = document.querySelector('.new-place');

function addNewImgOpen() {
    newPlaceFormContainer.classList.toggle('new-place-visible');
    overlay.classList.toggle('overlay-visible');
}  

addNewImgButton.addEventListener('click', addNewImgOpen);
closeNewPlaceButton.addEventListener('click', addNewImgOpen);

const cardTitleInput = document.querySelector('.new-place__form-input-title');
const cardLinkInput = document.querySelector('.new-place__form-input-image-link');
const newPlaceSubmitButton = document.querySelector('.new-place__form-submit-button');
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
    overlay.classList.toggle('overlay-visible');
    imagePopUp.classList.toggle('images-popup');

    popUpCloseButton.addEventListener('click', function closePopUp(){
      overlay.classList.remove('overlay-visible');
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
      overlay.classList.toggle('overlay-visible');
      imagePopUp.classList.toggle('images-popup');
  
      popUpCloseButton.addEventListener('click', function closePopUp(){
        overlay.classList.remove('overlay-visible');
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


