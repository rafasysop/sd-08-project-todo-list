//ADICIONA TAREFA NA LISTA
function addTarefa() {
    let getText = document.querySelector('#texto-tarefa');
    let getLista = document.querySelector('#lista-tarefas');
    let getButton = document.querySelector('#criar-tarefa');

    getButton.addEventListener('click', function () {
        if (getText.value === '') {
            alert('ERRO!')
        } else {
            let newLi = document.createElement('li');
            newLi.innerText = getText.value;
            newLi.className = 'list-iten'
            getLista.appendChild(newLi);
            getText.value = '';
        }
    });
}

//SELECIONA TAREFA
function eventColor(ev, value) {
    let getLi = document.querySelectorAll('.list-iten');
    let estado = ev.target.hasAttribute('style');

    getLi.forEach((el) => el.removeAttribute('style'));

    if (!estado) {
        ev.target.style.backgroundColor = value;
    }
}

function selectTarefa() {
    let getOl = document.querySelector('#lista-tarefas');
    let color = `rgb(${128}, ${128}, ${128})`;
    getOl.addEventListener('click', function (e) {
        if (e.target.classList.contains('list-iten')) {
            eventColor(e, color);
        }
    });
}

//RISCANDO TAREFA
function changeCompleted(el) {
    if (el.target.classList.contains('completed')) {
        el.target.classList.remove('completed');
    } else {
        el.target.classList.add('completed');
    }
}

function tarefaCompleta() {
    let getOl = document.querySelector('#lista-tarefas');
    getOl.addEventListener('dblclick', function (e) {
        if (e.target.classList.contains('list-iten')) {
            changeCompleted(e);
        }
    });
}

//APAGA LISTA
function clearAll() {
    let getLista = document.querySelector('#lista-tarefas');
    let getButton = document.querySelector('#apaga-tudo');

    getButton.addEventListener('click', () => {
        let getItens = document.querySelectorAll('.list-iten');
        getItens.forEach((e) => getLista.removeChild(e))
    });
}

//APAGA AS TAREFAS COMPLETADAS
function removeFinish() {
    let getLista = document.querySelector('#lista-tarefas');
    let getButton = document.querySelector('#remover-finalizados');

    getButton.addEventListener('click', () => {
        let getLi = document.querySelectorAll('.completed');
        getLi.forEach((e) => getLista.removeChild(e));
    });
}

//SALVA AS TAREFAS
function save() {
    let getButton = document.querySelector('#salvar-tarefas');
    getButton.addEventListener('click', () => {
        localStorage.clear();
        let getLista = document.querySelectorAll('.list-iten');
        getLista.forEach( (e, key) => {
            let date = [];
            date.push(e.classList);
            date.push(e.innerText);
            localStorage.setItem(key, date);
        });
    });
}

//CARREGA TAREFAS SALVA
function loadingDate() {
    let getLista = document.querySelector('#lista-tarefas');
    if (localStorage.length > 0){
        for(let i = 0; i < localStorage.length; i += 1){
            let li = document.createElement('li')
            let dates = localStorage.getItem(i);
            let arrayDate = dates.split(',');
            li.classList = arrayDate[0];
            li.innerText = arrayDate[1];
            getLista.appendChild(li);
        }
    } else {
        alert('NENHUMA TAREFA ENCONTRADA!');
    }
}



//INICIA TODAS AS FUNÇÕES
window.onload = function () {
    addTarefa();
    selectTarefa();
    tarefaCompleta();
    clearAll();
    removeFinish();
    save();
    loadingDate();
}
