const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const todoCount = document.getElementById('todo-count');

let todos = [];

function render() {
  todoList.innerHTML = '';

  if (todos.length === 0) {
    todoList.innerHTML = '<p class="empty-msg">タスクはありません</p>';
    todoCount.textContent = '';
    return;
  }

  const remaining = todos.filter(t => !t.done).length;
  todoCount.textContent = `${todos.length} 件中 ${remaining} 件残っています`;

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    if (todo.done) li.classList.add('done');

    const checkBtn = document.createElement('button');
    checkBtn.className = 'check-btn';
    checkBtn.title = '完了にする';
    checkBtn.textContent = '✓';
    checkBtn.addEventListener('click', () => toggleDone(index));

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.title = '削除';
    deleteBtn.textContent = '✕';
    deleteBtn.addEventListener('click', () => deleteTodo(index));

    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const text = input.value.trim();
  if (!text) return;
  todos.push({ text, done: false });
  input.value = '';
  render();
  input.focus();
}

function toggleDone(index) {
  todos[index].done = !todos[index].done;
  render();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.isComposing) addTodo();
});

render();
