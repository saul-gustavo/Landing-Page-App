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
        <h2 className="text-3xl md:text-4xl">Spark</h2>
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
        <button className="px-6 py-2 bg-gradient-to-b bg-black text-white font-semibold rounded-3xl cursor-pointer hover:opacity-90">
          Descargar
        </button>
      </nav>
    </header>
  );
}
