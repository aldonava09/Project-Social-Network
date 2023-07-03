import { authorizationToken } from "./const.js"
import { renderCards, generateNewCards } from "./card.js"
import { renderInitialUserInfo, changeButtonText, restoreOriginalButtonText } from "../index.js"

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

  editUserInfo(profileNameInput, profileProfessionInput) {
    const body = {
        name: profileNameInput.value,
        about: profileProfessionInput.value
    };

    return this.fetchData(this.options, "PATCH", body)
      .then((result) => {
        return result;
    });
  }

  editUserPicture(profilePictureInput) {
    const body = {
        avatar: profilePictureInput.value,
    };

    return this.fetchData(this.options, "PATCH", body)
      .then((result) => {
        return result;
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

    changeButtonText(submitButton, "Saving...");

    const body = {
      name: newCardNameInput.value,
      link: newCardLinkInput.value,
    };

    return this.fetchData(this.options, "POST", body)
      .then((result) => {
        generateNewCards(result);
      })
      .finally(() => {
        restoreOriginalButtonText(submitButton, originalButtonText);
      });
  }

  deleteCard() {
    return this.fetchData(this.options, "DELETE")
    .then((result) => {
      return result;
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