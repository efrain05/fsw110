
let form = document.getElementById("todo");
let list = document.getElementById("myList");
let input = document.getElementById("add1");
let input2 = document.getElementById("add2")
let button = document.getElementById("button");




button.addEventListener("click", addToDo)
list.addEventListener("click", removeEvent)
marked.addEventListener("click", itemChecked)

function addToDo (e) {
    let text = input.value;
    let textAdd = input2.value;
    let item = `<li class="listDel">
    ${text} ============= ${textAdd} <button class="del">Delete</button>`
    list.insertAdjacentHTML("beforeend",item);
    id++; 
}


function removeEvent(e) {
    if(e.target.classList.contains("del")) {
        list.removeChild(e.target.parentElement);
        list.removeChild(list);
    }
  }



