import { profileName, profileProfession, profilePicture, newCardNameInput, newCardLinkInput} from "./const.js"
import { renderCards, generateNewCards } from "./card.js"

class Api {
    constructor(options){
        this.options = options
    };
  
    getUserInfo() {
        return fetch(this.options, {
            headers: {
                authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c"
              }
        })
        .then(res => {
          if(res.ok){
            return res.json();
          } 
          return Promise.reject(`Error: ${res.status}`); 
        })
        .then((result)=>{
          profileName.textContent = result.name;
          profileProfession.textContent = result.about;
          profilePicture.src = result.avatar;
        })
        .catch((err)=>{
          console.log(err);
        }); 
    };
    
    getInitialCards() {
        return fetch(this.options, {
          headers: {
                authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c"
          }
        })
        .then(res => {
          if(res.ok){
            return res.json();
          } 
          return Promise.reject(`Error: ${res.status}`); 
        })
        .then((result)=>{
            renderCards(result);
        })
        .catch((err)=>{
          console.log(err);
        }); 
    };

    postNewCard(){
        const submitButton = document.getElementById('newPlaceSubmit');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Saving...';

        return fetch(this.options, {
            method: "POST",
            headers: {
              authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: newCardNameInput.value,
              link: newCardLinkInput.value
            })
        })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Error: ${res.status}`);
        })
        .then((result) => {
          generateNewCards(result)
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          submitButton.textContent = originalButtonText;
        });
    
    };

    deleteCard(){
      return fetch(this.options, {
          method: "DELETE",
          headers: {
            authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c",
          },
      })
      .then((res)=>{
        if(res.ok){
            return res.ok ;
        } 
        return Promise.reject(`Error: ${res.status}`); 
      })
      .catch ((error) => {
        console.error(error);
      });
    };

    likeCard(){
        return fetch(this.options, {
          method: "PUT",
          headers: {
            authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c"
        },
      })
      .then((res)=>{
          if(res.ok){
              return res.json();
          } 
          return Promise.reject(`Error: ${res.status}`); 
      })
      .catch ((error) => {
          console.error(error);
      });
    };

    deleteLike(){
        return fetch(this.options, {
          method: "DELETE",
          headers: {
            authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c"
        },
      })
      .then((res)=>{
          if(res.ok){
              return res.json();
          } 
          return Promise.reject(`Error: ${res.status}`); 
      })
      .catch ((error) => {
          console.error(error);
      });
    };
};

export {Api};