import Button from "@components/Button/Button";
import ButtonLink from "@components/Button/ButtonLink";
import Image from "@components/Image/Image";
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

function Header({ className }) {
  return (
    <>
      <div
        className={`h-20 w-full xl:w-4/5 justify-between items-center px-4 xl:px-24 py-4 hidden fixed lg:flex bg-transparent top-0 ${className}`}
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
              <ButtonLink className="w-full h-max rounded-3xl p-2">
                <ShoppingCart className="text-black" size={20} />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-20 flex fixed lg:hidden top-0 justify-between py-4 px-4 items-center ${className}`}
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
        <ShoppingCart />
      </div>
    </>
  );
}

export default Header;
