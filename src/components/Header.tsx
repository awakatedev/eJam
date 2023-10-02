import useWindowSize from "../hooks/useWindowSize";
import Image from "next/image";
import Logo from "../../public/img/logo.png";
import Macfee from "../../public/img/McAfee_Secure.png";
import Norton from "../../public/img/norton-antivirus-logo 1.png";
import { CheckBadgeIcon, HeartIcon, TruckIcon, ArrowPathIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const billboards = [
  {
    title: "30-DAY SATISFACTION GUARANTEE",
    icon: <CheckBadgeIcon className="h-6 w-6 text-Base" />,
  },
  {
    title: "Free delivery on orders over $40.00",
    icon: <HeartIcon className="h-6 w-6 text-Base" />,
  },
  {
    title: "50.000+ HAPPY CUSTOMERS",
    icon: <TruckIcon className="h-6 w-6 text-Base" />,
  },
  {
    title: "100% Money Back Guarantee",
    icon: <ArrowPathIcon className="h-6 w-6 text-Base" />,
  },
];

const Header = () => {
 const winSize: any | undefined = useWindowSize();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? billboards.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === billboards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <header className="md:h-36 h-34 w-screen flex items-center justify-center flex-col md:mb-0 md:mt-7 mb-5 font-baseFont font-regular text-Base">
        <div className="h-14 w-full bg-DarkGrey md:py-10 md:px-28 px-5 py-10 flex flex-row justify-between items-center">
          {winSize.width >= 768 ? (
            billboards.map((item) => (
              <span key={item.title} className="flex  gap-3">
                {item.icon}
                {item.title}
              </span>
            ))
          ) : (
            <div className="w-full flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="absolute left-0 p-4 outline-none"
              >
                <ChevronLeftIcon className="h-5 w-5 text-Base font-bold " />
              </button>
              <span className="w-full text-center flex items-center justify-center gap-2">
                {billboards[currentIndex].icon}
                {billboards[currentIndex].title}
              </span>
              <button
                onClick={nextSlide}
                className="absolute right-0 p-4 outline-none"
              >
                <ChevronRightIcon className="h-5 w-5 text-Base font-bold" />
              </button>
            </div>
          )}
        </div>
        <nav className="w-full flex items-center justify-between md:py-10 md:px-28 px-5 py-10">
          <Image src={Logo} alt="company icon" />
          <div className="flex flex-row items-center md:gap-10 gap-5 md:h-14 md:w-48 h-5 w-32">
            <Image src={Macfee} alt="secure" />
            <Image src={Norton} alt="secure" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
