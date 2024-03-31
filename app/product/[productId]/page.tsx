import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import {product} from "@/utils/product";

interface IPrams {
   ProductId?: string;
}


const Product = ({params} : {params: IPrams}) => {
   console.log("params", params)
   return (
      <div className="p-8">
         <Container>
            <ProductDetails product={params.ProductId}/>
         </Container>
         Product</div>
   )
};
export default Product;