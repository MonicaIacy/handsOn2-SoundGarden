const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'
const RESERVA_URL = 'https://xp41-soundgarden-api.herokuapp.com/bookings'

const divEventos = document.getElementById("eventos-principais")
const modal = document.querySelector(".modal")
const closeBtn = document.getElementById("close-btn")



const AbrirModal = (id) => {
  console.log(id)
  modal.style.display = "block"

  const formCadastroReserva = document.getElementById('formularioReserva')


  formCadastroReserva.addEventListener('submit', async (event) => {

    event.preventDefault()

    const inputOwner_name = document.getElementById("owner_name")
    const inputOwner_email = document.getElementById("owner_email")
    const inputNumber_tickets = document.getElementById("number_tickets")



    const novaReservaObj = {
      "owner_name": inputOwner_name.value,
      "owner_email": inputOwner_email.value,
      "number_tickets": inputNumber_tickets.value,
      "event_id": id
  }

  //convertendo obj para JSON
  const novaReservaJSON = JSON.stringify(novaReservaObj)

  //conexão com API para cadastrar novo evento
  //salvando resposta na const
  const resposta = await fetch(RESERVA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: novaReservaJSON
  }).then((response) => {
    return response.json()
  }).then((responseOBJ) => {
    console.log(responseOBJ)
 })
})

}



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
      <a id="modal" class="btn btn-primary" onclick="AbrirModal('${eventos[i]._id}')">
        reservar ingresso
      </a>
    </article>
    `
  }
}

listarEventos()



closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}