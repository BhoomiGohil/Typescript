import { showReviewTotal, populateUser, showDetails, getTopTwoReviews, } from "./utils.js";
import { Permissions, LoyaltyUser } from "./enums.js";
import { MainProperty } from "./classes.js";
var propertyContainer = document.querySelector(".properties");
var reviewContainer = document.querySelector(".reviews");
var container = document.querySelector(".container");
var button = document.querySelector("button");
var footer = document.querySelector(".footer");
// Reviews
var reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "01-04-2021",
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: "28-03-2021",
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: "27-03-2021",
        description: "Great hosts, location was a bit further than said.",
    },
];
// User
var you = {
    firstName: "Bobby",
    lastName: "Brown",
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
// Properties
var properties = [
    {
        image: "../images/colombia-property.jpg",
        title: "Colombian Shack",
        price: 45,
        location: {
            firstLine: "shack 37",
            city: "Bogota",
            code: 45632,
            country: "Colombia",
        },
        contact: [+112343823978921, "marywinkle@gmail.com"],
        isAvailable: true,
    },
    {
        image: "../images/poland-property.jpg",
        title: "Polish Cottage",
        price: 30,
        location: {
            firstLine: "no 23",
            city: "Gdansk",
            code: 343903,
            country: "Poland",
        },
        contact: [+1298239028490830, "garydavis@hotmail.com"],
        isAvailable: false,
    },
    {
        image: "../images/london-property.jpg",
        title: "London Flat",
        price: 25,
        location: {
            firstLine: "flat 15",
            city: "London",
            code: "35433",
            country: "United Kingdom",
        },
        contact: [+34829374892553, "andyluger@aol.com"],
        isAvailable: true,
    },
    {
        image: "../images/malaysian-hotel.jpeg",
        title: "Malia Hotel",
        price: 35,
        location: {
            firstLine: "Room 4",
            city: "Malia",
            code: "45334",
            country: "Malaysia",
        },
        contact: [+60349822083, "lee34@gmail.com"],
        isAvailable: false,
    },
];
// Webcome back text
populateUser(you.isReturning, you.firstName);
// Add new property using class
var yourMainProperty = new MainProperty([
    {
        name: "Olive",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "12-04-2021",
    },
], "../images/italian-property.jpg", "Italian House");
// Show new property image on the hero section
var mainImageContainer = document.querySelector(".main-image");
var image = document.createElement("img");
image.setAttribute("src", yourMainProperty.src);
image.setAttribute("alt", yourMainProperty.title);
mainImageContainer.appendChild(image);
// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
// Function for showing reviews using button
var count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        var topTwo = getTopTwoReviews(array);
        for (var i = 0; i < topTwo.length; i++) {
            var card = document.createElement("div");
            card.classList.add("review-card");
            card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
// Click on button to show reviews on page
button.addEventListener("click", function () { return addReviews(reviews); });
// Listed properties on page
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = properties[i].title;
    var image_1 = document.createElement("img");
    image_1.setAttribute("src", properties[i].image);
    card.appendChild(image_1);
    showDetails(you.permissions, card, properties[i].price);
    propertyContainer.appendChild(card);
}
// Add content to the Footer
var currentLocation = ["London", "11.03", 17];
footer.innerHTML =
    currentLocation[0] +
        " " +
        currentLocation[1] +
        " " +
        currentLocation[2] +
        "°";
