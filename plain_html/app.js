document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;
    document.getElementById('task-list').appendChild(li);

    document.getElementById('new-task').value = '';
});