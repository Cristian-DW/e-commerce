"use client"

import Heading from "../Heading";
import moment from "moment";
import { Rating } from "@mui/material";
import Avatar from "../Avatar";

interface ListRatingProps {
   product: any;
}
  

const ListRating: React.FC<ListRatingProps> = ({product}) => {

   return (
      <div>
         <Heading title="Product Reviews" />
         <hr className="w-[12%] mb-4 border-1 "/>
         <div className="text-sm mt-2">
         { product.reviews && product.reviews.map((review: any) => {
            return (
               <div key={review.id}
               className="max-w-300px">
                  <div className="flex gap-2 items-center">
                     <Avatar src={review?.user.image}/>
                     <div className="font-semibold">{review?.user.name}</div>
                     <div className="font-light text-pretty" >{moment(review.createdDate).fromNow()}</div>
                  </div>
                  <div className="mt-2">
                     <Rating value={review.rating} readOnly />
                     <div >{review.comment}</div>
                     <hr  className="mt-4 mb-4"/>
                  </div>
               </div>
            )
         })}
         </div>
      </div>
   )
}

export default ListRating;