import { HomeCarousel } from "@/components/Carousel";
import Product from "@/components/Product";
const products = [
  {
    id: 1,
    name: "T-shirt",
    disc: "Nike T-shirt       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur natus quia fugiat eveniet voluptatum, sed excepturi enim nobis vel quo, aperiam sit. Ad laboriosam magni labore reiciendis. Minima, accusantium! Dolores!",
    price: "30$",
  },
  {
    id: 2,
    name: "Short",
    disc: "Nike short         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur natus quia fugiat eveniet voluptatum, sed excepturi enim nobis vel quo, aperiam sit. Ad laboriosam magni labore reiciendis. Minima, accusantium! Dolores! ",
    price: "20$",
  },
];
const Home = () => {
  return (
    <div className="w-full">
      <HomeCarousel />
      <div className="grid grid-cols-4 mt-10 gap-10">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
