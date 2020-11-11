const addButton = document.querySelector('#criar-tarefa'); //botao
const inputText = document.querySelector('#texto-tarefa');//onde digita o texto
const taskList = document.querySelector('#lista-tarefas');//ol
let liSelected = null;

addButton.addEventListener('click', sendText);

function sendText () {
    let textList =  document.createElement('li');
    textList.innerText = inputText.value;
    textList.addEventListener('click', changeColor);
    taskList.appendChild(textList);
    inputText.value = "";
};


function changeColor (event) {
    if (liSelected !== null) {
        liSelected.style.backgroundColor = "white";
        
    }
        liSelected = event.target;
        event.target.style.backgroundColor = "rgb(128, 128, 128)";   
};


