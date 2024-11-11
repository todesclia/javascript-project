let todoTasks = [];
let todoTasksStatus = [];
let todoTasksImportance = [];
let todoTasksDueDate = [];

const createNewTodoItemElement = (task, index) => {
    const newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task.description;

    if (todoTasksStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
    }

    if (todoTasksImportance[index]) {
        newTodoTaskTextElement.classList.add("important");

    }
  
    // Create a <li> element to contain the paragraph
    const newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    // Display due date
    const dueDateElement = document.createElement("span");
    dueDateElement.innerText = ` (Due: ${task.dueDate})`;
    newTodoTaskElement.appendChild(dueDateElement);

    // Create buttons for moving tasks up and down
    const moveUpButtonElement = document.createElement("input");
    moveUpButtonElement.type = "button";
    moveUpButtonElement.value = "↑";
    moveUpButtonElement.onclick = function () {
        moveTaskUp(index);
    };
    
    const moveDownButtonElement = document.createElement("input");
    moveDownButtonElement.type = "button";
    moveDownButtonElement.value = "↓";
    moveDownButtonElement.onclick = function () {
        moveTaskDown(index);
    };

    newTodoTaskElement.appendChild(moveUpButtonElement);
    newTodoTaskElement.appendChild(moveDownButtonElement);
    
    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    newTodoTaskElement.appendChild(completeButtonElement);

    const importantButtonElement = document.createElement("input");
    importantButtonElement.type = "button";
    importantButtonElement.value = "Important";
    importantButtonElement.onclick = function () {
        toggleImportant(index);
    };
    newTodoTaskElement.appendChild(importantButtonElement);

    return newTodoTaskElement;
}
const toggleComplete = (index) => {
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;    
    } else {
        todoTasksStatus[index] = false;
    }
    updateTodoList();
};

const toggleImportant = (index) => {
    todoTasksImportance[index] = !todoTasksImportance[index];
    updateTodoList();
};


const updateTodoList = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    for (const [index, task] of todoTasks.entries()) {
        const newTodoTaskElement = createNewTodoItemElement(task, index);
        // Add the <li> element to the list
        todoList.appendChild(newTodoTaskElement);
    }
};

const addTask = () => {
    const newTaskInput = document.getElementById("new-task-text");
    const newTaskDateInput = document.getElementById("new-task-date");
    if (newTaskInput.value) {
        const taskDescription = newTaskInput.value;
        const taskDueDate = newTaskDateInput.value || "No due date";
        todoTasks.push({description: taskDescription, dueDate: taskDueDate});
        todoTasksStatus.push(false);
        todoTasksImportance.push(false);
        newTaskInput.value = "";
        newTaskDateInput.value = "";
        updateTodoList();
    }
};

const moveTaskUp = (index) => {
    if (index > 0) { // Ensure it's not the first item
        const tempTask = todoTasks[index];
        const tempStatus = todoTasksStatus[index];
        const tempImportance = todoTasksImportance[index];
        const tempDueDate = todoTasksDueDate[index];

        // Move task up by swapping with the previous task
        todoTasks[index] = todoTasks[index - 1];
        todoTasksStatus[index] = todoTasksStatus[index - 1];
        todoTasksImportance[index] = todoTasksImportance[index - 1];
        todoTasksDueDate[index] = todoTasksDueDate[index - 1];

        todoTasks[index - 1] = tempTask;
        todoTasksStatus[index - 1] = tempStatus;
        todoTasksImportance[index - 1] = tempImportance;
        todoTasksDueDate[index - 1] = tempDueDate;

        updateTodoList();
    }
};

const moveTaskDown = (index) => {
    if (index < todoTasks.length - 1) { // Ensure it's not the last item
        const tempTask = todoTasks[index];
        const tempStatus = todoTasksStatus[index];
        const tempImportance = todoTasksImportance[index];
        const tempDueDate = todoTasksDueDate[index];

        // Move task down by swapping with the next task
        todoTasks[index] = todoTasks[index + 1];
        todoTasksStatus[index] = todoTasksStatus[index + 1];
        todoTasksImportance[index] = todoTasksImportance[index + 1];
        todoTasksDueDate[index] = todoTasksDueDate[index + 1];

        todoTasks[index + 1] = tempTask;
        todoTasksStatus[index + 1] = tempStatus;
        todoTasksImportance[index + 1] = tempImportance;
        todoTasksDueDate[index + 1] = tempDueDate;

        updateTodoList();
    }
};

updateTodoList();

const todoList = document.getElementById("todo-list");
for (const [index, task] of todoTasks.entries()) {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    // Add the <li> element to the list
    todoList.appendChild(newTodoTaskElement);
}
