import { newCardLinkInput, overlay } from "./const.js";
import { PopupWithImage } from "./popupWithImage.js";
import { Section } from "./section.js";
import { cardListSelector } from "./const.js";
import { Api } from "./api.js";
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

function handleDeleteCardClick(element){
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

  deleteCardButton.addEventListener('click', async () => {
    const card = element.closest(".cards__card");
    await fetch(`https://around.nomoreparties.co/v1/web_es_05/cards/${this.id}`, {
      method: "DELETE",
      headers: {
        authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c",
      },
    })
    .then((res)=>{
      if(res.status === 200){
        card.remove();
        popupDelete.close();
        console.log("Tarjeta borrada");;
      } 
      return Promise.reject(`Error: ${res.status}`); 
    })
    .catch((err)=>{
      const error = err
    })
  });
}

class Card {
    constructor(data, handleCardClick, handleDeleteCardClick) {
      this.name = data.name;
      this.link = data.link;
      this.id = data._id;
      this.likes = data.likes;
      this.ownerName = data.owner.name;
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
      this.element.querySelector(".cards__card-like-counter").textContent = this.likes.length;
      this.verifyUserCard();
      this.hasLike();

      return this.element;
    }

    verifyUserCard(){
      if (this.ownerName === document.querySelector(".profile__name").textContent) {
        this.element.querySelector(".cards__card-trash-button")
          .classList.add("cards__card-trash-button_visible");
      }
    }

    hasLike(){
      const isLiked = this.likes.some(like => like.name === document.querySelector(".profile__name").textContent);
      if (isLiked) {
        this.element.querySelector(".cards__card-like-button")
          .classList.add("cards__card-like-button_active");
      }
    }
  
    likeButtonActive() {
      this.element
        .querySelector(".cards__card-like-button")
        .classList.toggle("cards__card-like-button_active");
    }

    deleteCardPopup() {
      const popupDelete = new Popup(".popup_delete-card", overlay)
      popupDelete.setEventListeners();
    }

    likeAndDislikeCard(){
      const likeButton = this.element.querySelector(".cards__card-like-button");
      const likeCounter = this.element.querySelector(".cards__card-like-counter");

        if (likeButton.classList.contains("cards__card-like-button_active")) {
          const likeCard = new Api(`https://around.nomoreparties.co/v1/web_es_05/cards/likes/${this.id}`);
          likeCard.likeCard();
          let currentCount = parseInt(likeCounter.textContent);
          likeCounter.textContent = currentCount + 1;
        } else {
          const dislikeCard = new Api(`https://around.nomoreparties.co/v1/web_es_05/cards/likes/${this.id}`);
          dislikeCard.deleteLike();
          let currentCount = parseInt(likeCounter.textContent);
          likeCounter.textContent = currentCount - 1;
        }
    }

    _setEventListeners() {
        this.element
            .querySelector(".cards__card-like-button")
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

        this.element
            .querySelector(".cards__card-like-button")
            .addEventListener("click", () =>{ 
            this.likeAndDislikeCard();
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

function generateNewCards(newCardObj) {
  const newCardsArray = [];

  /*let newCardName = newCardNameValue.value;
  let newCardLink = newCardLinkValue.value;

  let newCard = {
    name: newCardName,
    link: newCardLink,
    likes: [],
    owner: {
      name: document.querySelector(".profile__name").textContent
    }
  };*/

  newCardsArray.push(newCardObj);

  renderCards(newCardsArray);
}

/*
function generateNewCards(newCardNameValue, newCardLinkValue) {
  const newCardsArray = [];

  let newCardName = newCardNameValue.value;
  let newCardLink = newCardLinkValue.value;

  let newCard = {
    name: newCardName,
    link: newCardLink
  };

  newCardsArray.push(newCard);

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

  renderCards(newCardsArray);
}*/
  /*function addNewCard(arr) {
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
  
  addNewCard(cardsArray);
} */
/*function renderLastCard(cardsArr) {
  const lastCard = cardsArr[cardsArr.length - 1]; // Get the last card object from the array

  const cardListElement = document.querySelector(cardListSelector); // Get the card list element

  const card = new Card(lastCard, handleCardClick, handleDeleteCardClick); // Create a Card instance with the last card object
  const cardElement = card.generateCard(); // Generate the card element for the last card

  cardListElement.appendChild(cardElement); // Append the last card element to the card list
}*/
/*
function addNewCard(arr){
  const initialCardList = new Section({
    items: arr,
    renderer: (arr) => {
      const card = new Card(arr[arr.length - 1], handleCardClick, handleDeleteCardClick);
      const cardElement = card.generateCard();
      return cardElement;
    }
}, cardListSelector);
  
initialCardList.render();
}*/
/*
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
};     
/*
function addNewCard(cardsArr){
  const newCardList = new Section({
    items: cardsArr,
    renderer: (el) => {
      const card = new Card(arr[arr.length - 1], handleCardClick, handleDeleteCardClick);
      const cardElement = card.generateCard();
      return cardElement;
    }
}, cardListSelector);
  
initialCardList.render();
}*/

/*async function generateNewCards() {
  const newCard = new Api("https://around.nomoreparties.co/v1/web_es_05/cards");
  await newCard.postNewCard();
  newCard.getNewCard();
};*/

/*function generateNewCards() {
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

    <img class="images-popup__item-image" src="https://www.bunko.pet/__export/1640549497167/sites/debate/img/2021/12/26/50_ideas_de_nombres_para_perros_de_raza_dachshund_para_machos_y_hembras.jpg_423682103.jpg" alt="images-popup">
};*/



// lista de pendientes que se acutualice el contador, agregar la nueva tarjeta

export {handleCardClick, handleDeleteCardClick, Card, renderCards, generateNewCards};