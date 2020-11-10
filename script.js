

let selButtom = document.querySelector('#criar-tarefa');
let selInput = document.querySelector('#texto-tarefa');
let selLista = document.querySelector('#lista-tarefas');

selButtom.addEventListener('click', function() {  
  let textoInput = selInput.value;
  let adiciona = document.createElement('li');
  adiciona.innerText = textoInput;
  selLista.appendChild(adiciona);
  selInput.value = ''
});

selLista.addEventListener('click', function(event) {
  event.target.style.background = 'rgb(128, 128, 128)';
  selButtom.style.backgroundColor = "";
})