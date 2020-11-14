const settings = {
  selected: null
};

// create task
document.getElementById('criar-tarefa').addEventListener('click', () => {
  const taskText = document.getElementById('texto-tarefa').value || '';

  if (taskText.trim() !== '') {
    document.getElementById(
      'lista-tarefas'
    ).innerHTML += `<li class='task'>${taskText.trim()} </li>`;
    document.getElementById('texto-tarefa').value = '';
  }
});

// clear all
document.getElementById('apaga-tudo').addEventListener('click', () => {
  document.getElementById('lista-tarefas').innerHTML = '';
});

// select
document.getElementById('lista-tarefas').addEventListener('click', () => {
  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected');
    settings.selected = null;
  } else if (event.target.classList.contains('task')) {
    document.querySelectorAll('.task').forEach((element) => {
      element.classList.remove('selected');
    });
    event.target.classList.add('selected');
    settings.selected = event.target;
  }
});

// done
document.getElementById('lista-tarefas').addEventListener('dblclick', () => {
  if (event.target.classList.contains('task')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

// remove selected
document.getElementById('remover-selecionado').addEventListener('click', () => {
  if (settings.selected !== null) {
    settings.selected.remove();
    settings.selected = null;
  }
});

// remove done
document.getElementById('remover-finalizados').addEventListener('click', () => {
  document.querySelectorAll('.completed').forEach((element) => {
    element.remove();
  });
});

// save tanks
document.getElementById('salvar-tarefas').addEventListener('click', () => {
  localStorage.clear();

  const content = document.getElementById('lista-tarefas').innerHTML;

  localStorage.setItem('tasks', content);
});

// load tanks
const loadTasks = () => {
  document.getElementById('lista-tarefas').innerHTML = '';
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('tasks');
  document.querySelectorAll('.task').forEach((element) => {
    element.classList.remove('selected');
  });
  settings.selected = null;
};

const moveUp = () => {
  const list = document.getElementById('lista-tarefas');
  //
};

const moveDown = () => {
  //
};

document.onload = loadTasks();

/*

function moveUp() {
  const lista = document.querySelector('#lista-tarefas');
  const btnMoveUp = document.querySelector('#mover-cima');
  btnMoveUp.addEventListener('click', () => {
    if (document.querySelector('.selected')) {
      const itemSelected = document.querySelectorAll('.selected');
      if (itemSelected[0].previousElementSibling !== null) {
        const previousItem = itemSelected[0].previousElementSibling.outerHTML;
        itemSelected[0].previousElementSibling.outerHTML = itemSelected[0].outerHTML;
        itemSelected[0].outerHTML = previousItem;
      }
    }
  });
}
moveUp();

function moveDown() {
  const lista = document.querySelector('#lista-tarefas');
  const btnMoveDown = document.querySelector('#mover-baixo');
  btnMoveDown.addEventListener('click', () => {
    if (document.querySelector('.selected')) {
      const itemSelected = document.querySelectorAll('.selected');
      if (itemSelected[0].nextElementSibling !== null) {
        const nextItem = itemSelected[0].nextElementSibling.outerHTML;
        itemSelected[0].nextElementSibling.outerHTML = itemSelected[0].outerHTML;
        itemSelected[0].outerHTML = nextItem;
      }
    }
  });
}
moveDown();

*/
