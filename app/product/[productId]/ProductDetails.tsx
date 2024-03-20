'use client';

import {Rating} from '@mui/material';
interface ProductDetailsProps {
   product : any
}

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {

   const productRating= product.reviews.reduce((acc:number, item:any) => acc + item.rating, 0) / product.reviews.length

   return (
      <div className="grid grid-cols-1  md:grid-cols-2 gap-12">
         <div>Images</div> 
         <div className='flex flex-col gap-1 text-slate-500 text-sm'>
            <h2 className="text-3xl font-bold mb-4 text-slate-700">{product.name}</h2>
            <div className='flex items-center gap-2'>
               <Rating value={productRating} readOnly />
               <div>
                  {product.reviews.length} reviews
               </div>
            </div>
         </div> 
      </div>
   );
}

export default ProductDetails;