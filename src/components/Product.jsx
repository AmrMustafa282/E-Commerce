import {
 Card,
 CardHeader,
 CardFooter,
 CardTitle,
 CardDescription,
 CardContent,
} from "./ui/card";

const Product = ({ product }) => {
 return (
  <Card >
   <CardHeader>
    <img src={product.images[0]} alt={product.name} />
   </CardHeader>
   <CardContent>
    <CardTitle>{product.name}</CardTitle>
    <CardDescription>{product.disc}</CardDescription>
   </CardContent>
   <CardFooter>
    <p>Price: {product.price}</p>
   </CardFooter>
  </Card>
 );
};

export default Product;
