import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.scss";
import Link from "next/link";
import localFont from "@next/font/local";

const fraktur = localFont({
  src: [
    {
      path: "./fraktur.woff2",
      weight: "300",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --fraktur-font: ${fraktur.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
