import { Facebook, Instagram, Twitter, X, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black text-white">
      <div className="container grid grid-cols-2 lg:grid-cols-4 pt-14 pb-24">
        <div className="col-span-1">
          <h2 className="font-extrabold text-xl">Exclusive Store</h2>
          <ul className="text-gray-300 mt-4 flex flex-col gap-2">
            <li>Warranty policy</li>
            <li>Shpping policy</li>
            <li>Payment Methods</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="font-extrabold text-xl">Customer Service</h2>
          <ul className="text-gray-300 mt-4 flex flex-col gap-2">
            <li>Contact us</li>
            <li>Help center</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="font-extrabold text-xl">My Account</h2>
          <ul className="text-gray-300 mt-4 flex flex-col gap-2">
            <li>My Account</li>
            <li>My Order</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="font-extrabold text-xl">Follow us</h2>
          <ul className="text-gray-300 mt-4 flex f gap-2">
            <li>
              {" "}
              <Facebook />{" "}
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Youtube />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
