// ======================================
// FOODIE NAVIGATION
// ======================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const sectionId = link.getAttribute("href");

        // LET OTHER HTML PAGES OPEN NORMALLY
        if (sectionId && sectionId.endsWith(".html")) {
            return;
        }

        // HANDLE HOME AND MENU
        if (sectionId && sectionId.startsWith("#")) {

            const section = document.querySelector(sectionId);

            if (section) {

                event.preventDefault();

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});


// ======================================
// FOOD INFORMATION
// ======================================

const foodTypes = {

    pizza: {
        title: "Pizza",
        types: [
            {
                name: "Margherita Pizza",
                description: "A classic pizza made with tomato sauce, mozzarella cheese and fresh basil."
            },
            {
                name: "Pepperoni Pizza",
                description: "A popular pizza topped with cheese and spicy pepperoni slices."
            },
            {
                name: "Hawaiian Pizza",
                description: "A sweet and savoury pizza topped with ham and pineapple."
            }
        ]
    },

    burger: {
        title: "Burger",
        types: [
            {
                name: "Cheeseburger",
                description: "A delicious burger containing a beef patty, melted cheese and fresh vegetables."
            },
            {
                name: "Chicken Burger",
                description: "A burger filled with crispy or grilled chicken, lettuce and tasty sauce."
            },
            {
                name: "Veggie Burger",
                description: "A burger made with a vegetable-based patty and fresh toppings."
            }
        ]
    },

    chicken: {
        title: "Chicken",
        types: [
            {
                name: "Fried Chicken",
                description: "Chicken coated in seasoned flour and cooked until crispy."
            },
            {
                name: "Grilled Chicken",
                description: "Chicken cooked on a grill and flavoured with herbs and spices."
            },
            {
                name: "Roast Chicken",
                description: "Chicken cooked in an oven until tender and golden."
            }
        ]
    }

};


// ======================================
// MAKE FOOD CARDS CLICKABLE
// ======================================

const foodCards = document.querySelectorAll(".food-card");

foodCards.forEach(function(card) {

    card.style.cursor = "pointer";

    card.addEventListener("click", function() {

        const heading = card.querySelector("h3");

        if (heading) {

            const foodName = heading.textContent.trim().toLowerCase();

            if (foodTypes[foodName]) {

                window.location.href = "food.html?food=" + foodName;

            }

        }

    });

});


// ======================================
// BACK TO TOP BUTTON
// ======================================

const backToTop = document.createElement("button");

backToTop.textContent = "↑";

backToTop.id = "backToTop";

backToTop.title = "Back to Top";

document.body.appendChild(backToTop);


// STYLE THE BUTTON

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "48px";
backToTop.style.height = "48px";
backToTop.style.border = "2px solid #ff8c00";
backToTop.style.borderRadius = "50%";
backToTop.style.backgroundColor = "#171717";
backToTop.style.color = "#ff8c00";
backToTop.style.fontSize = "25px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "1000";
backToTop.style.boxShadow = "0 0 12px #ff8c00";
backToTop.style.transition = "0.3s";


// SHOW BUTTON WHEN SCROLLING

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


// BUTTON HOVER EFFECT

backToTop.addEventListener("mouseenter", function() {

    backToTop.style.backgroundColor = "#ff8c00";
    backToTop.style.color = "black";
    backToTop.style.boxShadow = "0 0 20px #ff8c00";

});


backToTop.addEventListener("mouseleave", function() {

    backToTop.style.backgroundColor = "#171717";
    backToTop.style.color = "#ff8c00";
    backToTop.style.boxShadow = "0 0 12px #ff8c00";

});


// TAKE USER TO THE TOP

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});