
import {basicTodo} from "./toDos";

const starterProject = [basicTodo];

const AllProjects = [starterProject];


// A method for creating project objects
function projectFactory(projectName){
    return projectName;
}

// A function to update the amount of projects
function updateProjects(){

}

// A function to load the projects, it will reference the AllProjects Arraylist
function loadProjects(){
    console.log(basicTodo);
}

function showProjAdd(){
    const projectAdd = document.getElementById("hiddenProjAdd");
    const addProjButton = document.getElementById("addProjButton");

    addProjButton.style.display = "none";
    projectAdd.style.display = "block";

}

function projListeners(){
    const addProjButton = document.getElementById("addProjButton");

    console.log("this works!");
    addProjButton.addEventListener("click", () => {
        showProjAdd();
    })
}

export {projListeners, loadProjects, starterProject, AllProjects};
