import { Review, ReviewD } from "./interfaces";

export class MainProperty {
  reviews: (Review | ReviewD)[];
  src: string;
  title: string;
  constructor(reviews: (Review | ReviewD)[], src: string, title: string) {
    this.reviews = reviews;
    this.src = src;
    this.title = title;
  }
}
