
var nav = document.createElement("nav");
document.body.appendChild(nav);
var navlink = document.createElement("a");
navlink.textContent = "Home  ";
navlink.setAttribute ("href",'http://google.com') 
nav.append(navlink);

var navlinkone = document.createElement("a");
navlinkone.textContent = "Blog  ";
navlinkone.setAttribute ("href",'https://www.javascript.com/learn/strings') 
nav.append(navlinkone);


var navlinktwo = document.createElement("a");
navlinktwo.textContent = "Contact  ";
navlinktwo.setAttribute ("href","") 
nav.append(navlinktwo);



// start of h1

var title = document.createElement("h1")
title.textContent = "My first project with Javascript"
document.body.append(title)

var par = document.createElement("p")
par.textContent = "So far I have learned how to build a simple website with Javascript."
document.body.append(par)



var listItem = document.createElement("ol");
listItem.textContent = "What I have learned about Javascript";


var firstList = document.createElement("li");
firstList.textContent = "How to create an element";
listItem.append(firstList);


var secondList = document.createElement("li");
secondList.textContent = "How to Select an id from HTML using getElementById";
listItem.append(secondList);

var thirdList = document.createElement("li");
thirdList.textContent = "How to create a ordered list in Javascript";
listItem.append(thirdList);
document.body.append(listItem);


var footer = document.createElement("footer");
footer.textContent = "Follow Us";
document.body.append(footer);

