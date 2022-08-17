const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com"

const id = new URLSearchParams(window.location.search).get("id")

const exibirDetalhesEvento = async () => {
  const dadosEvento = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, {
    method: "GET",
    redirect: "follow",
    headers: { "Content-Type": "application/json" }
  }).then((response) => response.json())

  //console.log(dadosEvento)

  const h1 = document.querySelector('h1')
  h1.innerText += ` ${dadosEvento.name}`
}

const reservationList = async () => {
  
  const table = document.querySelector("tbody")
  
  const reservations = await fetch(`${SOUND_URL}/bookings/${id}`, {
    method: "GET",
    redirect: "follow",
    headers: {"Content-Type": "application/json"}
  }).then((response) => {
    return response.json()
  })
  
  if (reservations != null){
    reservations.forEach((item) => {
      table.innerHTML += `
      <tr>
        <th scope="row">${reservations.indexOf(item) + 1}</th>
        <td>${item['event'].scheduled}<td>
        <td>${item['event'].name}</td>
        <td>${item.owner_email}</td>
        <td>${item.number_tickets}</td>
      </tr>
      `
    })

  } else {
    alert(`Não existe nenhuma reserva para esse evento`)
  }  
}

exibirDetalhesEvento()
reservationList()