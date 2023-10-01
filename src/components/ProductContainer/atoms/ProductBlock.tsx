/// <reference types="next/image-types/global" />

import Image from "next/image";
import Product from "../../../../public/img/image 4.png";

const ProductBlock = () => {
  return (
    <>
      <section className="md:h-2/4 w-full h-4/5 rounded-lg flex md:flex-row flex-col justify-between items-center ">
        <Image src={Product} alt="company icon" />
      </section>
    </>
  );
};
export default ProductBlock;
