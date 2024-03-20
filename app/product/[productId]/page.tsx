
interface IPrams {
   ProductId?: string;
}


const Product = ({params} : {params: IPrams}) => {

   return (
      <div>Product</div>
   )
};
export default Product;