/// <reference types="next/image-types/global" />

import Image from "next/image";
import Warning from "../../../../public/img/image 6.png";

const ProductSubmitSection = () => {
  return (
    <>
      <section className=" w-full flex flex-col justify-between items-center mt-5">
        <a
          className="w-full h-20 p-5 flex items-center justify-center rounded-full bg-Green text-center text-Base text-xl font-semibold"
          href="https://awakate-portfolio.vercel.app"
        >
          Yes - Claim my discount
        </a>
        <div className="w-full p-3 border border-slate-300 border-2 rounded-lg my-3">
          <div className="w-full p-3 flex justify-between  border-b border-slate-300 text-center text-Text text-base font-regular text-lg  ">
            <span>Free shipping</span>
            <span>Secure 256-bit SSL encryption</span>
          </div>
        </div>
        <div>
          <h3 className="text-red-500 text-center underline my-3">
            NO THANKS, I DON’T WANT THIS.
          </h3>
          <div className="flex gap-5 items-center">
            <div className="h-26 w-26">
              <Image src={Warning} alt="company icon" />
            </div>

            <p className="w-3/4 text-Text text-base font-regular text-lg ">
              If you are not completely thrilled with your Clarifion - We have a
              <span className="text-Title font-medium">
                {" "}
                30 day satisfaction guarantee.
              </span>{" "}
              Please refer to our return policy at the bottom of the page for
              more details. Happy Shopping!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductSubmitSection;
