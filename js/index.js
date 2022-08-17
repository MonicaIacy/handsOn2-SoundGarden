const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

const divEventos = document.getElementById("eventos-principais")

const listarEventos = async () => {

  const eventos = await fetch(SOUND_URL, {
      method: "GET",
      mode: "cors",
      headers: {
          "Content-Type": "application/json"
      }
  }).then((resposta) => {

      //retorna lista em array de objetos
      return resposta.json();
  })

  for(let i = 0; i < 3; i++){
    divEventos.innerHTML += `
    <article class="evento card p-5 m-3">
      <h2>${eventos[i].name} - ${eventos[i].scheduled}</h2>
      <h4>${eventos[i].attractions}</h4>
      <p>
        ${eventos[i].description}
      </p>
      <a href="#" class="btn btn-primary">
        reservar ingresso
      </a>
    </article>
    `
  }
}

listarEventos()