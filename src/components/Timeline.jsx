import styles from "./Timeline.module.scss";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <h2 className={styles.timeline__headline}>20代</h2>
      <ul className={styles.timeline__content}>
        <li className={styles.timeline__episodes}>
          <p className={styles.timeline__data}>22歳〜23歳（2008年 - 2008年）</p>
          <p className={styles.timeline__title}>
            【営業】新卒で不動産会社に入社
          </p>
          <p className={styles.timeline__description}>
            大学では建築を専攻し、大阪の不動産会社に新卒で入社。
          </p>
        </li>
        <li className={styles.timeline__episodes}>
          <p className={styles.timeline__data}>23歳〜25歳（2008年 - 2011年）</p>
          <p className={styles.timeline__title}>
            【営業・新規事業立ち上げ】知人が会社を設立し、誘いを受け転職
          </p>
          <p className={styles.timeline__description}>
            ホームセキュリティ機器販売の営業職として従事し、兼任して新規事業の立ち上げも担当。
            <br></br>
            24歳の時に新しく支店を開設し、福岡へ転勤。<br></br>
            25歳の時に会社が倒産。
          </p>
        </li>
        <li className={styles.timeline__episodes}>
          <p className={styles.timeline__data}>25歳〜30歳（2011年 - 2015年）</p>
          <p className={styles.timeline__title}>
            【起業・経営】前職の同僚と会社を設立
          </p>
          <p className={styles.timeline__description}>
            知人にコンサルティングを受け、ポイントサイトメディアを立ち上げ運営を行う。
            <br></br>
            アクセス集計・分析、企画・運営、サイトのバナー制作、経理・事務業務等、経営を経験し必要知識を習得。
            <br></br>
            運営を続けるも業績が安定せず、30歳の時に会社員としての転職を決意。
          </p>
        </li>
      </ul>
      <h2 className={styles.timeline__headline}>30代</h2>
      <ul className={styles.timeline__content}>
        <li className={styles.timeline__episodes}>
          <p className={styles.timeline__data}>30歳〜35歳（2015年 - 2020年）</p>
          <p className={styles.timeline__title}>
            【営業・部門管理】会社員として転職
          </p>
          <p className={styles.timeline__description}>
            医療・福祉業界特化型の人材派遣・紹介業及び教育事業を行なっている会社に入社。
            <br></br>
            東京本社の福祉人材部門に配属となり営業職として従事。
            <br></br>
            その後、部門管理・運営、新規事業の考案・既存事業のビジネスモデルの見直し、社内の基盤システムの構築等にも携わる。
            <br></br>
            業務の中で課題解決のためにシステムが必要不可欠で、それを自身で作れる人材になりたいと強く思うようになり、エンジニア転職へのチャレンジを決意。
          </p>
        </li>
        <li className={styles.timeline__episodes}>
          <p className={styles.timeline__data}>2020年10月~2020年12月</p>
          <p className={styles.timeline__title}>
            【学習】短期プログラミングスクールで学習
          </p>
          <p className={styles.timeline__description}>
            退職し、エンジニア転職するためにプログラミングスクールで学習を開始。
            <br></br>
            約3ヶ月間の短期集中型でHTML・CSS・JavaScript・Ruby（Ruby on Rails）等を学習。
          </p>
        </li>
        <li className={styles.timeline__episodes}>
          <p className={styles.timeline__data}>35歳~37歳（2021年 - 2022年）</p>
          <p className={styles.timeline__title}>
            【エンジニア】スクールでの学習を終えバックエンドエンジニアとして転職（フロントも一部対応）
          </p>
          <p className={styles.timeline__description}>
            海外ユーザ向けの日本のアニメ情報サイトの開発、保守運営業務に従事。
            <br></br>■ 開発言語<br></br>
            PHP/Symfony, SQL/MySQL, HTML/CSS/SASS, Javascript/jQuery<br></br>■
            インフラ・その他<br></br>
            AWS, GA4/GTM, GitHub, Slack, MacPC
          </p>
        </li>
        <li className={styles.timeline__episodes}>
          <p className={styles.timeline__data}>37歳~（2022年 - 現在）</p>
          <p className={styles.timeline__title}>
            【エンジニア兼PM】ステップアップのため転職
          </p>
          <p className={styles.timeline__description}>
            エンジニアとしての開発スキルを高めたく、ステップアップ転職。
            <br></br>
            教育機関や一般企業向けに、eラーニングプラットフォームの構築、保守運用のサービス提供している会社にてPMとして従事。
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
