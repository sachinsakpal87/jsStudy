// Define UI var
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all Event Listerners

loadEventListners();

// Load all Event Listerners function
function loadEventListners() {

    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add tasks events
    form.addEventListener('submit', addTasks);

    // Remove tasks events
    taskList.addEventListener('click', removeTask);

    // Clear all tasks
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks
    filter.addEventListener('keyup', filterTasks);
}
// Get Tasks from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((item)=>{
        // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-items';
    // Create text node and append to the li
    li.appendChild(document.createTextNode(item));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append the li to ul
    taskList.appendChild(li);
    })
}

//Filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-items').forEach((task)=> {
        const item = task.firstChild
        .textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    })
}

// Clear all tasks
function clearTasks(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
    localStorage.clear();
}
//Remove Tasks
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure')){
            e.target.parentElement.parentElement.remove();

            removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
}

//Remove from Local Storage
function removeTaskFromLocalStorage(element){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach((item, index)=>{
        if(element.textContent == item){
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add a tasks
function addTasks(e) {
    if (taskInput.value === "") {
        alert('Add a tasks');
        break;
    }

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-items';
    // Create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append the li to ul
    taskList.appendChild(li);
    
    storeTaskInLocalStorage(taskInput.value);

    //Clear the input
    taskInput.value = '';

    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}