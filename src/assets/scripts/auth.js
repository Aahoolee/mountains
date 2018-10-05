console.log("auth module loaded");

const authBtn = document.querySelector(".js-auth-btn");
const mainBtn = document.querySelector(".js-main-btn");
const cardFront = document.querySelector(".welcome__card-front");
const cardBack = document.querySelector(".welcome__card-back");


authBtn.onclick = function () {
    cardFront.style.transform = "rotateY(180deg)";
    cardBack.style.transform = "rotateY(360deg)";
    authBtn.style.display = 'none'

};

mainBtn.onclick = function () {
    cardBack.style.transform = "rotateY(180deg)";
    cardFront.style.transform = "rotateY(360deg)";
    authBtn.style.display = 'block'
};

