
// A factory for Todo objects
const toDoFactory = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
};

// 
function addTodo(title, description, dueDate, priority){
    newTodo = toDoFactory(title, description, dueDate, priority);
    return newTodo;
};


export {toDoFactory, addTodo};
