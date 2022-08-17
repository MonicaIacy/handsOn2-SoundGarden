const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com/events"

const eventsList =  async () => {
  
  const table = document.querySelector("tbody")
  
  const events = await fetch(`${SOUND_URL}`, {
    method: "GET",
    redirect: "follow",
    headers: {"Content-Type": "application/json"}
  }).then((response) => {
    return response.json()
  })
  

  events.forEach((item) => {
    table.innerHTML += `
    <tr>
      <th scope="row">${events.indexOf(item) + 1}</th>
      <td>${item.scheduled}<td>
      <td>${item.name}</td>
      <td>${item.attractions}</td>
      <td>
        <a href="reservas-evento.html?id=${item._id}" class="btn btn-dark">ver reservas</a>
        <a href="editar-evento.html?id=${item._id}" class="btn btn-secondary">editar</a>
        <a href="excluir-evento.html?id=${item._id}" class="btn btn-danger">excluir</a>
      </td>
    </tr>
    `
  })
}

eventsList()