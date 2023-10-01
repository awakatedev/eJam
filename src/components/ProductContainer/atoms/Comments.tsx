/// <reference types="next/image-types/global" />

import Image from "next/image";
import Person from "../../../../public/img/Rectangle 1127.png";

const ProductCommentsBlock = () => {
  return (
    <>
      <article className="w-full rounded-lg flex md:flex-col bg-Base justify-between items-center p-10">
        <div className="w-full mb-5">
          <Image src={Person} alt="company icon" className="h-26 w-26" />
        </div>
        <div className="w-full">
          <p className="text-Text text-lg ">
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </p>
        </div>
      </article>
    </>
  );
};
export default ProductCommentsBlock;
