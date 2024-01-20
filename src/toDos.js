import { AllProjects, ActiveProject } from "./projects";


// Constructor for Todo
function toDo(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority =priority;

}

function changeHeader(){
    const header = document.getElementById("TodoHeader");
    const activeProject = document.getElementsByClassName("activeProject");

    header.innerHTML = activeProject[0].textContent;
}

//This function will automate creating a div for each task.
function createTaskDiv(){

}



// Creates a new task from the modal, this will actually be called in the modal class since it is tied to
// that buttons logic, but because its primarily associated with the ToDo it will be housed here.
function createTask(){
    let title = document.getElementById("todoName").value;
    let description = document.getElementById("todoDescription").value;
    let dueDate = document.getElementById("todoDueDate").value;
    let priority = document.getElementById("Priority").innerText;

    const newTask = new toDo(title, description, dueDate, priority);
    AllProjects[ActiveProject].tasks.push(newTask);
}


// A function that will loop through the Array and load all the tasks in the div using the "createTask"
// function.
function loadTasks(){

}




const basicTodo = new toDo("my first Todo!", "This is an important task", "2024-01-10", "High");


export {toDo, createTask, changeHeader, basicTodo};
