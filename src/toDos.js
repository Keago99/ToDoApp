
// A factory for Todo objects
const toDoFactory = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
    
};


const basicTodo = toDoFactory("my first Todo!", "This is an important task", "15/04/2025", "High");


export {toDoFactory, basicTodo};
