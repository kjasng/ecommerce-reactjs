import Button from "@components/UI/Button";
import ButtonLink from "@components/UI/ButtonLink";
import Image from "@components/UI/Image";
import {
  Facebook,
  Heart,
  Instagram,
  Menu,
  RefreshCw,
  ShoppingCart,
  Youtube
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";

function Header({ className }) {
  const scrollPosition = useScrollPosition();
  return (
    <>
      <div
        className={`h-20 w-screen xl:w-screen justify-between items-center px-4 xl:px-32 py-4 hidden lg:flex top-0 ${
          scrollPosition > 80
            ? "bg-white/80 backdrop-blur-md fixed"
            : "bg-transparent transition-all absolute"
        } ${className}`}
      >
        <div className="flex justify-between w-full items-center gap-4">
          <div className="flex gap-4 justify-center items-center">
            <div className="flex justify-center items-center gap-2">
              <ButtonLink className="w-full h-max rounded-3xl p-1 bg-black">
                <Facebook className="text-white" size={14} />
              </ButtonLink>
              <ButtonLink className="w-full h-max rounded-3xl p-1 bg-black">
                <Instagram className="bg-black text-white" size={14} />
              </ButtonLink>
              <ButtonLink className="w-full h-max rounded-3xl p-1 bg-black">
                <Youtube className="bg-black text-white" size={14} />
              </ButtonLink>
            </div>
            <div className="flex gap-6 text-base w-max font-extralight">
              <Link className="relative group" to="elements">
                Elements
                <span className="absolute w-0 -bottom-2 right-0 h-[0.1rem] group-hover:w-full bg-black opacity-0 group-hover:opacity-70 duration-200 rounded-2xl"></span>
              </Link>
              <ButtonLink className="relative group">
                Our Shop
                <span className="absolute w-0 -bottom-2 right-0 h-[0.1rem] group-hover:w-full bg-black opacity-0 group-hover:opacity-70 duration-200 rounded-2xl"></span>
              </ButtonLink>
              <ButtonLink className="relative group">
                About us
                <span className="absolute w-0 -bottom-2 right-0 h-[0.1rem] group-hover:w-full bg-black opacity-0 group-hover:opacity-70 duration-200 rounded-2xl"></span>
              </ButtonLink>
            </div>
          </div>
          <Image
            src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina.png"
            href="/"
            alt="Logo"
            className="object-cover w-36 h-auto cursor-pointer"
          />
          <div className="flex gap-4 justify-center items-center">
            <div className="flex gap-6 text-base w-max font-extralight">
              <ButtonLink className="relative group">
                Contacts
                <span className="absolute w-0 -bottom-2 right-0 h-[0.1rem] group-hover:w-full bg-black opacity-0 group-hover:opacity-70 duration-200 rounded-2xl"></span>
              </ButtonLink>
              <ButtonLink className="relative group">
                Search
                <span className="absolute w-0 -bottom-2 right-0 h-[0.1rem] group-hover:w-full bg-black opacity-0 group-hover:opacity-70 duration-200 rounded-2xl"></span>
              </ButtonLink>
              <ButtonLink className="relative group">
                Sign In
                <span className="absolute w-0 -bottom-2 right-0 h-[0.1rem] group-hover:w-full bg-black opacity-0 group-hover:opacity-70 duration-200 rounded-2xl"></span>
              </ButtonLink>
            </div>
            <div className="flex justify-center items-center gap-2">
              <ButtonLink className="w-full h-max rounded-3xl p-2">
                <RefreshCw className="text-black" size={20} />
              </ButtonLink>
              <ButtonLink className="w-full h-max rounded-3xl p-2">
                <Heart className="text-black" size={20} />
              </ButtonLink>
              <ButtonLink className="w-full h-max rounded-3xl p-2 relative">
                <ShoppingCart className="text-black" size={20} />
                <span className="absolute right-0 top-0 z-40 bg-black text-white px-1 rounded-full text-xs">
                  0
                </span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-screen h-20 flex fixed lg:hidden top-0 justify-between py-4 px-4 items-center ${
          scrollPosition > 80
            ? "bg-white/80 backdrop-blur-md fixed"
            : "bg-transparent absolute"
        } ${className}`}
      >
        <Button onClick={() => {}}>
          <Menu />
        </Button>
        <Image
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina.png"
          href="/"
          alt="Logo"
          className="object-cover w-36 h-auto cursor-pointer"
        />
        <ButtonLink className="h-max rounded-3xl p-2 relative">
          <ShoppingCart />
          <span className="absolute right-0 top-0 z-40 bg-black text-white px-1 rounded-full text-xs">
            0
          </span>
        </ButtonLink>
      </div>
    </>
  );
}

export default Header;
