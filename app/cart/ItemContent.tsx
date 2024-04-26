'use client'

import { CartProductType } from "../product/[productId]/ProductDetails";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { trucateText } from "@/utils/trucateText";
import Image from "next/image";

interface ItemContentProps {
   item : CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-[1.5px] border-slate-200 py-4 items-center">
      <div className="col-span-2 flex items-center gap-2 md:gap-4">
         <Link href={`/product/${item.id}`}>
            <div className="relative w-[130px] h-[130px] aspect-square">
               <Image src={item.selectedImg.image} alt={item.name} fill className="w-full h-full object-contain"/>
            </div> 
         </Link>
         <div className="flex flex-col justify-between text-base  md:text-xl">
            <Link href={`/product/${item.id}`}>
               {trucateText(item.name)}
            </Link>
            <div>{item.selectedImg.color}</div>
            <div className="w-[70px]"></div>
            <button className="text-blue-800  text-[11px] text-left mt-[1px]  hover:underline hover:text-red-600 " onClick={() => {}}>
               Delete
            </button>
         </div>

      </div>
      <div className="text-center text-base font-semibold md:text-lg">{formatPrice(item.price)}</div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ItemContent