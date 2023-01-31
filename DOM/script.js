
// <-----------------------------------> 
// Uppgift 4


const form = document.querySelector(".word-form");
const input = form.querySelector("input[type='text']");
const button = form.querySelector("myBtn");
const list = document.querySelector("ol");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const word = input.value;
    if (!word) return;
    addWordToList(word);
    input.value = "";
    button.disabled = true;
});

input.addEventListener("input", function () {
    button.disabled = !input.value;
});

function addWordToList(word) {
    const item = document.createElement("li");
    item.innerText = word;
    list.appendChild(item);
}


// <----------------------------------->
// Uppgift 3

// const form = document.querySelector(".name-tag-form");
// const nameInput = form.querySelector("input[type='text']:first-of-type");
// const colorInput = form.querySelector("input[type='text']:last-of-type");
// const button = form.querySelector("button");

// button.addEventListener("click", function() {
//     const name = nameInput.value;
//     const color = colorInput.value;
//     const tag = createNameTag(name, color);
//     document.body.appendChild(tag);
// });
// function createNameTag(name,color) {
//     const tag = document.createElement("div");
//     tag.innerText = name;
//     tag.style.backgroundColor = color;
//     // tag.style.padding = "10px";
//     return tag
// }


// <----------------------------------->
// Uppgift 2
// type = "text/js"
// var count = 0
// var btn = document.getElementById("myBtn")
// var disp = document.getElementById("display")

// btn.onclick = function () {
//     count  ++;
//     disp.innerHTML = count;
// }

// <----------------------------------->
// Uppgift 1

// const body = document.greeting
// // greeting.append("hello world")

// const div = document.createElement('div')
// div.innerText = 'Hello World'


// greeting.append(div)

