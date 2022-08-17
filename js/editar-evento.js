const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com"


  

    const findID = () => {

        const url = new URL(window.location.href);
        const id = url.searchParams.get('id');
    
        return id;
    }

    // Obtendo as informações do evento pelo metodo GET

    

const exibirDetalhesEvento = async () => {
        const dadosEvento =
            await fetch('https://xp41-soundgarden-api.herokuapp.com/events/' + findID(), {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => response.json());
    
        console.log(dadosEvento);
    
        const inputNome = document.getElementById("nome");
        const inputAtracoes = document.getElementById("atracoes");
        const inputDescricao = document.getElementById("descricao");
        const inputData = document.getElementById("data");
        const inputLotacao = document.getElementById("lotacao");
        const inputBanner = document.getElementById("banner");
    
        inputNome.value = dadosEvento.name;
        inputAtracoes.value = dadosEvento.attractions.join(', ');
        inputBanner.value = dadosEvento.poster;
        inputDescricao.value = dadosEvento.description;
        inputData.value = dadosEvento.scheduled;
        inputLotacao.value = dadosEvento.number_tickets;
}

exibirDetalhesEvento();

const EditEvent = document.getElementById('EditEvent')
EditEvent.addEventListener('submit', async (event) => {
    
    event.preventDefault();

    const inputNome = document.getElementById("nome");
    const inputAtracoes = document.getElementById("atracoes");
    const inputDescricao = document.getElementById("descricao");
    const inputData = document.getElementById("data");
    const inputLotacao = document.getElementById("lotacao");
    const inputBanner = document.getElementById("banner");

    // conversão de data para padrão do banco de dados
    const fullDateTime = new Date(inputData.value);

    // criando objeto com os dados do evento
    const EditEventObj = {
        "name": inputNome.value,
        "poster": inputBanner.value,
        "attractions": inputAtracoes.value.split(","),
        "description": inputDescricao.value,
        "scheduled": fullDateTime.toISOString(),
        "number_tickets": inputLotacao.value
    };

    // convertendo Obj para JSON
    const EditEventoJSON = JSON.stringify(EditEventObj);

    //Pegando a Pagina admin

    const findAdim = () => {

      
        //const Adim = window.location.hostname + '/admin.html'
        const Adim = "file:///D:/Documentos/PROJETOS/soundgarden/admin.html"
    
        return Adim;
    }

   

    // conexão com API para cadastrar novo evento
    // salvando resposta na const
    const resposta = await fetch('https://xp41-soundgarden-api.herokuapp.com/events/' + findID(), {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: EditEventoJSON
    }).then((response) => {
        console.log(response)
    }).then((responseOBJ) => {
        alert("Evento Atualizado")
        //window.location.href = findAdim()
    });

  

});

