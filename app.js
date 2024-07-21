// const form = document.querySelector('#form');
// const input = document.querySelector('#input');
// const div = document.querySelector('#list-wrapper');
// let todo = [];
// form.addEventListener('submit', event => {
//     event.preventDefault();
//     addTodo();
// })

// function renderTodo() {
//     div.innerHTML = '';
//     for (let i = 0; i < todo.length; i++) {
//         div.innerHTML += `
//         <span>${todo[i]}</span><button onclick="editTodo(${i})">edit</button><button onclick="dltTodo(${i})">delete</button><br><br>
//         `
//     }
// }

// function addTodo() {
//     todo.push(input.value);
//     input.value = '';
//     renderTodo();
// }

// function editTodo(index) {
//     const edited = prompt('Edited value goes here', todo[index]);
//     todo.splice(index,1,edited);
//     renderTodo();
// }

// function dltTodo(index) {
//     todo.splice(index,1);
//     renderTodo();
// }

// const time = document.querySelector("#time");

// const date = new Date();
// const correctedDate = date.getDate();
// const day = date.getDay();
// const minute = date.getMinutes();
// const hour = date.getHours();
// const second = date.getSeconds();
// const month = date.getMonth();
// const year = date.getFullYear();
// let correctedHour;
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// if (hour > 12) {
//     correctedHour = `${hour-12} PM`
// }else{
//     correctedHour = `${hour} AM`
// }
// time.innerHTML = `${correctedHour} : ${minute} : ${second} ${days[day]} ${correctedDate}/${month}/${year}`;
// const color = [  "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure",  "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue",  "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse",  "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson"];
// const body = document.querySelector('#body');
// const h1 = document.querySelector('#h1');
// function changeColor() {
//     const randomNumber = Math.floor(Math.random()*20);
//     console.log(randomNumber);
//     const randomColor = color[randomNumber];
//     console.log(randomColor);
//     h1.innerHTML = `Background-Color = ${randomColor}`
//     body.style.backgroundColor = `${randomColor}`;
// }
// const counterWrapper = document.querySelector('#counter-wrapper');
// let count = 0;
// function increaseCount() {
//     count += 1;
//     counterWrapper.innerHTML = `${count}`;
// }
// function resetCount() {
//     count = 0;
//     counterWrapper.innerHTML = `${count}`;
// }
// function decCount() {
//     count -= 1;
//     counterWrapper.innerHTML = `${count}`;
// }