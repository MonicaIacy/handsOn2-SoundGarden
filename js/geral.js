const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com"

const inputNome = document.getElementById("nome")
const inputBanner = document.getElementById("banner")
const inputAtracoes = document.getElementById("atracoes")
const inputDescricao = document.getElementById("descricao")
const inputData = document.getElementById("data")
const inputLotacao = document.getElementById("lotacao")

//tratamento de caracteres especiais

const preencherCampos = (dados) => {
  
  const{ name, poster, attractions, description, scheduled, number_tickets } = dados

  inputNome.value = name
  inputBanner.value = poster
  inputAtracoes.value = attractions //tratamento de vírgula
  inputDescricao.value = description 
  inputData.value = scheduled //tratamento para data
  inputLotacao.value = number_tickets

}

const getEventById = (id) => {
  fetch(`${SOUND_URL}/eventos/:${id}`)
  .then((response) => response.json())
  .then(preencherCampos)
}