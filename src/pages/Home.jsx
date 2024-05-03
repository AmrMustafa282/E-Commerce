import { HomeCarousel } from "@/components/Carousel";
import Product from "@/components/Product";
import { Link, useNavigate } from "react-router-dom";
import products from "@/lib/productsData";
const Home = () => {
  const nav = useNavigate();
  return (
    <div className="w-full">
      <HomeCarousel />
      <div className="grid grid-cols-4 mt-10 gap-10">
        {products.map((product) => (
          <Link to={`products/${product.id}`} key={product.id}>
            <Product product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
