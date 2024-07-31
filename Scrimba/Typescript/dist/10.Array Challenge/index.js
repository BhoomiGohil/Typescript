// Array Types mini-challenge
// Can you assign the correct Type to the reviews const? Please bear in mind everything
// we have learnt about String, Boolean, Number, Object and Array Types for this.
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
var reviewTotalDisplay = document.querySelector("#reviews");
var isOpen;
var reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: true,
        date: "01-04-2021",
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: false,
        date: "28-03-2021",
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: true,
        date: "27-03-2021",
    },
];
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = isLoyalty ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
        "review total " +
            value.toString() +
            "| last reviewed by " +
            reviewer +
            " " +
            iconDisplay;
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
var you = {
    firstName: "Bobby",
    lastName: "Brown",
    isReturning: true,
    age: 35,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.firstName);
export {};
