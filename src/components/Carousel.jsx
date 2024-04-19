import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Images } from "@/lib/images";
import { Card, CardContent } from "@/components/ui/card";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
} from "@/components/ui/carousel";

export function HomeCarousel() {
 const plugin = React.useRef(
  Autoplay({ delay: 5000, stopOnInteraction: false })
 );

 return (
  <Carousel
   plugins={[plugin.current]}
   className="w-full "
   onMouseEnter={plugin.current.stop}
   onMouseLeave={plugin.current.reset}
  >
   <CarouselContent className="">
    {Images.homeSlide.map((slide, index) => (
     <CarouselItem key={index}>
      <div className="">
       <Card>
        <CardContent className="flex   items-center justify-center p-0">
         <img src={slide} alt="" />
        </CardContent>
       </Card>
      </div>
     </CarouselItem>
    ))}
   </CarouselContent>
   {/* <CarouselPrevious /> */}
   {/* <CarouselNext /> */}
  </Carousel>
 );
}
