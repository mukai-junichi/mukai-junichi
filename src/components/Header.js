import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">Junichi Mukai</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/works">Works</Link>
          </li>

          <li>
            <Link href="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
