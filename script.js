var isStatus = document.querySelector("h6");
var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var container = document.querySelector("#container");
var container02 = document.querySelector("#container02");

add.addEventListener("click", function () {
    isStatus.textContent = "Your Friend";
    isStatus.style.color = "green";
    add.style.display = "none"; 
    remove.style.display = "inline-block"; 
});

remove.addEventListener("click", function () {
    if (isStatus.textContent === "Your Friend") {
        isStatus.textContent = "Strangers";
        isStatus.style.color = "red";
        add.style.display = "inline-block"; 
        remove.style.display = "none"; 
    } else {
        container.style.display = "none";
        container02.style.display = "block";
    }
});
