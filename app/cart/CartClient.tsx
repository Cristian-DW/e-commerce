'use client';

import { useCart } from "@/hooks/UseCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/button";

const CartClient = () => {
  const { cartProducts } = useCart();

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

  return (
    <div>
      <Heading title="Shopping cart" center />
      <div className="grid grid-cols-4 gap-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <div key={item.id}> {item.name} </div>;
          })}
      </div>
      <div className="border-t-[1.5px] border-slate-200 pt-4 flex justify-between gap-3">
        <div className=" w-[90px]">
          <Button label="Clear Cart" onClick={() => {}} small outlined />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start ">
          <div className="flex justify-between items-center text-base font-semibold">
            <span>Subtotal</span>
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
}

export default CartClient;
