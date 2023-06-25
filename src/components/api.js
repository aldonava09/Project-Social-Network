import { profileName, profileProfession} from "./const.js"
import { renderCards } from "./card.js"

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
}

export {Api};