import { AllProjects } from "./projects";


// A factory for Todo objects
const toDoFactory = (title, description, dueDate, priority) => {
    

    
    // Getters and Setters to ensure encapsulation.
    return {
        set title(title){
            this.title = title
        },

        get title(){
            return title;
        },

        set description(description){
            this.description = description;
        },

        get description(){
            return description;
        },

        set dueDate(dueDate){
            this.dueDate = dueDate;
        },

        get dueDate(){
            return dueDate;
        },

        set priority(priority){
            this.priority = priority;
        },

        get priority(){
            return priority;
        }

    };


    
}


//This function will automate creating a div for each task.
function createTaskDiv(){

}



// Creates a new task from the modal, this will actually be called in the modal class since it is tied to
// that buttons logic, but because its primarily associated with the ToDo it will be housed here.
function createTask(){

}


// A function that will loop through the Array and load all the tasks in the div using the "createTask"
// function.
function loadTasks(){

}




const basicTodo = toDoFactory("my first Todo!", "This is an important task", "15/04/2025", "High");


export {toDoFactory, basicTodo};
