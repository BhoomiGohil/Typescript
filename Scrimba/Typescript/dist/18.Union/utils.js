import { LoyaltyUser } from "./enums.js";
var reviewTotalDisplay = document.querySelector("#reviews");
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
export function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
        "review total " +
            value.toString() +
            "| last reviewed by " +
            reviewer +
            " " +
            iconDisplay;
}
export function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
function add(firstValue, secondValue) {
    var result;
    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
        result = firstValue + secondValue;
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'string') {
        result = firstValue + ' ' + secondValue;
    }
    if (typeof firstValue === 'number' && typeof secondValue === 'string') {
        console.log('cannot perform this addition');
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'number') {
        console.log('cannot perform this addition');
    }
}
var combinedReviews = add(5, 1);
var firstNameLastName = add('Ania', 'Kubow');
