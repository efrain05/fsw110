document.write("<a href= >");
document.write("Home" + "&nbsp&nbsp");
document.write("</a>"); 

document.write("<a href= >");
document.write("Blog" + "&nbsp&nbsp");
document.write("</a>");

document.write("<a href= >");
document.write("Contact" + "&nbsp&nbsp");
document.write("</a>");

document.write("<a href= >");
document.write("About");
document.write("</a>");


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

document.write("<a href= >");
document.write("Follow Us");
document.write("</a>"); 
document.body.append(footer)




