/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */


let key = document.getElementById("output");

window.addEventListener("keypress", function(event){
    let pressed = event.key + " " + event.code + " " + event.which;
    key = pressed ;
    document.body.append(key);
})