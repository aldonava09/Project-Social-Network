import { overlay } from "./const.js";
import { PopupWithImage } from "./popupWithImage.js";
import { Section } from "./section.js";
import { cardListSelector } from "./const.js";

/*import saltLakeCityImage from "../images/wyomig.jpg";
import seattleImage from "../images/seattle.jpg";
import sanFranciscoImage from "../images/san-fransisco.jpg";
import miamiImage from "../images/miami.jpg";
import hollywoodImage from "../images/hollywood.jpg";
import newYorkImage from "../images/new-york.jpg";*/
import { Popup } from "./popup.js";

/*const initialCards = [
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
]; */

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

function handleDeleteCardClick(){
  const popupDelete = new Popup(document.querySelector('.popup_delete-card'), overlay);
  popupDelete.open();

  const popupDeleteCloseButton = document.querySelector('.popup__close-button_delete-card');
  const deleteCardButton = document.querySelector('.popup__button_delete-card');


  popupDeleteCloseButton.addEventListener('click', () => {
    popupDelete.close();
  });

  document.addEventListener('keydown', (evt) => {
    popupDelete._handleEscClose(evt);
  });

  overlay.addEventListener('click', ()=> {
    popupDelete.close();
  });

  deleteCardButton.addEventListener('click', (element)=>{
    /*const card = element
    card.remove();*/
  })
}

class Card {
    constructor(data, handleCardClick, handleDeleteCardClick) {
      this.name = data.name;
      this.link = data.link;
      this.id = data._id;
      this.handleCardClick = handleCardClick;
      this.handleDeleteCardClick = handleDeleteCardClick;
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
  
    /*deleteCard() {
      const card = this.element.closest(".cards__card");
      card.remove();
    }*/

    deleteCardPopup() {
      const popupDelete = new Popup(".popup_delete-card", overlay)
      popupDelete.setEventListeners();
    }

    verifyUserCard(){
      const trashCardButton = this.element.querySelector(".cards__card-trash-button")
      trashCardButton.classList.add("cards__card-trash-button_visible");
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
            this.handleDeleteCardClick(this.element.closest(".cards__card"));
        });
  
        this.element
            .querySelector(".cards__card-image")
            .addEventListener("click", () => {
            this.handleCardClick(this.name, this.link);
        });
    }
};

function renderCards(cardsArr){
  const initialCardList = new Section({
    items: cardsArr,
    renderer: (el) => {
      const card = new Card(el, handleCardClick, handleDeleteCardClick);
      const cardElement = card.generateCard();
      return cardElement;
    }
}, cardListSelector);
  
initialCardList.render();
}

function generateNewCards() {
    let newCardName = document.querySelector('.popup__input_title').value;
    let newCardLink = document.querySelector('.popup__input_url').value;
  
    let newCard = {
      name: newCardName,
      link: newCardLink
    };
  
    initialCards.push(newCard);
  
    function addNewCard(arr) {
        const newCard = new Card(arr[arr.length - 1], handleCardClick, handleDeleteCardClick);
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

export {handleCardClick, handleDeleteCardClick, Card, renderCards, generateNewCards};