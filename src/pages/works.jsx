import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import WorksContent from "../components/contents/WorksContent";

export default function Works() {
  return (
    <>
      <Head>
        <title>Works | Junichi Mukai&apos;s Portfolio</title>
      </Head>

      <Header />
      <Main>
        <WorksContent />
      </Main>
      <Footer />
    </>
  );
}
