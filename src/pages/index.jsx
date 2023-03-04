import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import HomeContent from "../components/contents/HomeContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Junichi Mukai&apos;s Portfolio</title>
      </Head>

      <Header />
      <Main>
        <HomeContent />
      </Main>
      <Footer />

    </>
  );
}
