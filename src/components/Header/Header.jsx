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

function Header({ className }) {
  return (
    <>
      {window.innerWidth > 1024 ? (
        <div
          className={`flex h-20 w-full xl:w-3/4 justify-between items-center px-4 xl:px-16 py-4 fixed bg-transparent top-0 ${className}`}
        >
          <div className="flex justify-between w-full items-center gap-4">
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
              <ButtonLink>Elements</ButtonLink>
              <ButtonLink>Our Shop</ButtonLink>
              <ButtonLink>About us</ButtonLink>
            </div>
            <Image
              src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina.png"
              href="/"
              alt="Logo"
              className="object-cover w-36 h-auto cursor-pointer"
            />
            <div className="flex gap-6 text-base w-max font-extralight">
              <ButtonLink>Contacts</ButtonLink>
              <ButtonLink>Search</ButtonLink>
              <ButtonLink>Sign In</ButtonLink>
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
      ) : (
        <div className="w-full h-20 flex fixed top-0 justify-between py-4 px-4 items-center">
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
      )}
    </>
  );
}

export default Header;
