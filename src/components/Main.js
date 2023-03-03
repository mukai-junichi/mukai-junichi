import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
