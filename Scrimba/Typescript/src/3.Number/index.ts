// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number

export {};

const reviewTotalDisplay = document.querySelector("#reviews") as HTMLDivElement;

const reviews = [
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

function showReviewsTotal(value: number) {
  reviewTotalDisplay.innerHTML = "Review Total " + value.toString();
}

showReviewsTotal(reviews.length);
