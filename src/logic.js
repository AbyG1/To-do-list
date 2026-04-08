import { v4 as uuidv4 } from 'uuid';

const getDate = () => {
    return new Date().toLocaleDateString();
}

function createTodo(name, desc, note, date, importance, status) {
    
    const id = uuidv4();
    let title = name;
    let description = desc;
    let notes = note;
    let dueDate = date;
    let priority = importance;
    let isCompleted = status;
    let createdDate = getDate();
  
    
   

    return {
        id,
        title,
        description,
        notes,
        dueDate,
        priority,
        isCompleted,
        createdDate,

    }

}




const createProject = (name) => {
    
   
        const projectName = name;
        const projectId = uuidv4(); 
        const createdDate = getDate();
        let todoIDs = [];


    return {
       projectName,
       projectId,
       createdDate,
       todoIDs
    }


}




const handleApp = () =>  {
    
    const projects = [];

   
    const todos = [];

    const createNewProject = (name) => {
        const project = createProject(name);
        projects.push(project);
        return project.projectId;
    }

    const createNewTodo = (name, desc, note, date, importance, status) => {
        const todo = createTodo(name, desc, note, date, importance, status);
        todos.push(todo);
        return todo.id;
    }

    const addTodoToProject = (projectId,todoID) => {

        
        const project = projects.find(p => p.projectId === projectId);

        if(project){
            const todoExist = todos.some(t => t.id === todoID);
            if(todoExist){
                const isDuplicate = project.todoIDs.includes(todoID);
                if(!isDuplicate){
                    project.todoIDs.push(todoID);
                } else {
                    console.log("Todo already exist in the project");
                    return;
                }
            } else {
                console.log("The given todo doesn't exist");
                return;
            }

        } else {
            console.log("project not found");
            return;
        }
    
    

    }


    const getAllTodosInProject = (projectId) => {
        const project = projects.find(p => p.projectId === projectId);
        if(!project){
            console.log("no project found");
            return new error("project not found");
        }
        const toDos = todos.filter(todo => {
            if(project.todoIDs.includes(todo.id)){
                return todo
            }
        })

        return toDos;
    };
  
    const deleteTodo = (todoId) => {
        
    };
    
    
    return {
        createNewProject,
        createNewTodo,
        addTodoToProject,
        getAllTodosInProject,
        deleteTodo
    }
    

}


const app = handleApp();
app.createNewProject('Inbox');