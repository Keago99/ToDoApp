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
function createTaskDiv(title,dueDate,priority){
    // Main div that will store the other divs
    const toDoDiv = document.createElement("div");
    
    // Creating the divs to store the passed in data.
    const titleDisplay = document.createElement("div");
    const detailButton = document.createElement("div");
    const dateDisplay = document.createElement("div");
    const priorityDisplay = document.createElement("div");
    const deleteButton = document.createElement("div");

    toDoDiv.classList.add("toDoDiv");
    detailButton.classList.add("toDoTaskButton");


    // The title display which will come first, not much to change here since its just text.
    titleDisplay.innerText = title;
    titleDisplay.classList.add("todoDivTitleStyle");
    
    // This will contain the html for button which will open a modal (doing this later)
    detailButton.innerHTML = "<button type=\"button\"\
     class=\"btn btn-primary detailButton\" data-bs-toggle=\"modal\" data-bs-target=\"#descriptionModal\" > Details\
     <img src=\"../src/images/smallMagnifyingGlass.png\" class=\"magnifyPicture\"/>\
     </button>";

    // This will contain the specific date, its already a string so we can just leave it as is
    dateDisplay.innerHTML = dueDate;

    // This will show a button with the priority on it, including the color
    // Use a switch case since there are only three values (might make this its own method)
    priorityDisplay.innerHTML = priority + " priority";
    if (priorityDisplay.innerHTML === "Low priority"){
        priorityDisplay.style.color = "#05EE53";
    }
    else if(priorityDisplay.innerHTML === "Medium priority"){
        priorityDisplay.style.color = "yellow";
    }
    else if (priorityDisplay.innerHTML === "High priority"){
        priorityDisplay.style.color = "red";
        }
    else{
        console.log("this is nothing listed priority");
    }

    deleteButton.innerHTML = "<button type=\"button\"\
    class=\"btn btn-primary detailButton\"> Delete\
    <img src=\"../src/images/icons8-trash-can-64.png\" class=\"magnifyPicture\"/>\
    </button>";


    // Adding another class for spacing to each inner div.
    titleDisplay.classList.add("innerTodoDiv");
    detailButton.classList.add("innerTodoDiv");
    dateDisplay.classList.add("innerTodoDiv");
    priorityDisplay.classList.add("innerTodoDiv");
    deleteButton.classList.add("innerTodoDiv");

    // Then we append everything and send it off
    toDoDiv.appendChild(titleDisplay);
    toDoDiv.appendChild(detailButton);
    toDoDiv.appendChild(dateDisplay);
    toDoDiv.appendChild(priorityDisplay);
    toDoDiv.appendChild(deleteButton);
    return toDoDiv;
}

// A function that will loop through the Array and load all the tasks in the div using the "createTask"
// function.
function loadTasks(){
    const toDoList = document.getElementById("TodoList");
    toDoList.innerHTML = "";

    for (let i = 0; i < AllProjects[ActiveProject].tasks.length; i++){
        const newTitle = (AllProjects[ActiveProject].tasks[i].title);
        const newDueDate = (AllProjects[ActiveProject].tasks[i].dueDate);
        const newPriority = (AllProjects[ActiveProject].tasks[i].priority);

        const newTaskDiv = createTaskDiv(newTitle, newDueDate, newPriority);
        toDoList.appendChild(newTaskDiv);

    }
}



// Creates a new task from the modal, this will actually be called in the modal class since it is tied to
// that buttons logic, but because its primarily associated with the ToDo it will be housed here.
function createTask(){
    let modal = document.getElementById("exampleModal");
    let trueModal = bootstrap.Modal.getInstance(modal);


    let title = document.getElementById("todoName").value;
    let description = document.getElementById("todoDescription").value;
    let dueDate = document.getElementById("todoDueDate").value;
    let priorityText = document.getElementById("Priority").innerText;
    let noTitle = document.getElementById("noTitleAlert");
    let noDescription = document.getElementById("noDescriptionAlert");
    let noPriorityAlert = document.getElementById("noPriorityAlert");
    // Checks if the title and description are blank before adding a new task.
    if (title == ""){
            noTitle.id = "show";
    }
    else if (description == ""){
        noDescription.id = "show";
    }
    else if (priorityText.trim() === "Priority:"){
        noPriorityAlert.id = "show";
    }
    else{
        const newTask = new toDo(title, description, dueDate, priorityText);
        AllProjects[ActiveProject].tasks.push(newTask);
        loadTasks();
        trueModal.hide();

    }

}






const basicTodo = new toDo("my first Todo!", "This is an important task", "2024-01-10", "High");


export {toDo, loadTasks, createTask, changeHeader, basicTodo};
