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

export {Popup};