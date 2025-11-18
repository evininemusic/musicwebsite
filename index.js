"use strict";

// Function openMenu() opens the menu.
function openMenu() {
    // Makes menu and page cover visible.
    document.getElementById("js-page-cover").style.display = "block";
    document.getElementById("js-menu").style.width = "26rem";
    document.getElementById("js-menu-website-link-1").style.fontSize = "2.7rem";
    document.getElementById("js-menu-website-link-2").style.fontSize = "2.7rem";
    document.getElementById("js-menu-website-link-3").style.fontSize = "2.7rem";
    document.getElementById("js-close-menu-button").style.width = "2rem";
    // Adds menu close function when escape is pressed while open.
    document.body.addEventListener('keydown', function(e) {
        if (e.key == "Escape") {
            if (document.getElementById("js-page-cover").style.display == "block") {
                closeMenu();
            }}})}

// Function closeMenu() closes the menu.
function closeMenu() {
    // Makes menu and page cover hidden.
    document.getElementById("js-page-cover").style.display = "none";
    document.getElementById("js-menu").style.width = "0";
    document.getElementById("js-menu-website-link-1").style.fontSize = "0";
    document.getElementById("js-menu-website-link-2").style.fontSize = "0";
    document.getElementById("js-menu-website-link-3").style.fontSize = "0";
    document.getElementById("js-close-menu-button").style.width = "0";
}