/**
 * Formats a number as a price in USD currency.
 * @param amount The amount to be formatted.
 * @returns A string representing the formatted price.
 */
export const formatPrice = (amount: number) => {
   return Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
};
