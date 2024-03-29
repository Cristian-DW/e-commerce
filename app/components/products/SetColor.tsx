'use client'

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails"

interface SetColorProps {
   images: SelectedImgType[],
   carttProduct: CartProductType,
   handColorSelected: (value: SelectedImgType) => void
}

const SetColor: React.FC<SetColorProps> = ({images, carttProduct, handColorSelected}) => {
   return (
      <div>
         
      </div>
   )
}

export default SetColor