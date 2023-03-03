import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Junichi Mukai&apos;s Portfolio</title>
        <meta name="description" content="Junichi Mukai's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main
      title="Junichi Mukai's Portfolio"
      />
      <Footer />
    </>
  );
}
