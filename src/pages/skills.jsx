import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
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
      <Main
        title="My Skills"
      />
      <section id="skills" className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* left side */}
        <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
          <img className="rounded" src="./img/pc.jpg" alt="" />
        </div>
        {/* right side */}
        <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
            My Skills
          </h1>
          <div className="w-full">
            <h2>HTML</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: "85%" }}
              >
                85%
              </div>
              <div></div>
            </div>
            <h2>HTML</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: "85%" }}
              >
                85%
              </div>
              <div></div>
            </div>
            <h2>HTML</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: "85%" }}
              >
                85%
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
}
