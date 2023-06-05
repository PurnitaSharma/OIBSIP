const todoItems = document.getElementById('todo-items');
const taskInput = document.getElementById('task-input');

function addTask() {
    const taskDescription = taskInput.value;

    if (taskDescription.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskDescription}</span>
            <button onclick="deleteTask(this.parentElement)">Delete</button>
        `;
        todoItems.appendChild(taskItem);
        taskInput.value = '';
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
