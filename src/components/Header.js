import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container flex flex-col md:flex-row items-center mx-auto p-5">
        <Link href="/" className="font-medium mb-4 md:mb-0">
          <span className="text-xl ml-3">Junichi Mukai</span>
        </Link>
        <nav className="md:ml-auto text-base">
          <ul className="flex">
            <li className="mr-5">
              <Link href="/" className=" hover:text-blue-400 duration-300">
                Home
              </Link>
            </li>
            <li className="mr-5">
              <Link href="/about" className=" hover:text-blue-400 duration-300">
                About
              </Link>
            </li>
            <li className="mr-5">
              <Link href="/works" className=" hover:text-blue-400 duration-300">
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className=" hover:text-blue-400 duration-300"
              >
                Skills
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
