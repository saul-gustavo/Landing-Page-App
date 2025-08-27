export default function Footer() {
  return (
    <footer className="px-4 lg:px-30 xl:px-50 border-2 bg-black py-8">
      <div className="text-white pb-4 border-line-footer border-b-2 w-full">
        <h1 className="text-3xl lg:text-4xl text-center md:text-left">Spark</h1>
      </div>
      <div className="mt-4 flex flex-col justify-center gap-8 items-center md:flex-row md:justify-between md:items-start">
        <ul className="text-white text-center md:text-left">
          <li className="mb-2">
            <span className="text-gray-300">Proteccion al usuario</span>
          </li>
          <li>Privacidad</li>
          <li>Terminos de Uso</li>
          <li>Datos del Usuario</li>
        </ul>
        <ul className="text-white text-center md:text-left">
          <li className="mb-2">
            <span className="text-gray-300">Guia Rapida</span>
          </li>
          <li>Copatibilidad</li>
          <li>Uso de la App</li>
          <li>Apartados de la App</li>
        </ul>
        <div id="redes" className="inline-flex gap-3">
          <div className="w-6 h-6 rounded-4xl bg-red-300"></div>
          <div className="w-6 h-6 rounded-4xl bg-red-300"></div>
          <div className="w-6 h-6 rounded-4xl bg-red-300"></div>
          <div className="w-6 h-6 rounded-4xl bg-red-300"></div>
        </div>
      </div>
    </footer>
  );
}
