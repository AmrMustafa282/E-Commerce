import { HomeCarousel } from "@/components/Carousel";
import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import { fetchProducts } from "@/rtk/slices/products-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const nav = useNavigate();
  return (
    <div className="w-full">
      <HomeCarousel />
      <div className="grid grid-cols-4 mt-10 gap-10">
        {products.map((product) => (
          <>
            <Link to={`products/${product.id}`} key={product.id}>
              <Product product={product} />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
