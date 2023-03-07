import Link from "next/link";

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full border-t border-gray-300 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-center p-5 md:flex-row">
        <span>©{year} Junichi Mukai.</span>
      </div>
    </footer>
  );
};

export default Footer;
