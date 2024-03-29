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
    <header className="fixed z-10 w-full bg-white drop-shadow">
      <div className="container mx-auto flex flex-col items-center p-5 md:flex-row">
        <Link
          href={LOGO.url}
          className="mb-4 hidden font-medium md:mb-0 md:block"
        >
          <span className="ml-3 text-xl">{LOGO.title}</span>
        </Link>
        <nav className="text-base md:ml-auto">
          <ul className="flex">
            {PAGES.map((page) => {
              return (
                <li key={page.name} className="mx-3 md:ml-7">
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
