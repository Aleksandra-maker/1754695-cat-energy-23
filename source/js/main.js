
const buttonMenu = document.querySelector(".toggle");
const buttonIcon = document.querySelector(".toggle__icon");
const siteNavigation = document.querySelector(".main-nav");
const rangeSwitchWas = document.querySelector(".range__before");
const rangeSwitchWill = document.querySelector(".range__after");
const cover =  document.querySelector(".about-slider__screen-container--one");
const handle = document.querySelector(".range__handle");


buttonMenu.classList.remove("toggle--closed");
siteNavigation.classList.add("main-nav--closed");

buttonMenu.addEventListener("click", function () {
    if (buttonIcon.classList.contains("toggle__icon--opened")) {
        buttonIcon.classList.remove("toggle__icon--opened");
        buttonIcon.classList.add("toggle__icon--closed");
    } else {
        buttonIcon.classList.remove("toggle__icon--closed");
        buttonIcon.classList.add("toggle__icon--opened");
    }
});

buttonMenu.addEventListener("click", function () {
    if (siteNavigation.classList.contains("main-nav--closed")) {
        siteNavigation.classList.remove("main-nav--closed");
    } else {
        siteNavigation.classList.add("main-nav--closed");
    }   
});

rangeSwitchWas.addEventListener("click", function (evt) {
    evt.preventDefault();
    cover.classList.add("about-slider__screen-container--opened");
    cover.classList.remove("about-slider__screen-container--closed");
    handle.classList.add("range__handle--on");
    handle.classList.remove("range__handle--off");
});

rangeSwitchWill.addEventListener("click", function (evt) {
    evt.preventDefault();
    cover.classList.remove("about-slider__screen-container--opened");
    cover.classList.add("about-slider__screen-container--closed");
    handle.classList.add("range__handle--off");
    handle.classList.remove("range__handle--on");
});