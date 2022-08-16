const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com/events"

const formCadastroEvento = document.querySelector('#cadastro-evento')

formCadastroEvento.addEventListener('submit', async (event) => {

  event.preventDefault()

  const inputNome = document.getElementById("nome")
  const inputBanner = document.getElementById("banner")
  const inputAtracoes = document.getElementById("atracoes")
  const inputDescricao = document.getElementById("descricao")
  const inputData = document.getElementById("data")
  const inputLotacao = document.getElementById("lotacao")

  //alert(inputNome.value)

  const fullDateTime = new Date(inputData.value)

  const novoEventoObj = {
    "name": inputNome.value,
    "poster": inputBanner.value,
    "attractions": inputAtracoes.value.split(","),
    "description": inputDescricao.value,
    "scheduled": fullDateTime.toISOString(),
    "number_tickets": inputLotacao.value
  }

  //convertendo obj para JSON
  const novoEventoJSON = JSON.stringify(novoEventoObj)

  //conexão com API para cadastrar novo evento
  //salvando resposta na const
  const resposta = await fetch(SOUND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: novoEventoJSON
  }).then((response) => {
    return response.json()
  }).then((responseOBJ) => {
    console.log(responseOBJ)
  })

})