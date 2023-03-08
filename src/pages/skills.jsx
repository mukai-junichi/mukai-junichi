import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const MySkills = [
  {
    key: Math.floor(Math.random() * 1e3),
    type: "フロントエンド",
    skills: [
      {
        key: Math.floor(Math.random() * 1e3),
        language: "HTML5 / CSS3",
        description:
          "基本的なコーディングは問題ありません。CSSはSass(scss)での実装も可能です。CSSフレームワークを使わない場合のCSS設計はBEM・FLOCSSをベースにした設計が良いのかなと考えています。CSSフレームワークはtailwindとBootstrapの経験があります。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "JavaScript",
        description:
          "実務では素のJavaScriptとjQueryの経験があります。Reactを自己学習中で、このプロフィールサイトはNext.jsで実装しました。Reactは実装していて楽しかったので、今後も学習を継続して理解を深めていきたいと思っています。「React Hooks」「Next.jsでのCSRやSSR等のレンダリングタイミングとそれによるSEO観点での影響考慮」「Node.jsやExpress」について等を学習し、適宜アプリケーション制作を行いアウトプットしていきたいと思っています。",
      },
    ],
  },
  {
    key: Math.floor(Math.random() * 1e3),
    type: "バックエンド",
    skills: [
      {
        key: Math.floor(Math.random() * 1e3),
        language: "PHP",
        description:
          "実務経験があり、一番馴染みのある言語です。フレームワークは実務ではSymfonyを使用していました。またLaravelの自己学習経験があり、アウトプットとしてLaravelでの作品も制作したいと考えています。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "WordPress",
        description:
          "自己学習を行い、テーマを自作し「MJ-Lab」というサイトを制作しました。（本サイトのWorksページに詳細を記載しています）未完成のページを完成させたら、その後はStripeを使用して決済機能を実装したいと思っています。また、ブログサイトも立ち上げたいと考えていて、ブログ機能についての理解が浅いため学習と並行して習得していきたいと考えています。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "Python",
        description:
          "分析やスクレイピングに関心があり、自己学習でnumpyを使用した単回帰分析や、Scrapyでの簡単なデータ取得を行った経験があります。特に分析については数学の知識も必要で久々に「極限」についても一緒に学習しましたが、楽しかったのでPythonは今後深く学んでみたい言語と考えています。今すぐはReactやPHP、WordPressについてを学習したいと考えていますので、もし実務でPythonを扱うタイミングがあればそれを機に深く習得したいと思っています。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "Ruby",
        description:
          "エンジニア転職前に学んだ言語です。Ruby on Railsを用いて初めてアプリケーション開発を行いました。思い入れのある言語で、こちらもPython同様に実務で扱うタイミングがあれば、深く習得していきたいです。",
      },

      {
        key: Math.floor(Math.random() * 1e3),
        language: "SQL",
        description:
          "データ取得や検索、テーブルの結合やデータの更新・削除等、基本操作は行えます。データベースはMariaDB、MySQLの使用経験があります。チューニングの経験はありません。ビッグデータの活用や取り扱いも需要の高いスキルかと思っており、実務で学び機会があれば知見を広げたいと思っています。",
      },
    ],
  },
  {
    key: Math.floor(Math.random() * 1e3),
    type: "インフラ",
    skills: [
      {
        key: Math.floor(Math.random() * 1e3),
        language: "AWS",
        description: "学習中です。インフラは実務であまり触れる機会も多くなく、今後知識強化が必要な分野と捉えています。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "Docker",
        description: "ローカルでの開発環境はDockerで構築して行うことができます。AWS等のインフラ側の学習と同時並行で、本番環境もDockerで構築できるようになりたいと思っています。",
      },
    ],
  },
  {
    key: Math.floor(Math.random() * 1e3),
    type: "その他",
    skills: [
      {
        key: Math.floor(Math.random() * 1e3),
        language: "Git (GitHub)",
        description: "実務での使用経験があります。チーム開発を行なっていますので基本操作は問題なく行えます。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "Backlog",
        description: "実務での使用経験があります。基本操作は問題なく行えます。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "Slack・Teams",
        description: "実務での使用経験があります。基本操作は問題なく行えます。",
      },
    ],
  },
];

const CodeIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z"
      fill="currentColor"
    />
    <path
      d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z"
      fill="currentColor"
    />
    <path
      d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z"
      fill="currentColor"
    />
  </svg>
);

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
            <div className="mx-6 mb-10">
              <h2 className="mb-12 text-center text-xl font-medium">
                各スキルについて
              </h2>
              {MySkills.map((MySkill) => {
                return (
                  <div key={MySkill.key} className="mb-6 w-full">
                    <div className="my-3 flex flex-row items-center border-b-2 border-teal-600 text-xl text-teal-600">
                      {CodeIcon}
                      <h2 className="ml-2">{MySkill.type}</h2>
                    </div>
                    {MySkill.skills.map((Skill) => {
                      return (
                        <div key={Skill.key} className="">
                          <span className="rounded-lg bg-teal-300 py-1 px-2 text-sm">
                            {Skill.language}
                          </span>
                          <p className="my-2 ml-2 text-sm leading-relaxed">
                            {Skill.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </Main>
      <Footer />
    </>
  );
}
