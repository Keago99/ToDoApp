// This is where all the javascript relating to the modal will go.
import {createTask} from "./toDos";
import { ActiveProject, AllProjects } from "./projects";
// Adds the onclick methods for the Modal items, specifically the "Low/Medium/High" priority
function addPriorityOnClicks(){
    const priorityButton = document.getElementById("Priority");
    const priorityCollection = document.getElementsByClassName("priorityClick");

    for (let i = 0; i < priorityCollection.length; i++){
        priorityCollection[i].addEventListener("click", () => {
            var color = priorityCollection[i].style.backgroundColor;
            var text = priorityCollection[i].innerHTML
            priorityButton.innerHTML = text;
            if(priorityCollection[i].classList.contains("highPriority")){
                priorityButton.classList.replace("btn-secondary", "btn-danger");
                priorityButton.classList.replace("btn-warning", "btn-danger");
                priorityButton.classList.replace("btn-success", "btn-danger");
            }
            if(priorityCollection[i].classList.contains("mediumPriority")){
                priorityButton.classList.replace("btn-secondary", "btn-warning");
                priorityButton.classList.replace("btn-success", "btn-warning");
                priorityButton.classList.replace("btn-danger", "btn-warning");
            }
            if(priorityCollection[i].classList.contains("lowPriority")){
                priorityButton.classList.replace("btn-secondary", "btn-success"); 
                priorityButton.classList.replace("btn-danger", "btn-success");
                priorityButton.classList.replace("btn-warning", "btn-success");
            }
        } )
    }
}

function closeNoPriorityAlertListener(){
    const priorityClose = document.getElementById("closeNoPriorityAlert");
    const priorityAlert = document.getElementById("noPriorityAlert");

    priorityClose.addEventListener("click", () => {
        priorityAlert.id = "noPriorityAlert";
    })
}

function closeTitleAlertListener(){
    const titleClose = document.getElementById("closeTitleAlertButton");
    const titleAlert = document.getElementById("noTitleAlert");
    

    titleClose.addEventListener("click", () => {
        titleAlert.id = "noTitleAlert";
    })
}

function closeDescriptionAlertListener(){
    const descClose = document.getElementById("closeDescriptionAlertButton");
    const descAlert = document.getElementById("noDescriptionAlert");


    descClose.addEventListener("click", () => {
        descAlert.id = "noDescriptionAlert";
    })
}

function createNewTaskOnClick(){
    const createNewTaskButton = document.getElementById("createNewTask");

    createNewTaskButton.addEventListener("click", () => {
        createTask();
        clearToDoModal();
    })
}

// Clears the modal for adding a new toDo modal
function clearToDoModal(){
    const title = document.getElementById("todoName");
    const description = document.getElementById("todoDescription");
    const noTitleAlert = document.getElementById("noTitleAlert");
    const noDescAlert = document.getElementById("noDescriptionAlert");
    const noPriorityAlert =  document.getElementById("noPriorityAlert");
    const priority = document.getElementById("Priority");


    priority.innerText = "Priority:";
    priority.classList.replace("btn-danger", "btn-secondary");
    priority.classList.replace("btn-warning", "btn-secondary");
    priority.classList.replace("btn-success", "btn-secondary");

    // This clears the alerts for title and description
    noTitleAlert.id = "noTitleAlert";
    noDescAlert.id = "noDescriptionAlert";
    noPriorityAlert.id = "noPriorityAlert";

    // This clears the title box and the description box
    title.value = "";
    description.value = "";
}

// A function that adds eventlisteners to the detailbuttons and poulates the modal
function populateTodoDetailModal(){
    // A collection of all todo Titles and detail buttons
    const divTitles = document.getElementsByClassName("titleDisplay");
    const detailButtons = document.getElementsByClassName("detailButton");
    
    // constants for the modal areas, this will be populated based on what the detail button clicks
    const descTitle = document.getElementById("descriptionTodoName");
    const descDescription = document.getElementById("descriptionTodoArea");

    

    for (let i = 0; i < detailButtons.length; i++)
    {
        detailButtons[i].addEventListener("click", (e) => {
            let currentTitle = divTitles[i].innerText;
            console.log("This is the " + [i] + "th number details and the current title is " + currentTitle);
            const searchIndex = AllProjects[ActiveProject].tasks.findIndex((toDo) => toDo.title== currentTitle);
            descTitle.innerText = AllProjects[ActiveProject].tasks[searchIndex].title;
            descDescription.innerText = AllProjects[ActiveProject].tasks[searchIndex].description;
            e.stopPropagation();
        })
    }
}

export {populateTodoDetailModal, addPriorityOnClicks, createNewTaskOnClick, closeTitleAlertListener, closeDescriptionAlertListener, closeNoPriorityAlertListener};