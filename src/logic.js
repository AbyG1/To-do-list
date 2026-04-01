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
    
    
    const todoExist = todos.some(t => t.id === todoID);
    const isDuplicate = project?.todoIDs.includes(todoID);

       if (project && todoExist && !isDuplicate) {
        project.todoIDs.push(todoID);
    } else {
        console.error('Todo not added: Project missing, todo missing, or already exists.');
    }

    }

  
    
    
    return {
        createNewProject,
        createNewTodo,
        addTodoToProject
    }
    

}


const app = handleApp();
app.createNewProject('Inbox');