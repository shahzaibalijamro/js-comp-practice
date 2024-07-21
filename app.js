const form = document.querySelector('#form');
const input = document.querySelector('#input');
const div = document.querySelector('#list-wrapper');
let todo = [];
form.addEventListener('submit', event => {
    event.preventDefault();
    addTodo();
})

function renderTodo() {
    div.innerHTML = '';
    for (let i = 0; i < todo.length; i++) {
        div.innerHTML += `
        <span>${todo[i]}</span><button onclick="editTodo(${i})">edit</button><button onclick="dltTodo(${i})">delete</button><br><br>
        `
    }
}

function addTodo() {
    todo.push(input.value);
    input.value = '';
    renderTodo();
}

function editTodo(index) {
    const edited = prompt('Edited value goes here', todo[index]);
    todo.splice(index,1,edited);
    renderTodo();
}

function dltTodo(index) {
    todo.splice(index,1);
    renderTodo();
}