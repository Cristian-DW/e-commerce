"use client";

import Image from "next/image";
import { SelectedImgType, CartProductType } from "@/app/product/[productId]/ProductDetails";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImgType) => void;
}

/**
 * ProductImage Component
 *
 * This component displays the product images and allows the user to select an image based on color.
 * The main product image updates based on the selected color.
 *
 * @component
 * @example
 * const productData = {
 *   images: [
 *     { color: 'red', image: '/red-image.jpg', colorCode: '#FF0000' },
 *     { color: 'blue', image: '/blue-image.jpg', colorCode: '#0000FF' }
 *   ]
 * };
 * const cartProductData = {
 *   selectedImg: { color: 'red', image: '/red-image.jpg', colorCode: '#FF0000' }
 * };
 * return (
 *   <ProductImage
 *     product={productData}
 *     cartProduct={cartProductData}
 *     handleColorSelect={(image) => console.log(image)}
 *   />
 * );
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.product - The product data.
 * @param {Array} props.product.images - The product images.
 * @param {CartProductType} props.cartProduct - The cart product data.
 * @param {SelectedImgType} props.cartProduct.selectedImg - The selected image data.
 * @param {Function} props.handleColorSelect - Function to handle image selection based on color.
 * @returns {JSX.Element} The rendered ProductImage component.
 */
const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (

    <div className="grid grid-cols-10 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] ">
      <div className="flex flex-col col-span-2 items-center justify-center  cursor-pointer p-10 h-full max-h-[500px] min-h-[300px]  sm:min-h-[400px]">
        {product.images.map((image: SelectedImgType) => {
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className="w-full h-full relative aspect-video hover:scale-110"
            >
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>

      <div className="col-start-4 col-span-5 relative aspect-square">
        <Image 
        fill 
        src={cartProduct.selectedImg.image}
        alt={cartProduct.selectedImg.color}
        className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"/>
      </div>
    </div>
  );
}

export default ProductImage;
