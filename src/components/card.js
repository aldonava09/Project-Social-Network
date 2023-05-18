import { overlay } from "./const.js";
import { PopupWithImage } from "./popupWithImage.js";
import { Section } from "./section.js";
import saltLakeCityImage from "../images/wyomig.jpg";
import seattleImage from "../images/seattle.jpg";
import sanFranciscoImage from "../images/san-fransisco.jpg";
import miamiImage from "../images/miami.jpg";
import hollywoodImage from "../images/hollywood.jpg";
import newYorkImage from "../images/new-york.jpg";

const initialCards = [
    {
      name: 'Salt Lake City, Wyoming',
      link: saltLakeCityImage
    },
    {
      name: 'Seattle, Washington',
      link: seattleImage
    },
    {
      name: 'San Francisco, California',
      link: sanFranciscoImage
    },
    {
      name: 'Miami, Florida',
      link: miamiImage
    },
    {
      name: 'Hollywood, Los Angeles',
      link: hollywoodImage
    },
    {
      name: 'Nueva York, Nueva York',
      link: newYorkImage
    },
]; 

function handleCardClick(name, link) {
    const popup = new PopupWithImage(document.querySelector('.images-popup__item'));
    popup.open(link, name);

    const popupCloseButton = document.querySelector('.images-popup__item-close-button');
    
    popupCloseButton.addEventListener('click', () => {
        popup.close();
    });

    document.addEventListener('keydown', (evt) => {
        popup._handleEscClose(evt);
    });

    overlay.addEventListener('click', ()=> {
        popup.close();
    });
};

class Card {
    constructor(data, handleCardClick) {
      this.name = data.name;
      this.link = data.link;
      this.handleCardClick = handleCardClick;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector("#card-template")
        .content.querySelector(".cards__card")
        .cloneNode(true);
  
      return cardElement;
    }
  
    generateCard() {
      this.element = this._getTemplate();
      this._setEventListeners();
      this.element.querySelector(".cards__card-title").textContent = this.name;
      this.element.querySelector(".cards__card-image").src = this.link;
  
      return this.element;
    }
  
    likeButtonActive() {
      this.element
        .querySelector(".cards__card-like-button-container")
        .classList.toggle("cards__card-like-button-container_active");
    }
  
    deleteCard() {
      const card = this.element.closest(".cards__card");
      card.remove();
    }
  
    _setEventListeners() {
        this.element
            .querySelector(".cards__card-like-button-container")
            .addEventListener("click", () => {
            this.likeButtonActive();
        });
  
        this.element
            .querySelector(".cards__card-trash-button")
            .addEventListener("click", () => {
            this.deleteCard();
        });
  
        this.element
            .querySelector(".cards__card-image")
            .addEventListener("click", () => {
            this.handleCardClick(this.name, this.link);
        });
    }
};

function generateNewCards() {
    let newCardName = document.querySelector('.popup__input_title').value;
    let newCardLink = document.querySelector('.popup__input_url').value;
  
    let newCard = {
      name: newCardName,
      link: newCardLink
    };
  
    initialCards.push(newCard);
  
    function addNewCard(arr) {
        const newCard = new Card(arr[arr.length - 1], handleCardClick);
        const cardElement = newCard.generateCard();
        const section = new Section(
          {
            items: [cardElement],
            renderer: (item) => item
          },
          '.cards'
        );
        section.render();
      }      
  
    addNewCard(initialCards);
};

export {initialCards, handleCardClick, Card, generateNewCards};