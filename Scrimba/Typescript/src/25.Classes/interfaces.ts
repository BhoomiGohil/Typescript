import { LoyaltyUser } from "./enums";

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}

export interface ReviewD {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
  description: string;
}
