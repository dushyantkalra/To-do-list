//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filters = document.querySelector('.filter-todo');
//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click' , deletecheck);
filters.addEventListener('click',filtertodo);
//Functions

function addTodo(event){
    //Prevents form from submitting because thats the default option
event.preventDefault();
// create todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');
//create li
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
todoDiv.appendChild(newTodo);
//Create buttons
const completeButton = document.createElement('button');
completeButton.innerHTML = '<i class = "fas fa-check"></i>';
completeButton.classList.add('complete-btn');
todoDiv.appendChild(completeButton);
const TrashButton = document.createElement('button');
TrashButton.innerHTML = '<i class = "fas fa-trash"></i>';
TrashButton.classList.add('trash-btn');
todoDiv.appendChild(TrashButton);
//Attach Div to ul
todoList.appendChild(todoDiv);
todoInput.value = '';
}

function deletecheck(event){
const item = event.target;
if(item.classList[0] === 'trash-btn'){
    item.parentElement.classList.add('hinged');
    //Animation
    item.parentElement.addEventListener('transitionend',function(){
        item.parentElement.remove();
    });
}
if(item.classList[0] === 'complete-btn'){
    item.parentElement.classList.toggle('completed');
}
}

function filtertodo(event){
const todo = todoList.childNodes;
todo.forEach(function(todo) {
    switch(event.target.value){
        case "All" :
            todo.style.display = 'flex';
            break;
        case "Completed":
            if(todo.classList.contains("completed"))
            {
                todo.style.display = 'flex';
            }
            else{
                todo.style.display = 'none';
            }
            break;
        case "Non-Completed":
                if(!todo.classList.contains("completed"))
                {
                todo.style.display = 'flex';
                 }
            else{
                todo.style.display = 'none';
            }
            break;

    }
});
}