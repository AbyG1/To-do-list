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
    return new Date().toLocaleDateString();
}


const createProject = (name) => {
    
    

   
        const projectName = name;
        const projectId = uuidv4(); 
        const createdDate = getDate();
        let toDos = [];

    



    const getToDos = () => [...toDos];

    const addToDo = (Todo) => toDos.push(Todo);

    const deleteTodoList = (id) => {
        toDos = toDos.filter(item => item.id !== id)
    }

    const markTodoComplete = (id) => {

    }

    const updateTodoPriority = (id) => {

    }

    const editTodoTitle = (id) => {

    }

    const editTodoDescription = (id) => {

    }

    const editTodoNotes = (id) => {

    }

    const changeTododueDate = (id) => {

    }



    return {
        projectName,
        projectId,
        createdDate,
        addToDo,
        deleteTodoList,
        getToDos,
        markTodoComplete,
        updateTodoPriority,
        editTodoTitle,
        editTodoDescription,
        editTodoNotes,
        changeTododueDate
    }


}



function assignTodotoProject(projectId){
    const toDo = createToDoList(title, description, notes, dueDate, priority,isCompleted,)
    handleProject.addToDo(toDo);

}


const handleAppstate() => {

}