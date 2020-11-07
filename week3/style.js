for (var i = 0; i < 5; i++) {
    var head = document.createElement("h2");
    head.innerHTML = "Hello World";
    document.body.appendChild(head);
   
}



var style = document.createElement("div");
style.innerHTML = "<br><style>h2 {font-size:20px;font-weight: lighter; font-family: sans-serif; color: cornflowerblue;}</style>";

document.body.appendChild(style);





var css = document.querySelectorAll("h2");
for (var i = 0; i < 5; i++){
css[i].classList.add("border");

}







