// Adicionar tarefa à lista
const addTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
addTaskButton.addEventListener('click', () => {
  let input = document.getElementById('texto-tarefa');
  const task = document.createElement('li');
  task.innerHTML = input.value;
  task.classList.add('task');
  input.value = "";
  taskList.appendChild(task);
})

// Pinta a tarefa clicada
taskList.addEventListener('click', (event) => {
  const tasks = document.querySelector('.selected');
  if (tasks === null) {
    event.target.classList.add('selected')
    event.target.style.background = 'rgb(128, 128, 128)'
  } else {
    tasks.removeAttribute('style');
    tasks.classList.remove('selected');
    event.target.classList.add('selected')
    event.target.style.background = 'rgb(128, 128, 128)'  
  }
})