function toggleDisplay() {
    document.getElementById("nav")
    .addEventListener("click", function() {
        const items = document.getElementsByClassName("item")
        for (let i=0; i<items.length; i++){
        items[i].classList.toggle("invisible");
    }
    });
};

toggleDisplay();

