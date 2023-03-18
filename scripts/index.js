let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.profile__edit-form-close-button');
let profileContainer = document.querySelector('.profile__edit-form-container_hidden');
let overlay = document.querySelector('.overlay_hidden');

function editProfileOpen() {

    profileContainer.classList.toggle('profile__edit-form-container');
    overlay.classList.toggle('overlay');

}

editButton.addEventListener("click" , editProfileOpen);
closeButton.addEventListener("click" , editProfileOpen);
overlay.addEventListener("click" , editProfileOpen);

let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let profileNameInput = document.querySelector('.profile__input-name');
let profileProfessionInput = document.querySelector('.profile__input-profession');


profileName.textContent = "Aldo Navarro"
profileProfession.textContent = "Programador"

let profileSubmitButton = document.querySelector('.profile__submit-button');


function editProfaileValues(evt) {

    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileProfession.textContent = profileProfessionInput.value;
    profileContainer.classList.toggle('profile__edit-form-container');
    overlay.classList.toggle('overlay');

}

profileSubmitButton.addEventListener("click" , editProfaileValues);
