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
          "基本的なコーディングは問題ありません。CSSはSass(scss)での実装も可能です。CSSフレームワークを使わない場合のCSS設計について、個人開発の際はBEM・FLOCSSをベースにアレンジした設計を行うようにしています。CSSフレームワークはtailwindとBootstrapの経験があります。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "JavaScript",
        description:
          "実務では素のJavaScriptとjQueryの経験があります。Reactを自己学習中で、このプロフィールサイトはNext.jsで実装しました。React・Next.jsは、「React Hooks」「Next.jsでのCSRやSSR等のレンダリングタイミングとそれによるSEO観点での影響考慮」等を今後も継続して学習し理解を深めていきたいと思っています。また、「Node.js」や「Express」についての理解も深め、JavaScriptでフロントからバックまで全て実装できるスキルを習得したいと思っています。",
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
          "実務経験があり、一番馴染みのある言語です。フレームワークは実務ではSymfonyを使用していました。Laravelは自己学習経験があります。今後、Laravelを使った作品を制作したいと考えています。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "WordPress",
        description:
          "個人開発でテーマを自作し「MJ-Lab」というサイトを制作しました。（本サイトのWorksページに詳細を記載しています）未完成のページを完成させたら、その後はStripeを使用して決済機能を実装したいと思っています。また、ブログサイトも立ち上げたいと考えていて、ブログ機能についての理解が浅いため学習と並行して進めていきたいと考えています。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "Python",
        description:
          "分析やスクレイピングをやってみたいと思い、自己学習でnumpyを使用した単回帰分析や、Scrapyでの簡単なデータ取得を行った経験があります。特に分析については数学の知識も必要だったため、久々に「極限」についても一緒に学習し直しました。数学が好きだったことと、学生時代に学んだ数学が実際に活用できるケースを知ったこともあり、とても楽しかったです。もし実務でPythonを扱う機会があれば、それを機に深く習得したいと思っています。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "Ruby",
        description:
          "エンジニア転職に挑戦する際にスクールで学んだ言語です。Ruby on Railsを用いて初めてアプリケーション開発を行いました。思い入れのある言語で、こちらもPython同様に実務で扱う機会があれば、深く習得していきたいです。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "SQL",
        description:
          "データ取得や検索、テーブルの結合やデータの更新・削除等、基本操作は行えます。データベースはMariaDB、MySQLの使用経験があります。チューニングの経験や知見はありません。ビッグデータの活用や取り扱いも需要の高いスキルかと思っており、実務で深く携わる機会があれば知見を広げたいと思っています。",
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
        description: "インフラは理解の浅い分野です。AWSは少し経験があり、実務ではAWSのCLIで「S3へのファイルアップロード」「CDNでのキャッシュが残ってしまうためCloudFrontでキャッシュ削除」を行ったことがある程度です。個人開発・学習では、まずはIAM設定から行い、S3でSSL化した静的Webサイトの公開を行ったことがあります。その際はサーバーの必要性がなく費用を重視したかったため、Route53で独自ドメイン取得し、CloudFrontを使用してS3にHTTPSリクエストを送りSSL化して公開しました。AWSはいずれはきちんと学習して知識を強化していきたいと思っている分野です。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        language: "Docker",
        description: "AWS同様、知識の浅い分野です。ローカルでの開発環境はDockerで構築して行うことができますが、本番環境での運用はまだまだ知見が足りずにできません。インフラに対しての知見強化時にAWSの学習と並行してDockerのスキルも習得していきたいと思っています。",
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
        description: "実務でGitHubを使用してのチーム開発を行なっていましたので、開発ブランチの作成、コミット、プッシュ、マージ、コミットの整理、ブランチ切り替え時の一時避難等、基本操作は問題なく行えます。",
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
      {
        key: Math.floor(Math.random() * 1e3),
        language: "動画制作",
        description: "動画を制作しYouTubeで公開しています。制作ツールは主に「Canva」というサービスを使用しています。Canvaではどうしても行えない事がある場合のみ、Adobeの「Premiere Pro」も使用しています。",
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
                  <div key={MySkill.key} className="mb-12 w-full">
                    <div className="my-4 flex flex-row items-center border-b-2 border-teal-600 text-xl text-teal-600">
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
