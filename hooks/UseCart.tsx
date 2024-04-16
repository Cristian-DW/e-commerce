import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import {createContext, useState, useContext, useCallback, useEffect } from 'react';



type CartContextType = {
   cartTotalQty: number;
   cartProducts: CartProductType[] | null;
   handleAddProductToCart: (product: CartProductType) => void;
}

export const CartContext = 
createContext<CartContextType | null>(null)

interface Props {
   [PropName: string]: any
}

export const CartContextProvider = (props: Props) => {
   const [cartTotalQty, setCartTotalQty] = useState(10);
   const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

   useEffect(() => {
      const cartItems : any = localStorage.getItem('eShopCartItems')
      cartProducts : CartProductType[] | null = JSON.parse(cartItems)

      setCartProducts(cProducts)
   },[])

   const handleAddProductToCart = useCallback((product: CartProductType) => {
      setCartProducts((prev) => {
         let updatedCart;
         if (prev) {
            updatedCart = [...prev, product]
         } else {
            updatedCart = [product]
         }

         localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))
         return updatedCart
      })
   }, [])

   const value = {
      cartTotalQty,
      cartProducts,

      
      handleAddProductToCart
   }
   
   return <CartContext.Provider value={value} {...props}/>
};

export const useCart = () => {
   const context = useContext(CartContext);

   if (context === null) {
      throw new Error('useCart must be used within a CartProvider');
   }

   return context;
}