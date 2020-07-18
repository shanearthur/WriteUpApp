let indicator = document.getElementById("indicator");
let textbox = document.getElementById("textbox");

    document.getElementById("start").addEventListener("click", function() {
        indicator.style.color = "red";
        textbox.style.color = "white";
        textbox.focus();
    });

    document.getElementById("end").addEventListener("click", function() {
        indicator.style.color = "black";
        textbox.style.color = "black";
    })