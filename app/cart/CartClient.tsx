'use client';

import { useCart } from "@/hooks/UseCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/button";
import ItemContent from "./ItemContent";

/**
 * CartClient Component
 * 
 * This component handles the display and management of the shopping cart.
 * It utilizes the `useCart` hook to retrieve cart products and provides
 * functionalities to clear the cart and proceed to checkout.
 * 
 * @component
 * @example
 * return (
 *   <CartClient />
 * )
 */
const CartClient = () => {
  // Retrieve cart products and clear cart function from the useCart hook
  const { cartProducts, handleClearCart } = useCart();

  // Display message if the cart is empty
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-2xl">Your cart is empty</div>
        <div>
          <Link
            href={"/"}
            className="text-blue-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Start shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  // Display cart items and summary if the cart is not empty
  return (
    <div>
      {/* Heading for the shopping cart */}
      <Heading title="Shopping cart" center />
      
      {/* Cart items header */}
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8 px-10">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      
      {/* List of cart products */}
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>
      
      {/* Cart summary and actions */}
      <div className="border-t-[1.5px] border-slate-200 pt-4 flex justify-between gap-3">
        <div className="w-[120px]">
          <Button label="Clear Cart" onClick={() => { handleClearCart() }} small outlined />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="w-full flex justify-between items-center text-base font-semibold">
            <span>Subtotal:</span>
            <span>$1000</span>
          </div>
          <p className="text-slate-500">Taxes and shipping calculated at checkout</p>
          <Button label="Checkout" onClick={() => {}} />
          <Link
            href={"/"}
            className="text-blue-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Continue shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;

