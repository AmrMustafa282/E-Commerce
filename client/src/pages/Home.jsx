import { HomeCarousel } from "@/components/Carousel";
import { Button } from "@/components/ui/button";

import {
 Card,
 CardContent,
 CardFooter,
 CardHeader,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";
import { formater } from "@/lib/utils";
import axios from "axios";
import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";

const Home = () => {
 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(false);

 const fetchProducts = async () => {
  setLoading(true);
  try {
   const res = await axios.get("/api/products");
   if (res.data.status === "success") {
    setProducts(res.data.products);
   }
  } catch (error) {
   console.log(error);
  } finally {
   setLoading(false);
  }
 };

 useEffect(() => {
  fetchProducts();
 }, []);

 return (
  <div className="w-full">
   <HomeCarousel />
   <div className="my-12">
    {loading ? (
     <div className="flex justify-between flex-wrap" >
      {[1, 2, 3, 4].map((index) => (
       <div className="flex flex-col space-y-3" key={index}>
        <Skeleton className="h-[180px] w-[300px] rounded-xl" />
        <div className="space-y-2">
         <Skeleton className="h-4 w-[250px]" />
         <Skeleton className="h-4 w-[200px]" />
        </div>
       </div>
      ))}
     </div>
    ) : (
     <div className="flex justify-center gap-4 flex-wrap">
      {products?.map((product) => (
       <Card
        className="w-[300px] hover:shadow-lg duration-300"
        key={product._id}
       >
        <CardHeader>
         <img src={product.images[0]} />
        </CardHeader>
        <CardContent>
         <div className="flex justify-between  items-center mb-2 text-lg font-semibold">
          <h2 className="line-clamp-1">{product.name}</h2>
          <h2>{formater(product.price)}</h2>
         </div>
         <p className="line-clamp-2">{product.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
         <Button variant="outline" size="icon">
          <Heart />
         </Button>
         <Button>Add To Card</Button>
        </CardFooter>
       </Card>
      ))}
     </div>
    )}
   </div>
  </div>
 );
};

export default Home;
