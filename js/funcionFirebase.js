import {saveTask} from './firebase.js';

window.addEventListener('DOMContentLoaded',()=>{
console.log("ferchus")
})

const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const names = taskForm['name']
    const emails = taskForm['email']
    const websites = taskForm['website']
    const messages = taskForm['message']

    saveTask(names.value, emails.value, websites.value, messages.value);
    taskForm.reset()
    
    Swal.fire({
        title: "Excelente!",
        text: "Mensaje enviado correctamente",
        icon: "success" 
     });
})