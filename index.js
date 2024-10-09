const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addTask(){
    if (inputBox.value === ''){
        alert('Adicione um item!')
    } else {
        let li = document.createElement('li')
        li.innerText = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }

    inputBox.value = ''
}

//Função addTask verifica se o campo input está vazio, se estiver ativa um alerta para avisar o usuário, caso contrário, cria um elemento <li>, adiciona à class listContainer (id = 'list-container') e adiciona um botão de 'remover' (um <span> no formato de x)

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
}, false)

//Evento de click, se clicar na tagName LI (<li>) alterna a classe 'checked' (marca/desmarca tarefa), se clicar na tagName SPAN (<span>), ou o 'x', ele remove o item da lista (remover tarefa) 