import Button from "@components/UI/Button";
import { CreditCard, MessageCircle, Package, Truck } from "lucide-react";

function Hero() {
  return (
    <div className="w-[1440px] h-full relative">
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 justify-center items-center text-center">
        <h1 className="text-5xl">XStore Marseille04 Demo</h1>
        <p className="text-lg">
          Make yours celebrations even more special this years with beautiful.
        </p>
        <Button className="bg-primary text-white rounded-none font-normal hover:bg-transparent border py-2 px-12 hover:text-black hover:border-1">
          Go to shop
        </Button>
      </div>
      <div className="absolute w-11/12 xl:w-full left-1/2 -translate-x-1/2 -bottom-48 md:-bottom-16 lg:-bottom-12 bg-primary px-4 py-2 lg:p-8 flex flex-wrap lg:flex-nowrap md:flex-row gap-y-4 lg:gap-8 justify-center">
        <div className="flex items-center w-full md:w-1/2 justify-start md:justify-center lg:w-1/4 gap-4 transition-all">
          <Truck color="white" size={32} />
          <div className="flex gap-1 text-white/90 flex-col justify-center items-start">
            <h3 className="text-lg w-max">Fastest Shipping</h3>
            <p className="text-sm">Order at $39 order</p>
          </div>
        </div>
        <div className="flex items-center w-full md:w-1/2 justify-start md:justify-center lg:w-1/4 gap-4 transition-all">
          <CreditCard color="white" size={32} />
          <div className="flex gap-1 text-white/90 flex-col justify-center items-start">
            <h3 className="text-lg w-max">100% Safe Payments</h3>
            <p className="text-sm">9 month installments</p>
          </div>
        </div>
        <div className="flex items-center w-full md:w-1/2 justify-start md:justify-center lg:w-1/4 gap-4 transition-all">
          <Package color="white" size={32} />
          <div className="flex gap-1 text-white/90 flex-col justify-center items-start">
            <h3 className="text-lg w-max">14-Days Return</h3>
            <p className="text-sm">Shop with confidence</p>
          </div>
        </div>
        <div className="flex items-center w-full md:w-1/2 justify-start md:justify-center lg:w-1/4 gap-4 transition-all">
          <MessageCircle color="white" size={32} />
          <div className="flex gap-1 text-white/90 flex-col justify-center items-start">
            <h3 className="text-lg w-max">24/7 Online Support</h3>
            <p className="text-sm">Delivered to home</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
