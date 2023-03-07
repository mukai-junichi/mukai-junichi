import Link from "next/link";

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full border-t border-gray-200 bg-gradient-to-r from-violet-100 via-blue-100 to-indigo-100">
      <div className="container mx-auto flex flex-col items-center justify-center p-5 md:flex-row">
        <span>©{year} Junichi Mukai.</span>
      </div>
    </footer>
  );
};

export default Footer;
