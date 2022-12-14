import Head from "next/head";

import "../styles/globals.css";
import Navbar from "components/Navbar";
import Footer from 'components/Footer'
import { AppProps } from "next/app";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ZHAO Zhenhua&#39;s blog</title>
        <link rel="icon" type="image/png" href="/z-letter.png" />
      </Head>
      <div className="px-6">
      
        <Navbar />
    
        <Component {...pageProps} />
       <Footer /> 
      </div>
    </>
  );
}
