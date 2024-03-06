"use client";
import { trucateText } from "@/utils/trucateText";
import Image from "next/image";

interface ProductCardsProps {
   data: any;
}

const ProductCards: React.FC<ProductCardsProps> = ({ data }) => {
  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:bg-slate-100 text-center text-sm">
      <div className="flex flex-col gap-2 items-center w-full ">
        <div className="aspect-square overflow-hidden w-full">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className=" w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">
         {trucateText(data.name)}
        </div>
        <div>
         
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductCards;