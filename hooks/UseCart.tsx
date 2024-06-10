import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { toast } from 'react-hot-toast';

/**
 * Type definition for the Cart context.
 */
type CartContextType = {
   cartTotalQty: number;
   cartProducts: CartProductType[] | null;
   handleAddProductToCart: (product: CartProductType) => void;
   handleRemoveProductFromCart: (product: CartProductType) => void;
   handleCartQtyIncrease: (product: CartProductType) => void;
   handleCartQtyDecrease: (product: CartProductType) => void;
   handleClearCart: () => void;
}

/**
 * Context for the shopping cart.
 */
export const CartContext = createContext<CartContextType | null>(null);

interface Props {
   [PropName: string]: any;
}

/**
 * Provider component for the Cart context. It manages the state and actions related to the shopping cart.
 * @param props The properties passed to the provider.
 * @returns The CartContext.Provider component with the cart state and actions.
 */
export const CartContextProvider = (props: Props) => {
   const [cartTotalQty, setCartTotalQty] = useState(10);
   const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

   useEffect(() => {
      const cartItems: any = localStorage.getItem('eShopCartItems');
      const cartProducts: CartProductType[] | null = JSON.parse(cartItems);

      setCartProducts(cartProducts);
   }, []);

   const handleAddProductToCart = useCallback((product: CartProductType) => {
      setCartProducts((prev) => {
         let updatedCart;
         if (prev) {
            updatedCart = [...prev, product];
         } else {
            updatedCart = [product];
         }

         toast.success('Product added to cart');
         localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
         return updatedCart;
      });
   }, []);

   const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
      if (cartProducts) {
         const filteredProducts = cartProducts.filter((item) => {
            return item.id !== product.id;
         });

         setCartProducts(filteredProducts);
         toast.success('Product removed from cart');
         localStorage.setItem('eShopCartItems', JSON.stringify(filteredProducts));
      }
   }, [cartProducts]);

   const handleCartQtyIncrease = useCallback((product: CartProductType) => {
      let updatedCart;

      if (product.quantity === 99) {
         return toast.error('You cannot add more than 99 items');
      }

      if (cartProducts) {
         updatedCart = [...cartProducts];

         const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

         if (existingIndex > -1) {
            updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity;
         }

         setCartProducts(updatedCart);
         localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
      }
   }, [cartProducts]);

   const handleCartQtyDecrease = useCallback((product: CartProductType) => {
      let updatedCart;

      if (product.quantity === 1) {
         return toast.error('You cannot have less than 1 item');
      }

      if (cartProducts) {
         updatedCart = [...cartProducts];

         const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

         if (existingIndex > -1) {
            updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity;
         }

         setCartProducts(updatedCart);
         localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
      }
   }, [cartProducts]);

   const handleClearCart = useCallback(() => {
      setCartProducts(null);
      setCartTotalQty(0);
      localStorage.setItem('eShopCartItems', JSON.stringify(null));
   }, [cartProducts]);

   const value = {
      cartTotalQty,
      cartProducts,
      handleAddProductToCart,
      handleRemoveProductFromCart,
      handleCartQtyIncrease,
      handleCartQtyDecrease,
      handleClearCart,
   };

   return <CartContext.Provider value={value} {...props} />;
};

/**
 * Custom hook to use the Cart context.
 * @returns The cart context value.
 * @throws Error if used outside of CartProvider.
 */
export const useCart = () => {
   const context = useContext(CartContext);

   if (context === null) {
      throw new Error('useCart must be used within a CartProvider');
   }

   return context;
}
