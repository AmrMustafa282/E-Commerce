import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
 return twMerge(clsx(inputs));
}

export const formater = (price) => {
 const formattedPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EGY",
  minimumFractionDigits: 0,
 }).format(price);

 return formattedPrice;
};
