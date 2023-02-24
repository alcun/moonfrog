import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
