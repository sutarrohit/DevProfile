import Head from "next/head";
import Image from "next/image";

// INTERNAL IMPORT
import { HomeComponent, About, Skills, Projects } from "../conponents/index";

export default function Home() {
  return (
    <>
      <HomeComponent />

      <Skills />
      <Projects />
      <About />
    </>
  );
}
