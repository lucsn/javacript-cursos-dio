let count = 0;
let tarefa = "";
let task_input = document.getElementById('task-input');

const TASKS = document.getElementById('tasks');
const ADICIONAR = document.getElementById('adicionar')


ADICIONAR.addEventListener("click", function() {
        
    tarefa = "<input type='checkbox' class='checkbox'>" + task_input; 


    TASKS.innerHTML = tarefa;

})


// function increment() {
//     count++;

//     CURRENT_NUMBER.innerHTML = count;

//     if (count >= 0) {
//         CURRENT_NUMBER.style.color = 'black';
//     }

//     if (count >= 10) {
//         document.getElementById("adicionar").disabled = true;
//         document.getElementById("subtrair").disabled = false;
//     } 
// }

