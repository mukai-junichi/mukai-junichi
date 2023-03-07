import { Fragment } from "react";
import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Modal from "@/components/Modal";

const WorkItems = [
  {
    key: Math.floor(Math.random() * 1e3),
    title: "ポートフォリオサイト",
    img: "img/works_portfolio.png",
    introduction: "今ご覧いただいている、当サイトです",
    site_description: "自分自身の紹介サイトです。経歴、制作物、スキルについて記載しています。",
    site_img: "img/works_portfolio_overall.png",
    site_url: "https://mukai-junichi.vercel.app/",
    dev_language: ["React", "Next.js", "tailwindcss"],
    dev_description: "React学習と並行して自身のポートフォリオサイトを作成しました。Next.jsを使用しており、各ページのルーティングはNext.jsで出しわけを行なっています。Worksページで使用しているモーダルは、Hooksの勉強のためuseStateとuseEffectを使用し自作しました。",
    purpose: "Hooksについて、CSRやSSR等のレンダリングのタイミングやそれによるSEOの観点での影響等について等、継続して学習を行い、理解を深めていきたいと思っています。",
    modal: true,
  },
  {
    key: Math.floor(Math.random() * 1e3),
    title: "MJ-Lab",
    img: "img/works_mj-lab.png",
    introduction: "個人運営しているサイトです",
    site_description: "Web制作、グラフィックデザイン、動画制作、オンライン学習サポート等を個人活動で行なっていきたいと思い制作したサイトです。動画製作以外のページはまだ制作途中です。",
    site_img: "img/works_mj-lab_overall.png",
    site_url: "https://mj-lab.com/",
    dev_language: ["WordPress", "PHP", "HTML", "CSS(Sass)", "Jquery"],
    dev_description: "テーマはWordPressで自作しています。PHPは実務経験もあるため比較的楽にと進めることができましたが、WordPressは触ったことがなかったため、仕組みの理解から進めているところです。TOPページは背景に動画を使用し、パララックスにしています。ヘッダーやレスポンシブのハンバーガーメニュー、各コンテンツの動きは、CSSのアニメーションとjQueryを使用して実装しています。",
    purpose: "Hooksについて、CSRやSSR等のレンダリングのタイミングやそれによるSEOの観点での影響等について等、継続して学習を行い、理解を深めていきたいと思っています。",
    modal: true,
  },
  {
    key: Math.floor(Math.random() * 1e3),
    title: "（制作中）",
    img: "img/works_coming-soon.jpg",
    introduction: "適宜、作品制作を行なっていく予定です",
    site_description: "",
    site_img: "",
    site_url: "",
    dev_language: [],
    dev_description: "",
    purpose: "",
    modal: false,
  },
];

export default function Works() {
  return (
    <>
      <Head>
        <title>Works | Junichi Mukai&apos;s Portfolio</title>
      </Head>

      <Header />
      <Main>
        <div className="my-6 flex flex-col items-center justify-center lg:px-12">
          <h1 className="sm:3xl my-8 text-center text-2xl font-medium text-gray-900">
            Works
          </h1>
          <div className="mb-10">
            <h2 className="mb-12 text-center text-xl font-medium">
              制作したもの
            </h2>
            <div className="my-16 mx-auto flex w-fit flex-wrap justify-center gap-24">
              {WorkItems.map((WorkItem) => {
                const [showModal, setShowModal] = useState(false);
                const ShowModal = WorkItem.modal
                  ? () => setShowModal(true)
                  : () => setShowModal(false);

                return (
                  <Fragment key={WorkItem.key}>
                    <div className="flex w-72 flex-col rounded-lg shadow-md shadow-slate-300">
                      <div
                        onClick={ShowModal}
                        className={`group relative h-56 overflow-hidden rounded-t-lg ${
                          WorkItem.modal ? "cursor-pointer" : ""
                        }`}
                      >
                        <img
                          src={WorkItem.img}
                          className="h-full w-full rounded-t-lg object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                      </div>
                      <div
                        className={`flex grow flex-col rounded-b-lg py-4 ${
                          WorkItem.modal ? "bg-white" : "bg-slate-200"
                        }`}
                      >
                        <div className="mx-2 block border-b-2 border-dashed border-slate-400 px-2 pb-2 font-bold">
                          <span
                            onClick={ShowModal}
                            className={`${
                              WorkItem.modal
                                ? "cursor-pointer text-teal-500"
                                : "text-gray-500"
                            }`}
                          >
                            {WorkItem.title}
                          </span>
                        </div>
                        <span className="mx-4 mt-4 text-sm text-gray-800">
                          {WorkItem.introduction}
                        </span>
                      </div>
                    </div>

                    <Modal
                      showFlag={showModal}
                      setShowModal={setShowModal}
                      title={WorkItem.title}
                      img={WorkItem.img}
                      bool
                      site_description={WorkItem.site_description}
                      site_img={WorkItem.site_img}
                      site_url={WorkItem.site_url}
                      dev_language={WorkItem.dev_language}
                      dev_description={WorkItem.dev_description}
                      purpose={WorkItem.purpose}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
