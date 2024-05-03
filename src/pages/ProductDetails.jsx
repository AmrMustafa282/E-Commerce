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
import products from "@/lib/productsData";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [index, setIndex] = useState(0);

  const { id: productId } = useParams();
  const product = products.find((el) => el.id == productId);

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
        <h2>
          <h3>Product Name :</h3>
          {product.name.length > 70
            ? String(product.name).substring(0, 70) + "......."
            : product.name}
        </h2>
        <p>
          <h3>Description :</h3>
          {product.desc}
        </p>
        <h1 style={{ fontSize: "40px" }}>Price : {product.price}</h1>
      </div>
    </div>
  );
};

export default ProductDetails;
