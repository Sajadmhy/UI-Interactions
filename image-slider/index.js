const icons = document.getElementsByClassName("icon");
const pics = document.querySelectorAll("img");
const leftArr = document.getElementById("left-arrow");
const rightArr = document.getElementById("right-arrow");

function enlargeImg() {
    for (let i=0; i<icons.length; i++) {
        icons[i].addEventListener("click", function(){
            clearClass();
            pics[i].classList.add("focus");
        })
    }

}

function leftArrow() {
        if (pics[0].classList.contains("focus") == true) {
        clearClass();
        pics[2].classList.add("focus");
    } else if (pics[1].classList.contains("focus") == true) {
        clearClass();
        pics[0].classList.add("focus");
    } else if (pics[2].classList.contains("focus") == true) {
        clearClass();
        pics[1].classList.add("focus");
    };
};


leftArr.addEventListener("click", function(){
 leftArrow()
});


(function rightArrow() {
            rightArr.addEventListener("click", function(){
                if (pics[0].classList.contains("focus") == true) {
                clearClass();
                pics[1].classList.add("focus");
            } else if (pics[1].classList.contains("focus") == true) {
                clearClass();
                pics[2].classList.add("focus");
            } else if (pics[2].classList.contains("focus") == true) {
                clearClass();
                pics[0].classList.add("focus");
            }
        })
    })();


function clearClass() {
    for (let i=0; i<icons.length; i++){
        if (pics[i].classList.contains("focus")== true) {
            pics[i].classList.remove("focus");
        } 
    }
};

enlargeImg();

function timerAddClass() {
    setInterval(leftArrow, 5000)
};

timerAddClass();