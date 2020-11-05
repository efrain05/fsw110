for (var i = 0; i < 10; i++) {
    var head = document.createElement("h1");
    head.innerHTML = "Hello World";


    document.body.appendChild(head);    
}

var style = document.createElement("div");
style.innerHTML = "<br><style>h1 { color: red; font-size:20px }</style>";
document.body.appendChild(style);

const names = [
    "steve",
    "larry",
    "joe",
    "shirley",
    "steph",
    "nate",
    "rick",
    "emily",

]


var list;
for (list of names) {
    document.write(list + "<br >");
  }
