import { v4 as uuidv4 } from 'uuid';

function createTodoList(name, desc, note, date, importance, status) {
    
    const id = uuidv4();
    let title = name;
    let description = desc;
    let notes = note;
    let dueDate = date;
    let priority = importance;
    let isCompleted = status;
    let createdDate = getDate();
    let updatedDate = createdDate;
    
   

    return {
        id,
        title,
        description,
        notes,
        dueDate,
        priority,
        isCompleted,
        createdDate,
        updatedDate
    }

}

const getDate = () => {
    return new Date().toLocaleDateString();
}


const createProject = (name) => {
    
    

   
        const projectName = name;
        const projectId = uuidv4(); 
        const createdDate = getDate();
        let todos = [];

    



    const getTodos = () => [...todos];

    const addTodo = (todo) => todos.push(todo);

    const deleteTodoList = (todoId) => {
        const toDoIndex = todos.findIndex(todo => todo.id === id);
        todos.splice(toDoIndex,1);
        console.log(todos);
    };

    const updateTodoStatus = (todoId,status) => {
         const toDoIndex = todos.findIndex(todo => todo.id === id);
         todoId[toDoIndex].isCompleted = status;
         
    };

    const updateTodoPriority = (todoId, priority) => {
        const toDoIndex = todos.findIndex(todo => todo.id === id);
        todoId[toDoIndex].priority = priority;
    };

    const editTodoTitle = (todoId,title) => {
        const toDoIndex = todos.findIndex(todo => todo.id === id);
        todoId[toDoIndex].title = title;
    }

    const editTodoDescription = (todoId,desc) => {
        const toDoIndex = todos.findIndex(todo => todo.id === id);
        todoId[toDoIndex].description = desc;
    }

    const editTodoNotes = (todoId,notes) => {
        const toDoIndex = todos.findIndex(todo => todo.id === id);
        todoId[toDoIndex].notes = notes;
    }

    const changeTodoDueDate = (todoId) => {
        const toDoIndex = todos.findIndex(todo => todo.id === id);
        todoId[toDoIndex].dueDate = dueDate;
    }



    return {
        projectName,
        projectId,
        createdDate,
        addTodo,
        deleteTodoList,
        getTodos,
        updateTodoStatus,
        updateTodoPriority,
        editTodoTitle,
        editTodoDescription,
        editTodoNotes,
        changeTodoDueDate
    }


}




const handleAppstate = () =>  {
    
    const appState = [];
    
                        
    const createNewProject = (projectName) => {
        const newProject = createProject(projectName);
        appState.push(newProject);

    };

    const createNewTodo = (name, desc, note, date, importance, status) => {
        const newTodo = createNewTodo(name, desc, note, date, importance, status);
        return newTodo.id;
    };

    const addTodoToProject = (projectId, todoId) => {
        const index = appState.findIndex(project => project.projectId === projectId);
        appState[index]
    };

    const deleteProject = (projectId) => {
        const index =  appState.findIndex(project => project.projectId === projectId);
        appState.slice(index,1);
        console.log(appState);

    };

    



}