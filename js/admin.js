

const tableListEvent = document.getElementById('table');

tableListEvent.addEventListener('click', (event) =>{
        const button= event.path[0].innerText
        const id =  event.path[0].id
        
        if(button == 'Editar'){
            PutEventById(id)
        }
        if(button == 'Excluir'){
            deletarEvento(id)
        }
        if(button == 'ver reservas'){
            xxxxxx(id);
        }
})
