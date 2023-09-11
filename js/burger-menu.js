const checkbox = document.getElementById("burger");
checkbox.addEventListener("click", () => {
    document.body.style.overflowY = checkbox.checked === true ? "hidden" : "visible";
});

document.getElementById('burger__menu-photos').addEventListener('click', function() {
    checkbox.checked = false;
    document.body.style.overflowY = "visible";
});

