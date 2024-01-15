
import {basicTodo} from "./toDos";

const starterProject = new projectFactory("fart");

const AllProjects = [starterProject];


// A method for creating project objects
function projectFactory(projectName){
    this.projectName = projectName;
    this.tasks = [];
    return projectName;
};

// A function to update the amount of projects
function updateProjects(){
    const projList = document.getElementById("nameOfProjects");
    
    
    for (let i = 0; i < AllProjects.length; i++){
        let item = document.createElement("div");
        item.className = ("projItem");
        item.innerText = (AllProjects[i].projectName);

        projList.appendChild(item);
    }
}

// A function to load the projects, it will reference the AllProjects Arraylist
function loadProjects(){
    console.log(basicTodo);
}

// A function to show the hidden project add form with its accept and cancel buttons
function showProjAdd(){
    const projectAdd = document.getElementById("hiddenProjAdd");
    const addProjButton = document.getElementById("addProjButton");

    addProjButton.style.display = "none";
    projectAdd.style.display = "block";

}

// a function to clear the project form and hide its contents, including the two buttons, this should
// also reshow the "add project" button.
function cancelProjAdd(){
    const hiddenForm = document.getElementById("hiddenProjAdd");
    const addProjButton = document.getElementById("addProjButton");
    const input = document.getElementById("inputText");

    input.value = "";

    hiddenForm.style.display = "none";
    addProjButton.style.display = "block";

}


// Adding all eventlisteners that have to do with the project class.
function projListeners(){
    const addProjButton = document.getElementById("addProjButton");
    const cancelButton = document.getElementById("cancelButton");


    addProjButton.addEventListener("click", () => {
        showProjAdd();
    })

    cancelButton.addEventListener("click", () => {
        cancelProjAdd();
    })



    
}

export {projListeners, loadProjects, updateProjects, starterProject, AllProjects};
