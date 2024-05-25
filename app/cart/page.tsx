import Container from "../components/Container";
import CartClient from "./CartClient";

/**
 * Cart Component
 * 
 * This component serves as the main container for the shopping cart page. It uses the `Container`
 * component to provide a consistent layout and includes the `CartClient` component to handle
 * the display and functionality of the shopping cart.
 * 
 * @component
 * @example
 * return (
 *   <Cart />
 * )
 */
const Cart = () => {
  return (
    <div className="pt-8">
      <Container>
        <CartClient />
      </Container>
    </div>
  );
}

export default Cart;
