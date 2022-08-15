const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com"

const EdicaoEvento = (id) => {
    console.log(id)

    // Obtendo as informações do evento pelo metodo GET

    getEvent().then((dados) => {
        dados.forEach(element => {
            if(element.id == id){
                AdicionaParametroNoInput(element);
            }
            
        });
    }) 

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

}


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


const getEvent = ()  => {
    return fetch(SOUND_URL).then((response) => {
        if(response.status != 200){
            console.log("Erro no servidor: ${response.status}")
        }
        else {
            return response.json()
        }
    });
};

const AdicionaParametroNoInput = (objeto) => {

    const FormEditEvent = document.getElementById('EditEvent');

    
    FormEditEvent.getElementById('nome').value = objeto.nome
    FormEditEvent.getElementById('banner').value = objeto.banner
    FormEditEvent.getElementById('atracoes').value = objeto.atracoes
    FormEditEvent.getElementById('descricao').value =  objeto.descricao
    FormEditEvent.getElementById('data').value = objeto.data
    FormEditEvent.getElementById('lotacao').value =  objeto.lotacao

}

