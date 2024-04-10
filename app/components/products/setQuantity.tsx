'use client'

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps {
   cartCounter?: boolean;
   cartProduct: CartProductType;
   handleQtyIncrease: () => void;
   handleQtyDecrease: () => void;
}

const btnStyles = 'border-[1.2px] text-[1.4rem] hover:opacity-[0.8] cursor-pointer'

const SetQuantity: React.FC<SetQtyProps> = ({
   cartCounter,
   cartProduct,
   handleQtyIncrease,
   handleQtyDecrease
}) => {
   return (
      <div className="flex items-center gap-8">
         {cartCounter ? null :  <div className="font-semibold">QUANTITY:</div>}
         <div className="flex items-center gap-4 text-base">
            <button onClick={handleQtyDecrease} 
            className={btnStyles}>-</button>
            <div>{cartProduct.quantity}</div>
            <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
         </div>
      </div>
   )

}

export default SetQuantity;