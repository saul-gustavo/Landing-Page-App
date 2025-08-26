export default function Navbar() {
  return (
    <header className="bg-transparent py-4">
      <nav className="flex md:flex-row items-center justify-between">
        <h2 className="text-4xl">Spark</h2>
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Funciones</a>
          </li>
          <li>
            <a href="#">Preguntas</a>
          </li>
          <li>
            <a href="#">Testimonios</a>
          </li>
        </ul>
        <button className="px-6 py-2 bg-gradient-to-b bg-black text-white font-semibold rounded-3xl cursor-pointer hover:opacity-90">
          Descargar
        </button>
      </nav>
    </header>
  );
}
