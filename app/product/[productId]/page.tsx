import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import {product} from "@/utils/product";

interface IPrams {
   productId?: string;
}


const Product = ({params} : {params: IPrams}) => {
   console.log("params", params)
   product
   return (
      <div className="p-8">
         <Container>
            <ProductDetails product={params.productId}/>
         </Container>
         Product</div>
   )
};
export default Product;