import Link from "next/link";

const LOGO = {
  title: "Junichi Mukai",
  url: "/",
};

const PAGES = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Works",
    url: "/works",
  },
  {
    name: "Skills",
    url: "/skills",
  },
];

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto flex flex-col items-center p-5 md:flex-row">
        <Link href={LOGO.url} className="mb-4 font-medium md:mb-0">
          <span className="ml-3 text-xl">{LOGO.title}</span>
        </Link>
        <nav className="text-base md:ml-auto">
          <ul className="flex">
            {PAGES.map((page) => {
              return (
                <li key={page.name} className="mx-3 md:ml-5">
                  <Link
                    href={page.url}
                    className="duration-300 hover:text-blue-400"
                  >
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
