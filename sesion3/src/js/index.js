let addBoton =
    document.querySelector('.container > p > button')

let addInput =
    document.querySelector('.container > p > input')

let incompleteTaskHolder =
    document.querySelectorAll('.container>ul')[0]

let completeTaskHolder =
    document.querySelectorAll('.container>ul')[1]

let createNewTaskElement = function (taskString) {
    let listItem = document.createElement('li')
    let checkbox = document.createElement('input')
    let label = document.createElement('label')

    let editInput = document.createElement('input')
    let editButton = document.createElement('button')
    let deleteButton = document.createElement('button')

    checkbox.type = 'checkbox'
    editButton.innerText = 'Edit'
    editButton.classList.add('edit')
    deleteButton.innerText = 'Delete'
    deleteButton.classList.add('delete')

    label.innerText = taskString

    listItem.appendChild(checkbox)
    listItem.appendChild(label)
    listItem.appendChild(editInput)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)

    return listItem

}


let addTask = function () {
    console.log('*** addTask ***')

    let listItem = createNewTaskElement(addInput.value)
    incompleteTaskHolder.appendChild(listItem)
    bindTaskEvents(listItem, taskComplete)
    addInput.value = ''
}


//Mark as complete
let taskComplete = function () {
    console.log('*** task complete ***')
    let listItem = this.parentNode
    completeTaskHolder.appendChild(listItem)
    bindTaskEvents(listItem, taskIncomplete)

    //TODO add bind
}

//Mark as incomplete
let taskIncomplete = function () {
    console.log('*** task incomplete')
    let listItem = this.parentNode
    incompleteTaskHolder.appendChild(listItem)
    bindTaskEvents(listItem, taskComplete)
}


let bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    console.log('*** bind list item events ***')
    let checkbox = taskListItem.querySelector('input[type=checkbox]')
    let editButton = taskListItem.querySelector('button.edit')
    let deleteButton = taskListItem.querySelector('button.delete')

    //bind events
    //editButton.onclick = editTask 
    editButton.addEventListener('click', editTask)
    deleteButton.onclick = deleteTask
    //deleteButton.addEventListener('click',deleteTask)
    checkbox.onchange = checkBoxEventHandler
}

let editTask = function () {
    console.log('edit task')
    let listItem = this.parentNode
    let editInput = listItem.querySelector('input[type=text]')
    let label = listItem.querySelector('label')
    let containsClass = listItem.classList.contains('editMode')
    
    if(containsClass){
        label.innerText = editInput.value
    } else {
        editInput.value = label.innerText
    }

    listItem.classList.toggle('editMode')
}

let deleteTask = function () {
    console.log('delete task')
    let listItem = this.parentNode //li
    let ulContainer =listItem.parentNode //ul
    ulContainer.removeChild(listItem)
}
addBoton.addEventListener('click', addTask)

for (let i = 0; i < completeTaskHolder.children.length; i++) {
    bindTaskEvents(completeTaskHolder.children[i], taskIncomplete);

}


for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
    bindTaskEvents(incompleteTaskHolder.children[i], taskComplete);

}