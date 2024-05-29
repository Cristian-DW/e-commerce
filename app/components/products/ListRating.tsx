"use client";

import React from 'react';
import Heading from "../Heading";
import moment from "moment";
import { Rating } from "@mui/material";
import Avatar from "../Avatar";

interface ListRatingProps {
  product: any;
}

/**
 * ListRating Component
 *
 * This component displays the list of reviews for a given product.
 * It includes the user's avatar, name, rating, and comment, along with the time since the review was created.
 *
 * @component
 * @example
 * const product = { reviews: [{ id: 1, user: { image: '', name: 'John Doe' }, rating: 5, comment: 'Great product!', createdDate: '2023-05-21' }] };
 * return (
 *   <ListRating product={product} />
 * )
 *
 * @param {Object} product - The product object containing reviews.
 * @param {Array} product.reviews - Array of reviews for the product.
 * @returns {JSX.Element} The rendered ListRating component
 */
const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      <Heading title="Product Reviews" />
      <hr className="w-[12%] mb-4 border-1 " />
      <div className="text-sm mt-2">
        {product.reviews && product.reviews.map((review: any) => {
          return (
            <div key={review.id} className="max-w-300px">
              <div className="flex gap-2 items-center">
                <Avatar src={review?.user.image} />
                <div className="font-semibold">{review?.user.name}</div>
                <div className="font-light text-pretty">{moment(review.createdDate).fromNow()}</div>
              </div>
              <div className="mt-2">
                <Rating value={review.rating} readOnly />
                <div>{review.comment}</div>
                <hr className="mt-4 mb-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListRating;
