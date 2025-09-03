import logoSpark from "../assets/logo-spark.svg";

export default function Navbar() {
  const linksNav = [
    {
      textNav: "Inicio",
      href: "#",
    },
    {
      textNav: "Funciones",
      href: "#",
    },
    {
      textNav: "Preguntas",
      href: "#",
    },
    {
      textNav: "Reseñas",
      href: "#",
    },
  ];

  return (
    <header className="bg-transparent py-4 px-4 lg:px-30 xl:px-50">
      <nav className="flex md:flex-row items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={logoSpark}
            alt="logo spark"
            className="w-full h-auto block"
          />
          <span className="text-2xl">Spark</span>
        </div>
        <ul className="hidden md:flex gap-8 items-center">
          {linksNav.map((text, link) => (
            <a
              href={link.href}
              className="text-black cursor-pointer hover:text-blue-500"
            >
              {text.textNav}
            </a>
          ))}
        </ul>
        <button className="px-6 py-2 bg-gradient-to-b bg-black text-white font-semibold rounded-3xl cursor-pointer hover:opacity-90 shadow-btns hover:shadow-none transition-all duration-100 ease-in">
          Descargar
        </button>
      </nav>
    </header>
  );
}
