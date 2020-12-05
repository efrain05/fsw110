
let form = document.getElementById("todo");
let list = document.getElementById("myList");
let input = document.getElementById("add1");
let input2 = document.getElementById("add2")
let button = document.getElementById("button");
let id = 1;

button.addEventListener("click", addToDo)
list.addEventListener("click", removeEvent)


function addToDo (e) {
    let text = input.value;
    let textAdd = input2.value;
    let item = `<li class="del">
    ${text} ============= ${textAdd} <button class="del">Delete</button>`
    list.insertAdjacentHTML("beforeend",item);
    id++; 
    document.getElementById("add1").value = "";
    document.getElementById("add2").value = "";
    

}


function removeEvent(e) {
    if(e.target.classList.contains("del")) {
        list.removeChild(e.target.parentElement);
        list.removeChild(list);
        
    }
  }



