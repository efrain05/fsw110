
function popUp(e){
    e.preventDefault();
    var firstName= document.getElementById("name").value;
    var lastName = document.getElementById("last").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var location = [...document.querySelectorAll('input[name="location"]:checked')].map(e => e.value);
    var res = [...document.querySelectorAll('input[name="res"]:checked')].map(e => e.value);

  return alert("First name:" + firstName + "\n" + "Last name:" + lastName + "\n" + "Age:" + age + "\n" + "Gender:" + gender +  "\n" + "Location:" + location + "\n" + "Dietary restrictions:" + res )
   
  }


var alertbutton = "Ok";
if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("box")) return;

    m = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    m.id = "box";

    alertObj = m.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    msg = alertObj.appendChild(d.createElement("p"));
    msg.innerHTML = txt;
    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "close";
    btn.appendChild(d.createTextNode(alertbutton));
    btn.onclick = function() { removeCustomAlert();return false; }

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("box"));
}
  
  
