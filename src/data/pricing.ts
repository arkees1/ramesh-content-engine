import { Plan } from "./features";

export const PRICING: Record<Plan, {
  price: string;
  credits: number;
  label: string;
  highlight?: boolean;
}> = {
  FREE: {
    price: "₹0",
    credits: 50,
    label: "Get started for free"
  },
  MEDIUM: {
    price: "₹299 / month",
    credits: 200,
    label: "Best for professionals",
    highlight: true
  },
  PREMIUM: {
    price: "₹999 / month",
    credits: 500,
    label: "For power users & teams"
  }
};
