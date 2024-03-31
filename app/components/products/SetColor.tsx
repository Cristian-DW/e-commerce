'use client'

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails"

interface SetColorProps {
   images: SelectedImgType[],
   cartProduct: CartProductType,
   handColorSelected: (value: SelectedImgType) => void
}

const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct,
  handColorSelected,
}) => {
  return (
    <div>
      <div>
        <span className="flex gap-4 items-center">COLOR:</span>
        <div>
          {images &&
            images.map((image) => {
              return (
                <div
                  className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center
              ${cartProduct.selectedImg.color === image.color ? "border-2" : ""}
              `}
                >
                  <div></div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SetColor;