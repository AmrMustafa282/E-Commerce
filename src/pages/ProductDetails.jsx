import Product from "@/components/Product";
import { Card, CardContent } from "@/components/ui/card";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
 CarouselScrollTo,
} from "@/components/ui/carousel";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
 const [index, setIndex] = useState(0);

 const { id: productId } = useParams();
 const product = {
  images: [
   "https://static.gigabyte.com/StaticFile/Image/Global/1ec377d6a9a75b133b557ceaa50e80d1/Product/23484",
   "https://static.gigabyte.com/StaticFile/Image/Global/1ec377d6a9a75b133b557ceaa50e80d1/Product/23483",
   "https://static.gigabyte.com/StaticFile/Image/Global/1ec377d6a9a75b133b557ceaa50e80d1/Product/23485",
  ],
  name: "name",
  desc: "desc",
  price: "price",
 };

 return (
  <div className="flex my-12 gap-12">
   <div className="flex-1">
    <div>
     <Carousel
      className="w-full "
      opts={{
       align: "start",
       loop: true,
       dragFree: true,
      }}
     >
      <CarouselContent className="">
       {product.images.map((slide, index) => (
        <CarouselItem key={index}>
         <div className="">
          <Card>
           <CardContent className="p-1">
            <img src={slide} alt="" />
           </CardContent>
          </Card>
         </div>
        </CarouselItem>
       ))}
       <CarouselScrollTo index={index} />
      </CarouselContent>
     </Carousel>
    </div>
    <div className="grid grid-cols-3 w-full gap-4">
     {product.images.map((img, index) => (
      <img src={img} alt={product.name} onClick={() => setIndex(index)} />
     ))}
    </div>
   </div>
   <div className="flex-1">
    <h2>{product.name}</h2>
    <p>{product.desc}</p>
    <h2>{product.price}</h2>
   </div>
  </div>
 );
};

export default ProductDetails;
