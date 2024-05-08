import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import fetchFromDatabase from "@/components/utils/fetchFromDatabase";
import saveToDatabase from "@/components/utils/saveToDatabase";
import { formater } from "@/lib/utils";
import { addItem } from "@/rtk/slices/cart-slice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/api/products/${productId}`);
      setProduct(res.data.product[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(product);
  return (
    <>
      {product && (
        <div className="my-12 gap-20 flex ">
          <div>
            <Carousel className="max-w-md">
              <CarouselContent>
                {product?.images.map((el) => (
                  <CarouselItem key={product._id}>
                    <img src={el} alt={product.name} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="content-center flex flex-col gap-3">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h2>{formater(product.price)}</h2>
            <Button
              onClick={() => {
                dispatch(addItem(product));
                const savedProducts = fetchFromDatabase("cartProducts") || [];
                savedProducts.push(product);
                saveToDatabase("cartProducts", savedProducts);
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
