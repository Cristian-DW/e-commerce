'use client';

import { CartContextProvider } from "@/hooks/UseCart";

/**
 * Props for the CartProvider component.
 */
interface CartProviderProps {
   /**
    * The child elements to be wrapped by the CartProvider.
    */
   children: React.ReactNode;
}

/**
 * A provider component that wraps its children with the CartContextProvider.
 * This allows any descendant components to access the cart context.
 * @param props The properties for the component, including children elements.
 * @returns The CartContextProvider wrapping the children elements.
 */
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
   return (
      <CartContextProvider>{children}</CartContextProvider>
   );
}

export default CartProvider;
