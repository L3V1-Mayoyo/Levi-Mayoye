// ======================================
// GET THE SELECTED FOOD FROM THE URL
// ======================================

const urlParams = new URLSearchParams(window.location.search);
const foodName = urlParams.get("food");


// ======================================
// GET HTML ELEMENTS
// ======================================

const heading = document.getElementById("food-heading");
const description = document.getElementById("food-description");

const pizzaImage = document.getElementById("pizza-image-container");
const burgerImage = document.getElementById("burger-image-container");
const chickenImage = document.getElementById("chicken-image-container");


// ======================================
// HIDE ALL FOOD IMAGES FIRST
// ======================================

pizzaImage.style.display = "none";
burgerImage.style.display = "none";
chickenImage.style.display = "none";


// ======================================
// PIZZA MENU
// ======================================

if (foodName === "pizza") {

    heading.textContent = "Our Delicious Pizzas";

    description.textContent =
        "Choose from our three delicious pizza favourites!";

    pizzaImage.style.display = "block";

}


// ======================================
// BURGER MENU
// ======================================

else if (foodName === "burger") {

    heading.textContent = "Our Delicious Burgers";

    description.textContent =
        "Explore our three delicious burger favourites!";

    burgerImage.style.display = "block";

}


// ======================================
// CHICKEN MENU
// ======================================

else if (foodName === "chicken") {

    heading.textContent = "Our Delicious Chicken";

    description.textContent =
        "Discover our three delicious chicken favourites!";

    chickenImage.style.display = "block";

}


// ======================================
// NO FOOD SELECTED
// ======================================

else {

    heading.textContent = "Welcome to Foodie";

    description.textContent =
        "Go back to the menu and choose your favourite food!";

}