var header = document.createElement("h1");
header.textContent = "Welcome to my JS site";
document.body.append(header);

var par = document.createElement("p");
par.textContent = "All of this was created with JavaScript";
document.body.append(par);



var listItem = document.createElement("ol");
listItem.textContent = "Learn About Javascript";


var firstList = document.createElement("li");
firstList.textContent = "Learn";
listItem.append(firstList);


var secondList = document.createElement("li");
secondList.textContent = "About";
listItem.append(secondList);

var thirdList = document.createElement("li");
thirdList.textContent = "Javascript";
listItem.append(thirdList);




document.body.append(listItem);

