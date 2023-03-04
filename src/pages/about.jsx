import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import AboutContent from "../components/contents/AboutContent";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Junichi Mukai&apos;s Portfolio</title>
      </Head>

      <Header />
      <Main>
        <AboutContent />
      </Main>
      <Footer />
    </>
  );
}
