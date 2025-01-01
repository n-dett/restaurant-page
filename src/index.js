import "./styles.css";
import { homePage } from "./home";
import { aboutPage } from "./about";
import { menuPage } from "./menu";

console.log("Test message")

homePage();

// Switch tabs on button click
const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const aboutBtn = document.getElementById('about-btn');
const menuBtn = document.getElementById('menu-btn');


homeBtn.addEventListener('click', () => {
    clearContent();
    homePage();
})

aboutBtn.addEventListener('click', () => {
    clearContent();
    aboutPage();
})

menuBtn.addEventListener('click', () => {
    clearContent();
    menuPage();
})

function clearContent() {
    let lastChild = contentDiv.lastElementChild;
    while(lastChild) {
        contentDiv.removeChild(lastChild);
        lastChild = contentDiv.lastElementChild;
    }
}

