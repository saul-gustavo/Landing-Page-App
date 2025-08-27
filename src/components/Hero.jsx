import HeroImg from "../assets/app-imagen.svg";
import BtnDescarga from "../components/BtnDescarga.jsx";
import Navbar from "./Navbar";
export default function Hero() {
  return (
    <div className="relative">
      <Navbar />
      <section className="w-full px-4 lg:px-30 xl:px-50 min-h-screen flex flex-col lg:flex-row items-center justify-center ">
        <div className="w-full my-8 flex flex-col items-center md:flex-row gap-4">
          <div className="text-center">
            <h1 className="text-4xl text-center lg:text-5xl md:text-left mb-6 font-semibold">
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

          <div className="w-full">
            <img
              src={HeroImg}
              alt="hero imagen de la app"
              className="w-full max-w-80 md:max-w-96 h-auto block m-auto object-cover"
            />
          </div>
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
