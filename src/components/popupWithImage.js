import { Popup } from "./popup.js";
import { overlay } from "./const.js";

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

export {PopupWithImage};