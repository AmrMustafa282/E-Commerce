import { HomeCarousel } from "@/components/Carousel";
import Product from "@/components/Product";
import { Link, useNavigate } from "react-router-dom";
const products = [
 {
  id: 1,
  images: [
   "https://static.gigabyte.com/StaticFile/Image/Global/1ec377d6a9a75b133b557ceaa50e80d1/Product/23484",
   "https://static.gigabyte.com/StaticFile/Image/Global/1ec377d6a9a75b133b557ceaa50e80d1/Product/23484",
   "https://static.gigabyte.com/StaticFile/Image/Global/1ec377d6a9a75b133b557ceaa50e80d1/Product/33484",
  ],
  name: "name-1",
  desc: "desc",
  price: "price",
 },
 {
  id: 2,
  images: [
   "https://static.gigabyte.com/StaticFile/Image/Global/1ec377d6a9a75b133b557ceaa50e80d1/Product/23484",
   "https://static.gigabyte.com/StaticFile/Image/Global/1ec377d6a9a75b133b557ceaa50e80d1/Product/23484",
   "https://static.gigabyte.com/StaticFile/Image/Global/1ec377d6a9a75b133b557ceaa50e80d1/Product/33484",
  ],
  name: "name-2",
  desc: "desc",
  price: "price",
 },
];

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
