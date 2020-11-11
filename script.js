const lista = document.getElementById('lista-tarefas');
const itemInput = document.getElementById('texto-tarefa');
const buttonAddItem = document.getElementById('criar-tarefa');

buttonAddItem.addEventListener('click', function () {
  const item = document.createElement('li');
  item.innerText = itemInput.value;
  itemInput.value = '';
  lista.appendChild(item);
});

lista.addEventListener('click', function (e) {
  if (document.getElementsByClassName('focus-item').length > 0) {
    document.getElementsByClassName('focus-item')[0].classList.remove('focus-item');
  }
  e.target.classList.add('focus-item');
});
