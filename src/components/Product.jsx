import { Images } from "@/lib/images";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./ui/card";

const Product = ({ product }) => {
  return (
    <Card>
      <CardHeader>
        <img src={Images.product[0]} alt="product.name" />
      </CardHeader>
      <CardContent></CardContent>
      <CardTitle>{product.name}</CardTitle>
      <CardDescription>{product.disc}</CardDescription>
      <CardFooter>Price: {product.price}</CardFooter>
    </Card>
  );
};

export default Product;
