const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com'

const button = document.querySelector('.btn')

const id = new URLSearchParams(window.location.search).get("id")

const exibirDetalhesEvento = async () => {
  const dadosEvento = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, {
    method: "GET",
    redirect: "follow",
    headers: { "Content-Type": "application/json" }
  }).then((response) => response.json())

  //console.log(dadosEvento)

  const inputNome = document.getElementById('nome')
  const inputBanner = document.getElementById('banner')
  const inputAtracoes = document.getElementById('atracoes')
  const inputDescricao = document.getElementById('descricao')
  const inputData = document.getElementById('data')
  const inputLotacao = document.getElementById('lotacao')

  inputNome.value = dadosEvento.name
  inputBanner.value = dadosEvento.poster
  inputAtracoes.value = dadosEvento.attractions.join(",")
  inputDescricao.value = dadosEvento.description
  inputData.value = dadosEvento.scheduled
  inputLotacao.value = dadosEvento.number_tickets

}

button.addEventListener("click", async (event) => {

  event.preventDefault()

  await fetch(`${SOUND_URL}/events/${id}`, {
    method: 'DELETE',
    redirect: "follow",
    headers: { 'content-type': 'application/json' },
  }).then(response => console.log(response))
    .then(() => {
      alert('Evento excluído')
      window.location.replace('admin.html?acao=edit')
    })
})

exibirDetalhesEvento()