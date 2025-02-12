
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Tea_Map from "../components/Tea_Map/Tea_Map"
import Footer from "../components/Footer/Footer"

import Head from "next/head";

export default function Home() {
  return (
    <>
      
      <Head>
        <title>Tea Latte & Co</title>
      </Head>

      <Header/>
      
      <Banner/>
      <br />
      <Tea_Map/>
      <br />
      <Footer/>
    </>
    
  );
}
