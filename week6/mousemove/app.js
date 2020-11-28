let box = document.body.getElementsByClassName("red-box");
let a = document.createElement("h3");
document.body.append(a);

box[0].addEventListener("mousemove", function(e){
    x = e.clientX;
    y = e.clientY;
    a.textContent = (` X coordinates: ${x} Y coordinates: ${y}`)

});

