const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com"

const FormEditEvent = document.getElementById('EditEvent');

FormEditEvent.addEventListener('submit', (event) =>{

    const inputNome = document.getElementById("nome")
    const inputBanner = document.getElementById("banner")
    const inputAtracoes = document.getElementById("atracoes")
    const inputDescricao = document.getElementById("descricao")
    const inputData = document.getElementById("data")
    const inputLotacao = document.getElementById("lotacao")

    const fullDateTime = new Date(inputData.value)

   const EditEvent = {
    "name": inputNome.value,
    "poster": inputBanner.value,
    "attractions": inputAtracoes.value.split(","),
    "description": inputDescricao.value,
    "scheduled": fullDateTime,
    "number_tickets": inputLotacao.value
   }

   PutEventById(EditEvent,id);


})


const PutEventById = (EditEvent,id) => {
    console.log(EditEvent)
    return fetch(`${SOUND_URL}/events/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(EditEvent)
    })
    .then((response) => console.log(response))
    .then(() => {
        alert("Evento criado")
        window.location.href("admin.html")
    })
    .catch(error => console.error(error))
};