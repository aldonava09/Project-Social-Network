import {overlay} from "./index.js";

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

class Card {
    constructor(data){
        this.name = data.name;
        this.link = data.link;
    }

    _getTemplate(){
        const cardElement = document.querySelector("#card-template").content
        .querySelector('.cards__card').cloneNode(true);

        return cardElement;
    }

    generateCard(){
        this.element = this._getTemplate();
        this._setEventListeners();
        this.element.querySelector('.cards__card-title').textContent = this.name;
        this.element.querySelector('.cards__card-image').src = this.link;

        return this.element;
    }
    
    generatePopUp(){
        const imagePopUp = document.querySelector('#images-popup__template').content
        .querySelector('.images-popup__item').cloneNode(true);

        return  imagePopUp;
    }

    openPopUp() {
        let imagePopUpItem = this.generatePopUp()
        let popUpCloseButton = imagePopUpItem.querySelector('.images-popup__item-close-button');
        imagePopUpItem.querySelector('.images-popup__item-image').src = this.link;;
        imagePopUpItem.querySelector('.images-popup__item-title').textContent = this.name;
        imagesPopUpContainer.prepend(imagePopUpItem);
        overlay.classList.add('overlay-visible');
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

    likeButtonActive() {
        this.element.querySelector('.cards__card-like-button-container').classList.toggle('cards__card-like-button-container_active');
    }

    deleteCard() {
        const card = this.element.closest('.cards__card');
        card.remove();
    };

    _setEventListeners() {
        this.element.querySelector('.cards__card-image').addEventListener("click", () => {
          this.openPopUp();
        });

        this.element.querySelector('.cards__card-like-button-container').addEventListener('click', () => {
            this.likeButtonActive();
        });
        
        this.element.querySelector('.cards__card-trash-button').addEventListener('click', () => {
            this.deleteCard();
        });
    }
};
  
function addCards(){
    initialCards.forEach((el)=>{
        const card = new Card(el);
        const cardElement = card.generateCard();
        document.querySelector('.cards').prepend(cardElement);
    });
};
  
const imagesPopUpContainer = document.querySelector('.images-popup');
  
addCards();

const newPlaceSubmitButton = document.querySelector('.popup__button_new-place');
  
newPlaceSubmitButton.addEventListener('click', function generateNewCards(){
    let newCardName = document.querySelector('.popup__input_title').value;
    let newCradLink = document.querySelector('.popup__input_url').value;
  
    let newCard = {
      name: newCardName,
      link: newCradLink
    };
  
    initialCards.push(newCard);
  
    function addNewCard(arr){
        arr[arr.length -1] = new Card(arr[arr.length -1]);
         const cardElement = arr[arr.length -1].generateCard();
        document.querySelector('.cards').prepend(cardElement);
    };
  
    addNewCard(initialCards);
});

export {newPlaceSubmitButton};