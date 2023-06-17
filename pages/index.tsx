import Head from "next/head";
import Image from "next/image";

// INTERNAL IMPORT
import {
  HomeComponent,
  About,
  Skills,
  Projects,
  Contact,
} from "../conponents/index";

export default function Home() {
  return (
    <>
      <HomeComponent />
      <Skills />
      <Projects />
      <Contact />
      <About />
    </>
  );
}
