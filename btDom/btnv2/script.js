
document.getElementById('addTaskBtn').addEventListener('click', function(){

    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if(taskText !== ""){

        const taskList = document.getElementById('taskList');

        const newTask = document.createElement('li');

        newTask.textContent = taskText;

        taskList.appendChild(newTask);

        taskInput.value = "";
    }
})