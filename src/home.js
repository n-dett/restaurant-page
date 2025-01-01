import brunchMeal from "./img/brunch-meal.jpg";

// Append div content on page load
export function homePage(){
    const contentDiv = document.getElementById('content');
    const homeDiv = document.createElement('div');
    const heading = document.createElement('h1');
    const hr = document.createElement('hr');
    const subheading = document.createElement('p');
    const body = document.querySelector("body");


    homeDiv.setAttribute('id', 'home-content');
    subheading.setAttribute('id', 'home-subheading');

    heading.textContent = 'Savor';
    subheading.textContent = 'Welcome to Savor, where great food and good company come together. Enjoy fresh, flavorful brunch made to start your day right.';

    homeDiv.append(heading);
    homeDiv.append(hr);
    homeDiv.append(subheading);

    body.style.backgroundImage = `url(${brunchMeal})`;

    contentDiv.append(homeDiv);
}