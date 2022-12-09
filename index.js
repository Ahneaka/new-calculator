let screen = document.getElementById("display");
function display(arg) {
    screen.textContent += arg;
}

function equal(){

    let result = eval(screen.textContent)
    screen.textContent = result
}

function clear() {
    let result = screen.textContent;

    result = "";

}
