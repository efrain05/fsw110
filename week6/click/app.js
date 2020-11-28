// make the box disapear when the user clicks it

let box = document.querySelector(".red-box");

box.addEventListener("click", function(){
    box.className = "none";
})