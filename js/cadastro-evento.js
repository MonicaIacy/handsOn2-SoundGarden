const preencherForm = document.querySelector("#formulario")
console.log(preencherForm)

preencherForm.addEventListener('submit', (event) => {

  event.preventDefault()
  const preencherObjeto = new FormData(preencherForm)
  const atracoes = preencherObjeto.get('atracoes-input').split(',')
  
  const body = {
    "name": preencherObjeto.get('nome-input'),
    "poster": "",
    "attractions": atracoes, 
    "description": preencherObjeto.get('descricao-input'),
    "scheduled": preencherObjeto.get('data-input'),
    "number_tickets": preencherObjeto.get('lotacao-input')
  }

  console.log(body)

  fetch('https://xp41-soundgarden-api.herokuapp.com/events', {
    "method": "POST",
    "headers": {"content-type": "application/json"},
    "body": JSON.stringify(body)
  })
  .then((response) => console.log(response))
  .then(() => {
    alert("Evento criado")
    window.location.href("admin.html")
  })
  .catch(error => console.error(error))

})