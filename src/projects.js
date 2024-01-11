
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

export {loadProjects, starterProject, AllProjects};
