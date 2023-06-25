/* fetch de Cards 
fetch("https://around.nomoreparties.co/v1/web_es_05/cards", {
  headers: {
    authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c"
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  })
  .catch((err)=>{
    console.log(err);
  });
*/

/* fetch de usuario
fetch("https://around.nomoreparties.co/v1/web_es_05/users/me", {
  headers: {
    authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c"
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  })
  .catch((err)=>{
    console.log(err);
  });
*/

/* peticion de cambio de info de usuario
  fetch("https://around.nomoreparties.co/v1/web_es_05/users/me", {
    method: "PATCH",
    headers: {
      authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Aldo Navarro",
      about: "Programador"
    })
  });
*/

/* peticion de cambio de info de usuario
  fetch("https://around.nomoreparties.co/v1/web_es_05/users/me", {
    method: "PATCH",
    headers: {
      authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Aldo Navarro",
      about: "Programador"
    })
  });
*/

/* Post para una nueva Tarjeta 
  fetch("https://around.nomoreparties.co/v1/groupId/cards", {
    method: "POST",
    headers: {
      authorization: "9ffaeb5f-3406-466e-a952-2ace02206b0c",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "name de la tarjeta",
      link: "link de la tarjeta"
    })
  });
*/



