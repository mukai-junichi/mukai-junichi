import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills | Junichi Mukai&apos;s Portfolio</title>
      </Head>

      <Header />
      <Main>
        <>
          <div className="my-6 flex flex-col items-center justify-center lg:px-12">
            <h1 className="sm:3xl my-8 text-center text-2xl font-medium text-gray-900">
              My Skills
            </h1>
          </div>
        </>
      </Main>
      <Footer />
    </>
  );
}
