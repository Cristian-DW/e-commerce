'use client';

import { useCart } from "@/hooks/UseCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";

const CartClient = () => {
   const{cartProducts} = useCart();

   if (!cartProducts || cartProducts.length === 0){
      return (
         <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-2xl">Your cart is empty</div>
            <div>
               <Link href={"/"} className="text-blue-500 flex items-center gap-1 mt-2">
                  <MdArrowBack/>
                  <span>Start shopping</span>
               </Link>
            </div>
         </div>
      );
   }

   return (
      <div>
         <Heading title="Shopping cart" center/>
         <div className="grid grid-cols-4 gap-5 text-xs gap-4 pb-2 items-center mt-8">
            <div className="col-span-2 justify-self-start">PRODUCT</div>
            <div className="justify-self-center">PRICE</div>
            <div className="justify-self-center">QUANTITY</div>
            <div className="justify-self-end">TOTAL</div>
         </div>
         <div>
            {cartProducts && cartProducts.map((item) => {
               return <div key={item.id}> {item.name} </div>
         })}
         </div>
      </div>
   );
}

export default CartClient;
