import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Junichi Mukai&apos;s Portfolio</title>
      </Head>

      <Header />
      <Main
        title="About me"
      />
      <Footer />
    </>
  );
}
