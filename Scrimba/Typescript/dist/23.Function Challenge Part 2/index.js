// Function Types challenge - Pass the code review
// 1. Add types to the function that returns the top 2 reviews specifically based on
// descending order. Make sure to use what you learned in the previous lessons.
// 2. Add types to the function in this file that shows the reviews when we click the button
import { showReviewTotal, populateUser, showDetails, getTopTwoReviews, } from "./utils.js";
import { Permissions, LoyaltyUser } from "./enums.js";
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
var you = {
    firstName: "Bobby",
    lastName: "Brown",
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
// Array of Properties
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
            code: 35433,
            country: "United Kingdom",
        },
        contact: [+34829374892553, "andyluger@aol.com"],
        isAvailable: true,
    },
];
// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
// Add the properties
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = properties[i].title;
    var image = document.createElement("img");
    image.setAttribute("src", properties[i].image);
    card.appendChild(image);
    showDetails(you.permissions, card, properties[i].price);
    propertyContainer.appendChild(card);
}
var currentLocation = ["London", "11.03", 17];
footer.innerHTML =
    currentLocation[0] +
        " " +
        currentLocation[1] +
        " " +
        currentLocation[2] +
        "°";
//Broken code
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
button.addEventListener("click", function () { return addReviews(reviews); });
