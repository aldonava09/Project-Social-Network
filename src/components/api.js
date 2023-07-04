import { authorizationToken } from "./const.js"

class Api {
  constructor(options) {
    this.options = options
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

  getUserInfo(endPoint) {
    return this.fetchData(`${this.options}/${endPoint}`)
      .then((result) => {
        return result;
      });
  }

  editUserInfo(profileNameInput, profileProfessionInput, endPoint) {
    const body = {
        name: profileNameInput.value,
        about: profileProfessionInput.value
    };

    return this.fetchData(`${this.options}/${endPoint}`, "PATCH", body)
      .then((result) => {
        return result;
    });
  }

  editUserPicture(profilePictureInput, endPoint) {
    const body = {
        avatar: profilePictureInput.value,
    };

    return this.fetchData(`${this.options}/${endPoint}`, "PATCH", body)
      .then((result) => {
        return result;
    });
  }

  getInitialCards(endPoint) {
    return this.fetchData(`${this.options}/${endPoint}`)
      .then((result) => {
        return result;
      });
  }

  postNewCard(newCardNameInput, newCardLinkInput, endPoint) {
    const body = {
      name: newCardNameInput.value,
      link: newCardLinkInput.value,
    };

    return this.fetchData(`${this.options}/${endPoint}`, "POST", body)
      .then((result) => {
        return result;
      })
  }

  deleteCard(endPoint) {
    return this.fetchData(`${this.options}/${endPoint}`, "DELETE")
    .then((result) => {
      return result;
    });
  }

  likeCard(endPoint) {
    return this.fetchData(`${this.options}/${endPoint}`, "PUT")
      .then((result) => {
        return result;
      });
  }

  deleteLike(endPoint) {
    return this.fetchData(`${this.options}/${endPoint}`, "DELETE")
      .then((result) => {
        return result;
      });
  }
}

const apiInstance = new Api("https://around.nomoreparties.co/v1/web_es_05");

export {apiInstance};