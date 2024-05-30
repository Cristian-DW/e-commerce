import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "@/app/components/products/listRating";
import { products } from "@/utils/products";

interface IParams {
  productId?: string;
}

/**
 * Product Component
 *
 * This component retrieves a product based on the given productId parameter,
 * displays the product details, and includes a section for product ratings.
 *
 * @component
 * @param {Object} props - Component props
 * @param {IParams} props.params - Parameters containing the productId
 * @returns {JSX.Element} The rendered component
 * @example
 * const params = { productId: '1' };
 * return <Product params={params} />
 */
const Product = ({ params }: { params: IParams }) => {
  console.log("params", params);

  // Find the product based on the productId
  const product = products.find((item) => item.id === params.productId);

  return (
    <div className="p-8">
      <Container>
        {/* Display the product details */}
        <ProductDetails product={product} />
        
        {/* Section for adding and displaying ratings */}
        <div className="flex flex-col mt-3">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
