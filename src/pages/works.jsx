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
    site_description:
      "自分自身の紹介サイトです。経歴、制作物、スキルについて記載しています。",
    site_img: "img/works_portfolio_overall.png",
    site_url: "https://mukai-junichi.vercel.app/",
    dev_language: ["React", "Next.js", "TailwindCSS"],
    modal: true,
  },
  {
    key: Math.floor(Math.random() * 1e3),
    title: "MJ-Lab",
    img: "img/works_mj-lab.png",
    introduction: "個人運営しているサイトです",
    site_description:
      "Web制作、グラフィックデザイン、動画制作、オンライン学習サポート等を個人活動で行なっていきたいと思い制作したサイトです。WordPressの業務経験や知見はなかったのですが、関心があり自己学習でテーマを自作して制作しました。",
    site_img: "img/works_mj-lab_overall.png",
    site_url: "https://mj-lab.com/",
    dev_language: ["WordPress", "PHP", "CSS(SCSS)", "jQuery"],
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
                        <div className="mx-2 block border-b-2 border-dashed border-slate-400 px-2 pb-2 text-center font-bold">
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
                      bool
                      {...WorkItem}
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
