import ProductBlock from './atoms/ProductBlock'
import ProductDescriptionBlock from './atoms/DescriptionBlock';
import ProductCommentsBlock from "./atoms/Comments";
import ProductDetailBlock from "./atoms/ProducctDetailBlock"
import ProductSubmitSection from "./atoms/SubmitSection";
import useWindowSize from "../../hooks/useWindowSize";


const ProductContainer = () => {
 const winSize: any | undefined = useWindowSize();


  return (
    <>
      <section className="md:h-5/6 h-auto w-full rounded-lg md:bg-SoftGrey md:p-10 p-5  ">
        {winSize.width >= 768 ? (
          <section className="w-full flex flex-row justify-between gap-10">
            <div className="h-full w-3/4 flex flex-col gap-5">
              <ProductBlock />
              <ProductCommentsBlock />
            </div>
            <div className="w-3/5 flex flex-col gap-3">
              <ProductDescriptionBlock />
              <ProductDetailBlock />
              <ProductSubmitSection />
            </div>
          </section>
        ) : (
          <div className="flex flex-col w-full gap-5">
            <ProductDescriptionBlock />
            <ProductBlock />
            <ProductDetailBlock />
            <ProductSubmitSection />
          </div>
        )}
      </section>
    </>
  );
};
export default ProductContainer;
