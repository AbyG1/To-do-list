import { v4 as uuidv4 } from 'uuid';

function createToDoList(name, desc, note, date, importance, status) {
    
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
    return new Date().toLocaleDateString;
}


const createNewProject = (name) => {
    
    let projectName = name;
    let projectId = uuidv4(); 
    let createdDate = getDate();
    let toDos = [];

    const createNewTodoList = (name, desc, note, date, importance, status) => {
        const newTodo = createToDoList(name, desc, note, date, importance, status);
        toDos.push(newTodo);
    }

    const deleteTodoList = (id) => {
        toDos = toDos.filter(item => item.id !== id)
    }

    const markComplete = (id) => {

    }



    return {
        projectName,
        projectId,
        createNewTodoList,
        deleteTodoList
    }


}

