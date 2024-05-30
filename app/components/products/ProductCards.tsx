"use client";

import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

interface ProductCardsProps {
  data: any;
}

/**
 * ProductCards Component
 *
 * This component renders a card for a product, displaying its image, name, rating, review count, and price.
 * Clicking on the card navigates to the product's detail page.
 *
 * @component
 * @example
 * const productData = {
 *   id: '1',
 *   name: 'Sample Product',
 *   reviews: [{ rating: 5 }, { rating: 4 }],
 *   images: [{ image: '/sample-image.jpg' }],
 *   price: 29.99
 * };
 * return (
 *   <ProductCards data={productData} />
 * )
 *
 * @param {Object} data - The product data.
 * @param {string} data.id - The product ID.
 * @param {string} data.name - The product name.
 * @param {Array} data.reviews - The product reviews.
 * @param {Array} data.images - The product images.
 * @param {number} data.price - The product price.
 * @returns {JSX.Element} The rendered ProductCards component
 */
const ProductCards: React.FC<ProductCardsProps> = ({ data }) => {
  const router = useRouter();

  // Calculate the average rating for the product
  const productRating =
    data.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    data.reviews.length;

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-white rounded-sm p-2 transition  hover:scale-105 hover:shadow-lg text-center text-sm"
    >
      <div className="flex flex-col gap-2 items-center w-full ">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={data.images[0].image}
            alt={data.name}
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold"> {formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCards;
