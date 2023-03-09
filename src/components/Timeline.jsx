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
        title: "【営業・新規事業立ち上げ】知人が会社を設立し、誘いを受け転職",
        history:
          "ホームセキュリティ機器販売の営業職として従事し、兼任して新規事業の立ち上げも担当。\n24歳の時に新しく支店を開設し、福岡へ転勤。\n25歳の時に会社が倒産。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        data: "25歳〜30歳（2011年 - 2015年）",
        title: "【起業・経営】前職の同僚と会社を設立",
        history:
          "知人にコンサルティングを受け、ポイントサイトメディアを立ち上げ運営を行う。\nアクセス集計・分析、企画・運営、サイトのバナー制作、経理・事務業務等、経営を経験し必要知識を習得。\n運営を続けるも業績が安定せず、30歳の時に会社員としての転職を決意。",
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
          "医療・福祉業界特化型の人材派遣・紹介業及び教育事業を行なっている会社に入社。\n東京本社の福祉人材部門に配属となり営業職として従事。\nその後、部門管理・運営、新規事業の考案・既存事業のビジネスモデルの見直し、社内の基盤システムの構築等にも携わる。\n業務の中で課題解決のためにシステムが必要不可欠で、それを自身で作れる人材になりたいと強く思うようになり、エンジニア転職へのチャレンジを決意。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        data: "2020年10月~2020年12月",
        title: "【学習】短期プログラミングスクールで学習",
        history:
          "退職し、エンジニア転職するためにプログラミングスクールで学習を開始。\n約3ヶ月間の短期集中型でHTML・CSS・JavaScript・Ruby（Ruby on Rails）等を学習。",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        data: "35歳~37歳（2021年 - 2022年）",
        title:
          "【エンジニア】スクールでの学習を終えバックエンドエンジニアとして転職（フロントも一部対応）",
        history:
          "海外ユーザ向けの日本のアニメ情報サイトの開発、保守運営業務に従事。\n■ 開発言語\nPHP/Symfony, SQL/MySQL, HTML/CSS/SASS, Javascript/jQuery\n■インフラ・その他\nAWS, GA4/GTM, GitHub, Slack, MacPC",
      },
      {
        key: Math.floor(Math.random() * 1e3),
        data: "37歳~（2022年 - 現在）",
        title: "【エンジニア兼PM】ステップアップのため転職",
        history:
          "エンジニアとしての開発スキルを高めたく、ステップアップ転職。\n教育機関や一般企業向けに、eラーニングプラットフォームの構築、保守運用のサービス提供している会社にてPMとして従事。",
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
