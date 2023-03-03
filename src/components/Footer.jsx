import Link from "next/link";

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
  return(
    <footer className="border-t border-gray-200">
      <div className="container mx-auto flex flex-col justify-center items-center p-5 md:flex-row">
        <span>©{year} Junichi Mukai.</span>
      </div>
    </footer>
  );
}

export default Footer;
