
var buttonMenu = document.querySelector(".toggle");
var buttonIcon = document.querySelector(".toggle__icon");
var siteNavigation = document.querySelector(".main-nav");

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
})