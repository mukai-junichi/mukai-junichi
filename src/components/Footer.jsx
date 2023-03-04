import Link from "next/link";

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
  return(
    <footer className="absolute z-10 w-full border-t border-gray-200 bg-white">
      <div className="container mx-auto flex flex-col justify-center items-center p-5 md:flex-row">
        <span>©{year} Junichi Mukai.</span>
      </div>
    </footer>
  );
}

export default Footer;
