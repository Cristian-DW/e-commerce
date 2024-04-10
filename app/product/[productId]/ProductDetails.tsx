'use client';

import Image from 'next/image';
import SetColor from '@/app/components/products/SetColor';
import {Rating} from '@mui/material';
import { useCallback, useState } from 'react';
import SetQuantity from '@/app/components/products/setQuantity';
import Button from '@/app/components/products/button';


interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
}

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
}

const HorizontalLine = () => <hr className="w-[30%] my-2" />;

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

  const[cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: product.images && product.images.length > 0 ? Object.assign({}, product.images[0]) : null,
    quantity: 1,
    price: product.price
  });

    console.log(cartProduct);

  const productRating =
    product.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product.reviews.length;

    const handleColorSelect = useCallback((value: SelectedImgType) => {
      setCartProduct((prev) => {
        return {...prev, selectedImg: value};
      });
    }, 
    [cartProduct.selectedImg]
    );

    const handleQtyIncrease = useCallback(() => {

      if(cartProduct.quantity === 99) {
        return;
      }

      setCartProduct((prev) => {
        return {...prev, quantity: prev.quantity + 1};
      });

    }, [cartProduct])

    
    const handleQtyDecrease = useCallback(() => {
      if(cartProduct.quantity === 1) {
        return;
      }

      setCartProduct((prev) => {
        return {...prev, quantity: prev.quantity - 1};

      });
    }, [cartProduct])


  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-12">
      <div>Images</div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-bold mb-4 text-slate-700"> {product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
          <HorizontalLine />
        </div>
        <div className="text-justify"> {product.description}</div>
        <HorizontalLine />
        <div> <span className='font-semibold'>CATEGORY:</span> {product.category}</div>
        <div> <span className='font-semibold'>BRAND:</span> {product.brand}</div>
        <div className='{product.inStock ? "text-teal-500" : "text-rose-500"}'>{product.inStock ? "In Stock" : "Out of Stock"}</div>
        <HorizontalLine/>
        <SetColor 
        cartProduct={cartProduct}
        images={product.images}
        handColorSelect={handleColorSelect}
        />
        <HorizontalLine/>
        <SetQuantity 
        cartProduct={cartProduct}
        handleQtyDecrease={handleQtyDecrease}
        handleQtyIncrease={handleQtyIncrease}
        />
        <HorizontalLine/>
        <div className='max-w[300px]'>
          <Button 
          label="ADD TO CART"
          onClick={() => console.log("Add to cart")}
          />
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;