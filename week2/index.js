var header = document.createElement("h1")
header.textContent = "Welcome to my JS site"
document.body.append(header)

var par = document.createElement("p")
par.textContent = "All of this was created with JavaScript"
document.body.append(par)

var listItem = document.createElement("li")
listItem.textContent = "About"
var list = document.getElementById("list")
list.append(listItem)
document.body.append(list)

var listItem = document.createElement("li")
listItem.textContent = "DOM"
var list = document.getElementById("list")
list.append(listItem)
