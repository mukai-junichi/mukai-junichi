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
    title: "地球",
    img: "img/pc.jpg",
    introduction:
      "太陽系において内側から３番目に位置する惑星。豊富な水と大気、そして    生命の存在によって特徴づけられる星である。人類もここで誕生し、唯一の生活圏としている。",
  },
  {
    key: Math.floor(Math.random() * 1e3),
    title: "水星",
    img: "img/pc.jpg",
    introduction:
      "太陽系において内側から１番目に位置する惑星。太陽系の中で最も小さい。そばにいる太陽があまりにもまぶしすぎて、空に現れても地球上からはほぼ見ることができない。",
  },
  {
    key: Math.floor(Math.random() * 1e3),
    title: "土星",
    img: "img/pc.jpg",
    introduction:
      "太陽系において内側から６番目に位置する惑星。太陽系の中で木星に次いで２番目に大きい。巨大ガス惑星に属する土星の平均半径は、地球の約９倍にあたる。平均密度は地球の１/８にすぎないため、巨大な体積のわりには質量は地球の９５倍程度である。",
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
        <div className="flex flex-col items-center justify-center lg:px-12">
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
                const ShowModal = () => {
                  setShowModal(true);
                };
                return (
                  <Fragment key={WorkItem.title}>
                    <div onClick={ShowModal} className="h-72 w-72 bg-green-300">
                      <h2>{WorkItem.title}</h2>
                      <img src={WorkItem.img} />
                    </div>
                    <Modal
                    showFlag={showModal}
                    setShowModal={setShowModal}
                    title={WorkItem.title}
                    img={WorkItem.img}
                    bool
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
