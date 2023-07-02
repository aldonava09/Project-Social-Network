import { profileName, profileProfession, profilePicture, authorizationToken} from "./const.js"
import { renderCards, generateNewCards } from "./card.js"
import { renderInitialUserInfo } from "../index.js"
/*class Api {
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
};*/

class Api {
  constructor(options) {
    this.options = options;
    this.headers = {
      authorization: authorizationToken,
      "Content-Type": "application/json",
    };
  }

  fetchData(url, method = "GET", body = null) {
    const requestOptions = {
      method: method,
      headers: this.headers,
    };

    if (body) {
      requestOptions.body = JSON.stringify(body);
    }

    return fetch(url, requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getUserInfo() {
    return this.fetchData(this.options)
      .then((result) => {
        renderInitialUserInfo(result);
      });
  }

  getInitialCards() {
    return this.fetchData(this.options)
      .then((result) => {
        renderCards(result);
      });
  }

  postNewCard(newCardNameInput, newCardLinkInput) {
    const submitButton = document.getElementById("newPlaceSubmit");
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = "Saving...";

    const body = {
      name: newCardNameInput.value,
      link: newCardLinkInput.value,
    };

    return this.fetchData(this.options, "POST", body)
      .then((result) => {
        generateNewCards(result);
      })
      .finally(() => {
        submitButton.textContent = originalButtonText;
      });
  }

  deleteCard() {
    return this.fetchData(this.options, "DELETE")
      .then((res) => {
        if (res.ok) {
          return res.ok;
        }
        return Promise.reject(`Error: ${res.status}`);
      });
  }

  likeCard() {
    return this.fetchData(this.options, "PUT")
      .then((result) => {
        return result;
      });
  }

  deleteLike() {
    return this.fetchData(this.options, "DELETE")
      .then((result) => {
        return result;
      });
  }
}

export {Api};