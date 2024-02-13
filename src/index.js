import {addPriorityOnClicks} from "./modal";
import {setInitialProject, addProjectListenerButton, loadProjects, projAdditionListeners, updateProjects} from "./projects";
import { createNewTaskOnClick, closeTitleAlertListener, closeDescriptionAlertListener } from "./modal";
import { loadTasks, changeHeader } from "./toDos";
//This is the entry point


loadProjects();
loadTasks();
projAdditionListeners();
addPriorityOnClicks();
updateProjects();
setInitialProject();
addProjectListenerButton();
createNewTaskOnClick();
changeHeader();
closeTitleAlertListener();
closeDescriptionAlertListener();
