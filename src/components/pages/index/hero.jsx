import Button from "@components/UI/Button";
import { Truck } from "lucide-react";

function Hero() {
  return (
    <div className="relative top-0 left-0 w-full h-[47.2rem] bg-center bg-no-repeat bg-cover bg-[url(https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/02-SLIDESHOW-1.jpeg)]">
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 justify-center items-center text-center">
        <h1 className="text-5xl">XStore Marseille04 Demo</h1>
        <p className="text-lg">
          Make yours celebrations even more special this years with beautiful.
        </p>
        <Button className="bg-primary text-white rounded-sm font-medium hover:bg-transparent border py-2 px-12 hover:text-black hover:border-1">
          Go to shop
        </Button>
      </div>
      <div className="absolute w-11/12 left-1/2 md:w-4/5 -translate-x-1/2 -bottom-44 md:-bottom-20 lg:-bottom-16 bg-primary px-4 py-2 lg:p-8 flex flex-wrap lg:flex-nowrap md:flex-row gap-y-4 lg:gap-12 justify-center">
        <div className="flex items-center w-full md:w-1/2 justify-center lg:w-1/4 gap-2">
          <Truck color="white" size={32} />
          <div className="flex gap-2 text-white/90 flex-col justify-center items-start">
            <h3 className="text-lg w-max">Fast Shipping</h3>
            <p className="text-sm">Order at $39 order</p>
          </div>
        </div>
        <div className="flex items-center w-full md:w-1/2 justify-center lg:w-1/4 gap-2">
          <Truck color="white" size={32} />
          <div className="flex gap-2 text-white/90 flex-col justify-center items-start">
            <h3 className="text-lg w-max">Fast Shipping</h3>
            <p className="text-sm">Order at $39 order</p>
          </div>
        </div>
        <div className="flex items-center w-full md:w-1/2 justify-center lg:w-1/4 gap-2">
          <Truck color="white" size={32} />
          <div className="flex gap-2 text-white/90 flex-col justify-center items-start">
            <h3 className="text-lg w-max">Fast Shipping</h3>
            <p className="text-sm">Order at $39 order</p>
          </div>
        </div>
        <div className="flex items-center w-full md:w-1/2 justify-center lg:w-1/4 gap-2">
          <Truck color="white" size={32} />
          <div className="flex gap-1 text-white/90 flex-col justify-center items-start">
            <h3 className="text-lg w-max">Fast Shipping</h3>
            <p className="text-sm">Order at $39 order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
