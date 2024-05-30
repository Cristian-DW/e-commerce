'use client'

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails"

interface SetColorProps {
  images: SelectedImgType[],
  cartProduct: CartProductType,
  handColorSelect: (value: SelectedImgType) => void
}

/**
 * SetColor Component
 *
 * This component allows the user to select a color for the product. It displays the available colors
 * and highlights the selected color.
 *
 * @component
 * @example
 * const images = [
 *   { color: 'red', colorCode: '#FF0000', image: '/red-image.jpg' },
 *   { color: 'blue', colorCode: '#0000FF', image: '/blue-image.jpg' }
 * ];
 * const cartProduct = {
 *   selectedImg: { color: 'red', colorCode: '#FF0000', image: '/red-image.jpg' }
 * };
 * const handColorSelect = (image) => console.log(image);
 * return (
 *   <SetColor
 *     images={images}
 *     cartProduct={cartProduct}
 *     handColorSelect={handColorSelect}
 *   />
 * );
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.images - The product images with color information.
 * @param {CartProductType} props.cartProduct - The cart product data.
 * @param {SelectedImgType} props.cartProduct.selectedImg - The selected image data.
 * @param {Function} props.handColorSelect - Function to handle color selection.
 * @returns {JSX.Element} The rendered SetColor component.
 */
const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct,
  handColorSelect,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="font-semibold">COLOR:</span>
        <div className="flex gap-1">
          {images && images.map((image) => {
            return (
              <div
                key={image.color}
                onClick={() => handColorSelect(image)}
                className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center
                ${cartProduct.selectedImg.color === image.color ? "border-[1.5px]" : "border-none"}
              `}
              >
                <div style={{backgroundColor: image.colorCode}} className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
