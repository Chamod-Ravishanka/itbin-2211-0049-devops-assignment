const STORAGE_KEY = 'taskflow-pro.tasks';
const DEFAULT_FILTER = 'all';

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const taskTemplate = document.getElementById('taskItemTemplate');
const filterButtons = document.querySelectorAll('.filter-btn');
const statusPill = document.getElementById('statusPill');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');
const remainingTasks = document.getElementById('remainingTasks');

let currentFilter = DEFAULT_FILTER;
let tasks = loadTasks();

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.warn('Could not read saved tasks:', error);
    return [];
  }
}

function persistTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function updateSummary() {
  const completedCount = tasks.filter((task) => task.done).length;
  const total = tasks.length;
  const left = total - completedCount;

  totalTasks.textContent = String(total);
  completedTasks.textContent = String(completedCount);
  remainingTasks.textContent = String(left);

  if (total === 0) {
    statusPill.textContent = 'Ready to plan';
  } else if (left === 0) {
    statusPill.textContent = 'All tasks complete';
  } else {
    statusPill.textContent = `${left} task${left === 1 ? '' : 's'} left`;
  }
}

function renderTasks() {
  taskList.innerHTML = '';
  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === 'active') return !task.done;
    if (currentFilter === 'completed') return task.done;
    return true;
  });

  if (filteredTasks.length === 0) {
    const emptyState = document.createElement('li');
    emptyState.className = 'empty-state';
    emptyState.textContent = 'No tasks in this view yet.';
    taskList.appendChild(emptyState);
    updateSummary();
    return;
  }

  filteredTasks.forEach((task) => {
    const item = taskTemplate.content.firstElementChild.cloneNode(true);
    const text = item.querySelector('.task-text');
    const toggle = item.querySelector('.task-toggle');
    const deleteButton = item.querySelector('.delete-btn');

    item.dataset.id = task.id;
    if (task.done) {
      item.classList.add('completed');
    }

    text.textContent = task.text;
    toggle.checked = task.done;

    toggle.addEventListener('change', () => {
      task.done = toggle.checked;
      persistTasks();
      renderTasks();
    });

    deleteButton.addEventListener('click', () => {
      tasks = tasks.filter((currentTask) => currentTask.id !== task.id);
      persistTasks();
      renderTasks();
    });

    taskList.appendChild(item);
  });

  updateSummary();
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) {
    taskInput.focus();
    return;
  }

  tasks.unshift({
    id: crypto.randomUUID(),
    text,
    done: false,
  });

  taskInput.value = '';
  taskInput.focus();
  persistTasks();
  renderTasks();
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    renderTasks();
  });
});

renderTasks();
