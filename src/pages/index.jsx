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
          <div className="mt-6 flex flex-col items-center justify-center md:mt-20 md:flex-row">
            <div className="flex flex-col px-2 md:mr-24 lg:max-w-lg">
              <h1 className="mb-4 text-center text-3xl font-medium text-gray-900 sm:text-5xl md:text-left">
                I'm
                <div className="my-4 flex flex-col justify-center items-center md:mt-8">
                  <span className="w-fit py-2 bg-gradient-to-r from-violet-800 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Web Developer</span>
                  <span className="text-center">&</span>
                  <span className="w-fit py-2 bg-gradient-to-r from-violet-800 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Web Designer</span>
                </div>
              </h1>
              <p className="mb-8 text-center leading-relaxed md:text-left">
                ご覧いただきありがとうございます！<br></br>向井純一と申します。
              </p>
              <button className="mx-auto mb-8 w-fit rounded border-0 bg-green-500 py-2 px-6 text-lg text-white duration-300 hover:bg-green-600 md:mb-0">
                Contact
              </button>
            </div>

            <div className="flex flex-col items-center  lg:max-w-lg">
              <img
                className="mx-auto w-60"
                src="/img/junichi-mukai.png"
                alt=""
              />
              <p className="mt-2 leading-relaxed">
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
