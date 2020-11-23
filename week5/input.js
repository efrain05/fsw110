
function popUp(e){
    e.preventDefault();
    var firstName= document.getElementById("name").value;
    var lastName = document.getElementById("last").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var location = [...document.querySelectorAll('option[name="location"]:checked')].map(e => e.value);
    var res = [...document.querySelectorAll('input[name="res"]:checked')].map(e => e.value);

  return alert("First name:" + firstName + "\n" + "Last name:" + lastName + "\n" + "Age:" + age + "\n" + "Gender:" + gender +  "\n" + "Location:" + location + "\n" + "Dietary restrictions:" + res )
   
  }

  
  
