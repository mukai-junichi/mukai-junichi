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
            Webサービスに詳しい知人にコンサルティングを受け、ポイントサイトメディアを立ち上げ運営を行う。
            <br></br>
            アクセス集計や分析、企画に使用するためのバナー制作から、経理や事務業務のための簿記・ファイナンシャルの知識を習得。
            <br></br>
            運営を続けるも業績が安定せず、30歳の時に結婚、妊娠等を機に会社員としての転職を決意。
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
            医療・福祉業界への人材事業及び教育事業を行なっている会社に入社。
            <br></br>
            東京本社の福祉人材部門の営業職として従事し、部門管理業務、責任者業務、ビジネスモデルの再構築、社内の基盤システムの構築等にも携わる。
            <br></br>
            業務の中で課題解決のためにシステムが必要不可欠で、それを自身で作れる人材になりたいと強く思うようになり、エンジニア転職へのチャレンジを決意。
          </p>
        </li>
        <li className={styles.timeline__episodes}>
          <p className={styles.timeline__data}>2020年10月~2020年12月</p>
          <p className={styles.timeline__title}>
            短期プログラミングスクールで学習
          </p>
          <p className={styles.timeline__description}>
            退職し、エンジニア転職するためにプログラミングスクールで学習を開始。
            <br></br>
            Ruby（Ruby on Rails）を短期集中型で学習し卒業。
          </p>
        </li>
        <li className={styles.timeline__episodes}>
          <p className={styles.timeline__data}>35歳~37歳（2021年 - 2022年）</p>
          <p className={styles.timeline__title}>
            エンジニアとして転職（バックエンドがメイン）
          </p>
          <p className={styles.timeline__description}>
            海外ユーザ向けの日本のアニメ情報サイトの開発、保守運営業務に従事。
            <br></br>■ 開発言語<br></br>
            PHP/Symfony, HTML/CSS/SASS, Javascript/jQuery, SQL/MySQL<br></br>■
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
            エンジニアとしての開発スキルを高めたく、ステップアップ転職。<br></br>
            教育機関や一般企業向けに、eラーニングプラットフォームの構築、保守運用のサービス提供している会社にてPMとして従事。<br></br>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
