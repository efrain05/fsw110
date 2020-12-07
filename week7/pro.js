let list = document.getElementById("myList");
let input = document.getElementById("add1");
let input2 = document.getElementById("add2");
let button = document.getElementById("button");
let id = 1;


function addToDo() {
    let text = input.value;
    let textAdd = input2.value;
    let item = `<li class="del">
    ${text} ============= ${textAdd} <button class="del">Delete</button>`;

    document.querySelector("#todo").insertAdjacentHTML("beforeend", item);
    document.getElementById("add1").value = "";
    document.getElementById("add2").value = "";

  }

