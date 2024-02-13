// This is where all the javascript relating to the modal will go.
import {createTask} from "./toDos";
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
    })
}

export {addPriorityOnClicks, createNewTaskOnClick, closeTitleAlertListener, closeDescriptionAlertListener};