import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import { Fragment } from "react";

const Histories = [
  {
    key: Math.floor(Math.random() * 1e3),
    age: "20",
    season: "前",
    title: "営業、転勤、新規事業立ち上げ、倒産を経験",
    description:
      "大阪の大学で建築について学んだ後、新卒で不動産会社に営業職として入社しました。半年後、学生時代のアルバイトで知り合った知人から誘いを受け、知人の会社へ営業職として転職しました。そこで、転勤、新規事業の立ち上げ、倒産と様々な経験をしました。",
  },
  {
    key: Math.floor(Math.random() * 1e3),
    age: "20",
    season: "後",
    title: "一度きりの人生、起業に挑戦",
    description:
      "当時の同僚と、「今度は自分たちで挑戦してみよう」と意気投合し、会社を設立しました。様々な人の協力を得て立ち上げた会社では、ポイントサイトメディアの運営を行いました。事業運営を通じて経営ノウハウを学びましたが、悔しくも経営が安定せず30歳の時に会社員として就業することを決意しました。",
  },
  {
    key: Math.floor(Math.random() * 1e3),
    age: "30",
    season: "前",
    title: "会社員として就業、業務を通じてIT技術の必要性を痛感",
    description:
      "転職した会社での配属先が東京本社となったため、東京に移住しました。営業実績を重ね、部門管理業務、ビジネスモデル考案・再構築等の様々な業務に携わりました。社内の基盤システムの構築プロジェクトにも携わり、IT技術に強い関心を抱くようになりました。「自分でシステム開発できる人材になりたい」と思い、悩みに悩んだ末、一念発起し35歳でエンジニア転職に挑戦しました。",
  },
  {
    key: Math.floor(Math.random() * 1e3),
    age: "30",
    season: "後",
    title: "茨の道と言われても突き進む、35歳からエンジニアへ転向",
    description:
      "家族の理解を得て退職し、短期集中学習型のプログラミングスクールで学習しました。その後、念願のエンジニアとして転職を行い、35歳からエンジニアとしてのキャリアのスタートを切りました。開発は難しいですが奥が深く楽しく、エンジニアに転職して良かったと心から感じました。より開発を行える環境に身を投じたいと思い、務めていた会社では実現が難しかったため、キャリアアップのための転職を行いました。現在はPMとして従事しています。",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About | Junichi Mukai&apos;s Portfolio</title>
      </Head>

      <Header />
      <Main>
        <>
          <div className="my-6 flex flex-col items-center justify-center lg:px-12">
            <h1 className="sm:3xl my-8 text-center text-2xl font-medium text-gray-900">
              About me
            </h1>
            <div className="mb-10">
              <h2 className="mb-12 text-center text-xl font-medium">
                35歳からエンジニア職に転向した<br></br>遅咲きエンジニアです
              </h2>
              <div className="mx-auto flex w-fit flex-col">
                {Histories.map((History) => {
                  return (
                    <Fragment key={History.key}>
                      <div className="mb-6 flex w-fit items-center border-b-4 border-teal-600">
                        <div className="mr-2 h-6 w-6 rounded-full bg-teal-600 text-white">
                          <svg>
                            <path d="M8 13H14V17H8V13Z" fill="currentColor" />
                            <path d="M6 6H4V18H6V6Z" fill="currentColor" />
                            <path d="M20 7H8V11H20V7Z" fill="currentColor" />
                          </svg>
                        </div>
                        <h3 className="inline-block ">
                          <span className="text-xl font-medium text-teal-600">
                            {History.age}
                          </span>
                          <span>代 </span>
                          <span className="text-xl font-medium text-teal-600">
                            {History.season}
                          </span>
                          <span>半： </span>
                          {History.title}
                        </h3>
                      </div>
                      {/* <p className="mb-8">{History.description}</p> */}
                    </Fragment>
                  );
                })}
              </div>
            </div>

            <Timeline />

            <p className="mb-12 text-center text-xl font-medium">
              スキルUPを目指し、日々学習中です
            </p>
          </div>
        </>
      </Main>
      <Footer />
    </>
  );
}
