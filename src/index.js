import {addPriorityOnClicks} from "./modal";
import {addProjectListenerButton, loadProjects, projAdditionListeners, updateProjects} from "./projects";
import { createNewTaskOnClick } from "./modal";
//This is the entry point



loadProjects();
projAdditionListeners();
addPriorityOnClicks();
updateProjects();
addProjectListenerButton();
createNewTaskOnClick();
