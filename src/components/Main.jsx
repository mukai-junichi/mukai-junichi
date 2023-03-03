import Image from "next/image";

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
