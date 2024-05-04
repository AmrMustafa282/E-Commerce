import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselScrollTo,
} from "@/components/ui/carousel";
import { addItem } from "@/rtk/slices/cart-slice";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      {product && (
        <div className="my-12 gap-20 flex ">
          <div>
            <Carousel className="max-w-md">
              <CarouselContent>
                <CarouselItem>
                  <img src={product.images[0]} alt={product.id} />
                </CarouselItem>
                <CarouselItem>
                  <img src={product.images[1]} alt={product.id} />
                </CarouselItem>
                <CarouselItem>
                  <img src={product.images[2]} alt={product.id} />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="content-center flex flex-col gap-3">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h2>{product.price}</h2>
            <Button
              onClick={() => {
                // console.log("added");
                dispatch(addItem(product));
              }}
            >
              Add to cart
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
