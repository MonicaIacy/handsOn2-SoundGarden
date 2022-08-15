
import { EdicaoEvent } from "./editar-evento";

const tableListEvent = document.getElementById('table');

tableListEvent.addEventListener('click', (event) =>{
        const button= event.path[0].innerText
        const id =  event.path[0].id
        
        if(button == 'editar'){
            EdicaoEvento(id)
                        
        }
        if(button == 'excluir'){
            deletarEvento(id)
        }
        if(button == 'ver reservas'){
            xxxxxx(id);
        }
})
