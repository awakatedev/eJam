/// <reference types="next/image-types/global" />

import Image from "next/image";
import Box from "../../../../public/img/image-removebg-preview (12) 1.png";
import { StarIcon } from "@heroicons/react/24/solid";

const ProductDetailBlock = () => {
  return (
    <>
      <section className="w-full rounded-lg flex flex-col justify-between items-center mt-5">
        <section className="w-full mb-5 flex flex-row gap-5">
          <div className="w-1/4 p-2 bg-Blue rounded-xl">
            <Image src={Box} alt="company icon" className="h-26 w-26" />
          </div>
          <div className="flex flex-col">
            <div className="w-full flex flex-row justify-between ">
              <h3 className="text-Title md:text-2xl text-base">
                Clarifion Air Ionizer
              </h3>
              <div className="w-1/4 flex gap-5 items-center">
                <span className="text-Text text-sm">$184</span>
                <span className="text-Blue text-lg font-semibold">$84</span>
              </div>
            </div>

            <div>
              <span className="my-2 flex items-center gap-1">
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <StarIcon className="h-6 w-6 text-yellow-400" />
              </span>
              <span className="text-Text text-sm flex items-center gap-3 my-3"> <span className="h-2 w-2 bg-Blue rounded-full flex items-center ">.</span> 12 left in Stock</span>
            </div>
          </div>
        </section>
        <div className="w-full">
          <p className="text-Text text-lg text-center">
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
          <ul className="mt-5 text-Text text-lg">
            <li>Negative Ion Technology may help with allergens</li>
            <li>Designed for air rejuvenation</li>
            <li>Perfect for every room in all types of places.</li>
          </ul>
        </div>
        <article className="w-full flex flex-row items-center gap-8 bg-SoftBlue rounded-lg p-5 mt-5">
          <span className="p-5 w-14 h-14 flex items-center justify-center bg-Blue rounded-full text-Base">
            %
          </span>
          <p className="text-Title text-xl ">
            Save <span className="text-Blue">53%</span> and get
            <span className="text-Blue"> 6 extra Clarifision</span> for only{" "}
            <span className="text-Blue">$14 Each.</span>
          </p>
        </article>
      </section>
    </>
  );
};
export default ProductDetailBlock;
