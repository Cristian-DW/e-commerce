'use client'

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

/**
 * Props for the SetQuantity component.
 */
interface SetQtyProps {
   /**
    * Flag to indicate if the cart counter should be displayed.
    */
   cartCounter?: boolean;
   
   /**
    * The product in the cart, including its quantity.
    */
   cartProduct: CartProductType;

   /**
    * Function to handle the increase in product quantity.
    */
   handleQtyIncrease: () => void;

   /**
    * Function to handle the decrease in product quantity.
    */
   handleQtyDecrease: () => void;
}

/**
 * Styles for the buttons used in the SetQuantity component.
 */
const btnStyles = 'border-[1.2px] text-[1.4rem] hover:opacity-[0.8] cursor-pointer';

/**
 * A React component to set and display the quantity of a product in the cart.
 * @param props The properties for the component, including cartCounter, cartProduct, handleQtyIncrease, and handleQtyDecrease.
 */
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
            <button onClick={handleQtyDecrease} className={btnStyles}>-</button>
            <div>{cartProduct.quantity}</div>
            <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
         </div>
      </div>
   );
}

export default SetQuantity;
