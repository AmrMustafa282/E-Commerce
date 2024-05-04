import { Check } from "lucide-react";
import { Button } from "./ui/button";
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
    <>
      <Card className="h-96">
        <div className="flex flex-col">
          <CardHeader>
            <img
              className="max-w-60 h-48"
              src={product.images[0]}
              alt={product.name}
            />
          </CardHeader>
          <CardContent>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>
              {product.description.slice(0, 60)}
            </CardDescription>
          </CardContent>
        </div>
        <CardFooter>
          <p>Price: {product.price}</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default Product;
