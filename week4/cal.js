// function add(a,b){
//     return a + b

// }
function add() {
    var a= document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var x = +a + +b;
    document.getElementById("answer").innerHTML = x;
    
  }

  function subtract() {
    var c= document.getElementById("num3").value;
    var d = document.getElementById("num4").value;
    var y = +c - +d;
    document.getElementById("answer").innerHTML = y;
  }

  function multiply() {
    var e= document.getElementById("num5").value;
    var f = document.getElementById("num6").value;
    var j = +e * +f;
    document.getElementById("answer").innerHTML = j;
  }


