import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import MyAge from "../components/MyAge";

const MyBirthday = {
  year: 1985,
  month: 6,
  date: 2,
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Junichi Mukai&apos;s Portfolio</title>
      </Head>

      <Header />
      <Main>
        <>
          <div className="my-12 flex flex-col items-center justify-center md:flex-row">
            <div className="flex flex-col px-4 md:mr-32 lg:max-w-lg">
              <h1 className="mb-4 whitespace-nowrap text-center text-3xl font-medium text-gray-900 sm:text-5xl">
                I'm Junichi Mukai
                <div className="my-4 flex flex-col items-center justify-center md:mt-8">
                  <span className="w-fit bg-gradient-to-r from-violet-800 via-blue-500 to-indigo-600 bg-clip-text py-2 text-transparent">
                    Web Developer
                  </span>
                  <span className="text-center">&</span>
                  <span className="w-fit bg-gradient-to-r from-violet-800 via-blue-500 to-indigo-600 bg-clip-text py-2 text-transparent">
                    Web Designer
                  </span>
                </div>
              </h1>
              {/* <button className="mx-auto my-0 mb-8 w-fit rounded border-0 bg-teal-500 py-2 px-6 text-lg text-white drop-shadow duration-300 hover:bg-teal-600 md:my-8 md:mb-0">
                Contact
              </button> */}
            </div>

            <div className="flex flex-col items-center  lg:max-w-lg">
              <img
                className="mx-auto w-60"
                src="/img/junichi-mukai.png"
                alt=""
              />
              <p className="mt-2 leading-relaxed">
                名前：向井 純一
                <br></br>
                年齢：
                <MyAge {...MyBirthday} />歳<br></br>
                住所：神奈川県川崎市
              </p>
            </div>
          </div>
        </>
      </Main>
      <Footer />
    </>
  );
}
