import BtnDescarga from "../components/BtnDescarga.jsx";
import Navbar from "./Navbar";
export default function Hero() {
  return (
    <div id="inicio">
      <section className="min-h-screen flex flex-col bg-gradient-to-b from-(--color-gradient-blue) to-(--color-gradient-blue-op)">
        <Navbar />
        <div className="w-full max-w-3xl m-auto px-4">
          <div className="bg-white rounded-full flex gap-2 items-center justify-center p-2 w-full max-w-56 mx-auto my-4 shadow-msg ">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span>Nueva versión disponible</span>
          </div>

          <h1 className="text-3xl md:text-4xl text-center lg:text-5xl mb-6 text-titles font-bold ">
            Transforma tus ideas en proyectos, sin distracciones.
          </h1>
          <p className="mb-4 text-center">
            Spark es la app de productividad visual que te ayuda a organizar,
            colaborar y dar vida a tus ideas con una interfaz tan simple como
            poderosa.
          </p>
          <div className="flex justify-center items-center">
            <BtnDescarga />
          </div>
        </div>
      </section>
    </div>
  );
}
