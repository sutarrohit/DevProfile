import "@/styles/globals.css";
import type { AppProps } from "next/app";

// INTERNAL IMPORT
import { NavBar, About } from "../conponents/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
