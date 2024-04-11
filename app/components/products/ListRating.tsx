"use client"

import Heading from "../Heading";

interface ListRatingProps {
   product: any;
}
  

const ListRating: React.FC<ListRatingProps> = ({product}) => {

   return (
      <div>
         <Heading title="Product Reviews" />
      </div>
   )
}

export default ListRating