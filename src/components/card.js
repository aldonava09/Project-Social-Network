import { overlay } from "./const.js";
import { PopupWithImage } from "./popupWithImage.js";
import { Section } from "./section.js";
import { cardListSelector } from "./const.js";
import { Api } from "./api.js";
import { Popup } from "./popup.js";
import { changeButtonText, restoreOriginalButtonText } from "../index.js";
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
    const originalButtonText = deleteCardButton.textContent;
  
    changeButtonText(deleteCardButton, 'Deleting...');

    const api = new Api(`https://around.nomoreparties.co/v1/web_es_05/cards/${this.id}`);
    await api.deleteCard();
    card.remove();
    popupDelete.close();

    restoreOriginalButtonText(deleteCardButton, originalButtonText);
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
      this.verifyLike();

      return this.element;
    }

    verifyUserCard(){
      if (this.ownerName === document.querySelector(".profile__name").textContent) {
        this.element.querySelector(".cards__card-trash-button")
          .classList.add("cards__card-trash-button_visible");
      }
    }

    verifyLike(){
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
      let currentCount = parseInt(likeCounter.textContent);
      const likeCard = new Api(`https://around.nomoreparties.co/v1/web_es_05/cards/likes/${this.id}`);

        if (likeButton.classList.contains("cards__card-like-button_active")) {
          likeCard.likeCard();
          likeCounter.textContent = currentCount + 1;
        } else {
          likeCard.deleteLike();
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

function renderNewCards(cardsArr){
  const initialCardList = new Section({
    items: cardsArr,
    renderer: (el) => {
      const card = new Card(el, handleCardClick, handleDeleteCardClick);
      const cardElement = card.generateCard();
      return cardElement;

    }
  }, cardListSelector);
    
  initialCardList.renderNewItem();
}

function generateNewCards(newCardObj) {
  const newCardsArray = [];
  newCardsArray.push(newCardObj);
  renderNewCards([newCardObj]);
};

export {handleCardClick, handleDeleteCardClick, Card, renderCards, generateNewCards};