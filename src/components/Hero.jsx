import HeroImg from "../assets/app-imagen.svg";
import BtnDescarga from "../components/BtnDescarga.jsx";
import Navbar from "./Navbar";
export default function Hero() {
  return (
    <div className="relative">
      <section className="w-full px-4 lg:px-30 min-h-screen">
        <Navbar />
        <div className="w-full my-8 grid grid-cols-1 items-center md:grid-cols-2 md:justify-between gap-4">
          <div className="text-center">
            <h1 className="text-3xl text-center lg:text-4xl md:text-left mb-6">
              Transforma tus ideas en proyectos, sin distracciones.
            </h1>
            <p className="mb-4 text-center md:text-left">
              Spark es la app de productividad visual que te ayuda a organizar,
              colaborar y dar vida a tus ideas con una interfaz tan simple como
              poderosa.
            </p>
            <div className="flex justify-center md:justify-start">
              <BtnDescarga />
            </div>
          </div>

          <img
            src={HeroImg}
            alt="hero imagen de la app"
            className="w-[350px] md:w-96 h-auto inline-block mx-auto object-cover"
          />
        </div>
      </section>
      {/* #1d4ed8 */}

      <span className="absolute z-[-100] shadow-[0_0_1000px_75px_#D480FF] bottom-0 left-0"></span>
      <span className="absolute z-[-100] shadow-[0_0_1000px_75px_#D480FF] bottom-0 left-0"></span>
      <span className="absolute z[-100] shadow-[0_0_1000px_80px_#5FE4F6] bottom-0 right-0"></span>
      <span className="absolute z[-100] shadow-[0_0_1000px_80px_#5FE4F6] bottom-0 right-0"></span>
      <span className="absolute z[-100] shadow-[0_0_1000px_85px_#F65FEE] top-0 left-0"></span>
      <span className="absolute z[-100] shadow-[0_0_1000px_85px_#F65FEE] top-0 left-0"></span>
      <span className="absolute z-[-100] shadow-[0_0_1000px_90px_#4CFF0B] top-4 right-0"></span>
      <span className="absolute z-[-100] shadow-[0_0_1000px_90px_#4CFF0B] top-4 right-0"></span>
    </div>
  );
}
