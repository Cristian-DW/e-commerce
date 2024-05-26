'use client';

import SetColor from '@/app/components/products/SetColor';
import {Rating} from '@mui/material';
import { useCallback, useState, useEffect } from 'react';
import SetQuantity from '@/app/components/products/setQuantity';
import Button from '@/app/components/button';
import ProductImage from '@/app/components/products/ProductImage';
import { useCart } from '@/hooks/UseCart';
import { MdCheckCircle } from 'react-icons/md';
import { useRouter } from 'next/navigation';


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

/**
 * ProductDetails Component
 *
 * This component displays the detailed view of a product, including its images, description,
 * rating, and options to select color and quantity. It also provides functionality to add the 
 * product to the shopping cart.
 *
 * @component
 * @example
 * const product = { id: '1', name: 'Product Name', description: 'Product Description', category: 'Category', brand: 'Brand', images: [], price: 100, reviews: [] };
 * return (
 *   <ProductDetails product={product} />
 * )
 */

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg:
      product.images && product.images.length > 0
        ? Object.assign({}, product.images[0])
        : null,
    quantity: 1,
    price: product.price,
  });

  const router = useRouter();

  console.log(cartProduct);

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const productRating =
    product.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity === 99) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-12">
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-bold mb-4 text-slate-700">
          {" "}
          {product.name}
        </h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
          <HorizontalLine />
        </div>
        <div className="text-justify"> {product.description}</div>
        <HorizontalLine />
        <div>
          {" "}
          <span className="font-semibold">CATEGORY:</span> {product.category}
        </div>
        <div>
          {" "}
          <span className="font-semibold">BRAND:</span> {product.brand}
        </div>
        <div className='{product.inStock ? "text-teal-500" : "text-rose-500"}'>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <HorizontalLine />
        {isProductInCart ? (
          <>
          <p className='mb-2 text-slate-500 flex items-center gap-2'>
            <MdCheckCircle size={20} className="text-teal-500" />
            <span>Product added to cart</span>
          </p>
          <div className='max-w-[300px]'>
            <Button label="View Cart" onClick={() => {
              router.push("/cart");
            }} />
          </div>
          </>
        ) : (
          <>
            <SetColor
              cartProduct={cartProduct}
              images={product.images}
              handColorSelect={handleColorSelect}
            />
            <HorizontalLine />
            <SetQuantity
              cartProduct={cartProduct}
              handleQtyDecrease={handleQtyDecrease}
              handleQtyIncrease={handleQtyIncrease}
            />
            <HorizontalLine />
            <div className="max-w[300px]">
              <Button
                label="ADD TO CART"
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
