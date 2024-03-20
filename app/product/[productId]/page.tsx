import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";

interface IPrams {
   ProductId?: string;
}


const Product = ({params} : {params: IPrams}) => {



   return (
      <div className="p-8">
         <Container>
            <ProductDetails product={params.ProductId}/>
         </Container>
         Product</div>
   )
};
export default Product;