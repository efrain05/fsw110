var change = document.getElementById ("square")
change.addEventListener("mouseover",  function(){
    document.getElementById("square").style.backgroundColor = "blue"

});

change.addEventListener("mousedown", function(){
    change.style.backgroundColor = "red"
});

change.addEventListener("mouseup", function(){
    change.style.backgroundColor = "yellow"
});

change.addEventListener("dblclick", function(){
    change.style.backgroundColor = "green"
});

window.addEventListener("scroll", function(){
    change.style.backgroundColor = "orange"
});

document.addEventListener("keydown", function(event){
    if (event.code === "KeyR"){
        change.style.backgroundColor = "red";
    }else if(event.code === "KeyG"){
change.style.backgroundColor = "green";
    }else if(event.code === "KeyB"){
        change.style.backgroundColor = "brown"
    }else if(event.code === "KeyL"){
        change.style.backgroundColor = "lightblue"
    }else if(event.code === "KeyP"){
        change.style.backgroundColor = "peru"
    }
});



