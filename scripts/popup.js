import { overlay } from "./const.js";

class Popup {
    constructor(popupSelector, overlay) {
      this._popup = popupSelector;
      this._overlay = overlay;
    }
  
    open() {
      this._popup.classList.add('popup_visible');
      this._overlay.classList.add('overlay-visible');
    }
  
    close() {
      this._popup.classList.remove('popup_visible');
      this._overlay.classList.remove('overlay-visible');
    }

    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        }
    }
  
    setEventListeners() {
      document.addEventListener('keydown', (evt) => {
        this._handleEscClose(evt);
      });
    }
};

class PopupWithImage extends Popup {
  constructor(popupSelector, overlay) {
    super(popupSelector, overlay);
    this._image = this._popup.querySelector('.images-popup__item-image');
    this._title = this._popup.querySelector('.images-popup__item-title');
  }
  
  open(link, title) {
    this._popup.classList.add('images-popup-item-visible')
    this._image.src = link;
    this._title.textContent = title;
    overlay.classList.add('overlay-visible');
  }

  close(){
    this._popup.classList.remove('images-popup-item-visible');
    overlay.classList.remove('overlay-visible');
  }
};

class PopupWithForm extends Popup {
  constructor(popupSelector, openButonSelector, closeButtonSelector, formSelector, SubmitButton, overlay) {
    super(popupSelector, overlay);
    this._openButton = openButonSelector;
    this._closeButton = closeButtonSelector;
    this._form = formSelector;
    this._submitButton = SubmitButton;
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  setEventListeners() {
    super.setEventListeners();

    this._openButton.addEventListener('click', () => {
      this.open();
      this._form.reset();
    });

    this._closeButton.addEventListener('click', () => {
      this.close();
      this._form.reset();
    });

    this._overlay.addEventListener('click', () => {
      this.close();
      this._form.reset();
    });

    this._submitButton.addEventListener('click', () => {
      this.close();
    });
  }
};

export {PopupWithImage, PopupWithForm};