import { Content } from "next/font/google";
import { Fragment } from "react";
import styles from "./Timeline.module.scss";
const MyTimeline = [
  {
    key: Math.floor(Math.random() * 1e3),
    headline: "20代",
    episodes: [
      {
        key: Math.floor(Math.random() * 1e3),
        data: "22歳〜23歳（2008年 - 2008年）",
        title: "【営業】新卒で不動産会社に入社",
        history: "大学では建築を専攻し、大阪の不動産会社に新卒で入社。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        data: "23歳〜25歳（2008年 - 2011年）",
        title: "【営業・新規事業立ち上げ】知人の会社に転職",
        history:
          "学生時代に知り合った知人から声をかけられ、ホームセキュリティ機器販売を担当し、新規事業の立ち上げにも従事。24歳で福岡支店を開設後、25歳で会社が倒産。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        data: "25歳〜30歳（2011年 - 2015年）",
        title: "【起業・経営】会社設立",
        history:
          "前職の同僚と会社を設立し、知人のコンサルティングを受けながらポイントサイトメディアを立ち上げ、運営に携わる。アクセス解析や運営を通じて経営を学ぶも、業績が安定せず、30歳で会社員に転職。",
      },
    ],
  },
  {
    key: Math.floor(Math.random() * 1e3),
    headline: "30代",
    episodes: [
      {
        key: Math.floor(Math.random() * 1e3),
        data: "30歳〜35歳（2015年 - 2020年）",
        title: "【営業・部門管理】会社員として転職",
        history:
          "医療・福祉業界の人材派遣・紹介会社に入社し、東京本社で営業職として従事。その後、部門管理やビジネスモデルの見直し、新規事業の考案、基幹システム構築にも携わり、自らシステム開発ができるようになりたいと強く感じ、エンジニア転職を決意。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        data: "2020年10月~2020年12月",
        title: "【学習】プログラミングスクールで学習",
        history:
          "短期集中プログラムでHTML、CSS、JavaScript、Rubyを学習。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        data: "35歳~37歳（2021年 - 2022年）",
        title:
          "【エンジニア】エンジニアとして転職",
        history:
          "バックエンドとフロントエンドの開発に従事。PHP、Javascript、MySQL、AWSなどの技術を使用。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        data: "37歳~（2022年 - 2023）",
        title: "【進行管理・業務効率化】期待と違った転職",
        history:
          "エンジニアとして入社するも、クライアント対応や業務改善が主な業務となり、希望していた開発業務には十分に携われない状況が続く。効率化に貢献し、業務改善に取り組んだ経験は成長につながったが、開発に専念できる環境を求めて退職。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        data: "38歳~（2023年 - 現在）",
        title: "【エンジニア】エンジニアとして転職",
        history:
          "受託開発企業にて、業務系システムの開発に従事。複数のプロジェクトで様々な技術スタックを用い、バックエンド・フロントエンドの両方でシステム開発に取り組んでいる。",
      },
    ],
  },
];

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      {MyTimeline.map((Content) => {
        return (
          <Fragment key={Content.key}>
            <h2 className={styles.timeline__headline}>{Content.headline}</h2>
            <ul className={styles.timeline__content}>
              {Content.episodes.map((Episode) => {
                return (
                  <li key={Episode.key} className={styles.timeline__episodes}>
                    <p className={styles.timeline__data}>
                      {Episode.data}
                    </p>
                    <p className={styles.timeline__title}>
                      {Episode.title}
                    </p>
                    <p className={styles.timeline__description}>
                      {Episode.history.split('\n').map((text, index) => {
                        return (
                          <Fragment key={index}>
                            {text}
                            <br />
                          </Fragment>
                        )
                      })}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Timeline;
