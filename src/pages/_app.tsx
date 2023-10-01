import '../styles/index.css';
import '../styles/tailwind.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }: JSX.Element | any) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.png"
        />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
    
          <Component {...pageProps} />
    </>
  );
}

export default MyApp;
