import { profileName, profileProfession, newCardNameInput, newCardLinkInput} from "./const.js"
import { renderCards, generateNewCards } from "./card.js"


class Api {
    constructor(options){
        this.options = options
    }
  
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
    }

    postNewCard(){
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
          console.log(result); // Generar todas las tarjetas nuevamente con la función generateNewCards
          return this.getInitialCards(); // Realizar una solicitud GET de las tarjetas actualizadas
        })
        .then((result) => {
          const lastCard = result[result.length - 1]; // Obtener la última tarjeta del resultado
          renderCards([lastCard]); // Renderizar solo la última tarjeta
        })
        .catch((error) => {
          console.error(error);
        });
      }

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
    }

    getNewCard(){
        return fetch("https://around.nomoreparties.co/v1/web_es_05/cards", {
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
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        }); 
    }

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
    }

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
    }
}

export {Api};