import Image from "next/image";
import styles from "./Main.module.scss";
import Header from "./Header";
import Footer from "./Footer";

const Main = ({ title }) => {
  return (
    <>
      <main className={styles.main}>
        <h1>{title}</h1>
      </main>
    </>
  );
};

export default Main;
