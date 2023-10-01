/// <reference types="next/image-types/global" />
import Head from 'next/head';
import { Header, Footer, StepByStep, ProductContainer } from "../components";



const Home = () => {

  return (
    <>
      <Head>
        <title>eJam - test</title>
        <meta name="description" content="Technical test for eJam" />
      </Head>
      <Header />
      <main className=" h-full w-screen items-center justify-center flex-col md:px-28 px-5 ">
        <div className="w-full flex flex-col items-center gap-5 font-baseFont font-regular text-center  mb-5">
          <h1 className="text-Title md:text-5xl text-4xl">
            Wait ! your order in progress.
          </h1>
          <p className="text-Text text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div className='mb-20 h-full'>
          <StepByStep />
          <ProductContainer />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
