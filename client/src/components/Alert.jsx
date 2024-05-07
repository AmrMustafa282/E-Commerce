import { ChevronDown } from 'lucide-react';
import React from 'react'

const Alert = () => {
  return (
   <div className="bg-black text-white">
    <div className="container py-4 flex justify-between">
     <p className="text-center flex-grow">
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      <a href="#" className="underline font-bold ml-2">
       {" "}
       ShopNow
      </a>
     </p>
     <div className="flex gap-1">
      <p>English</p>
      <ChevronDown />
     </div>
    </div>
   </div>
  );
}

export default Alert