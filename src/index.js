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
    
  
    const updateTitle = (newTitle) => {title = newTitle, updatedDate = getDate()};
    const updateDescription = (newDesc) => {description = newDesc, updatedDate = getDate()};
    const updateDate = (newDate) => {dueDate = date, updatedDate = getDate()};
    const updatePriority = (imp) => {priority = imp, updatedDate = getDate()};
    const updateStatus = (newStatus) => {isCompleted = newStatus, updatedDate = getDate()};
    const updateNotes = (newNotes) => {notes = newNotes, updatedDate = getDate()};
   

    return {
        title, description, notes, dueDate, priority, isCompleted,createdDate, updatedDate, updateTitle, updateDescription, updateDate, updatePriority, updateStatus, updateNotes, 
    }

}

const getDate = () => {
    return new Date().toLocaleDateString;
}


const createNewProject = (name = 'Inbox') => {
    
    let projectName = name;

    const todDoList = []

    const toDos = createToDoList()


    todDoList.push(toDos)




}

