document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const div = document.createElement('div');
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    div.appendChild(taskTextSpan);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    div.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    div.appendChild(deleteButton);

    document.getElementById('task-list').appendChild(div);

    document.getElementById('new-task').value = '';     // Clear the input field
});