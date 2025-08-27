import CardImg from "../assets/mockup-img.svg";
import iconColab from "../assets/icon-colab.svg";
import iconCompa from "../assets/icon-compatible.svg";
import iconTablero from "../assets/icon-tableros.svg";
import iconNet from "../assets/icon-network.svg";
export default function About() {
  return (
    <section className="px-4 lg:px-30 xl:px-50 py-30">
      <div className="text-center max-w-2xl m-auto">
        <h2 className="text-titles text-2xl mb-2 font-bold">
          La manera más simple de organizar tu universo creativo.
        </h2>
        <p>
          Diseñada para ser tan intuitiva como tu mente. Crea tableros, arrastra
          ideas y conecta a tu equipo en un solo lugar. Con Spark, la
          creatividad fluye sin límites.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between border-bor-card border-2">
          <img
            src={iconColab}
            alt="icono colaboracion funcion de la app"
            className="w-full max-w-10 block object-cover"
          />
          <h3 className="font-bold text-lg mb-2">Colabora en tiempo real</h3>
          <p className="text-gray-600 text-sm">
            Invita a tu equipo y trabajen juntos en el mismo proyecto, viendo
            los cambios al instante.
          </p>
        </div>
        {/* Card central (el celular) */}
        <div className="bg-gradient-to-b from-(--color-purple) to-(--color-cyan) shadow-lg rounded-2xl flex items-center justify-center col-span-1 row-span-2">
          <img
            src={CardImg} // pon aquí tu imagen del celular
            alt="App Preview mockup"
            className="w-[280px] h-auto object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between border-bor-card border-2">
          <img
            src={iconTablero}
            alt="icono de los tableros de la app"
            className="w-full max-w-10 block object-cover"
          />
          <h3 className="font-bold text-lg mb-2">
            Tableros visuales infinitos
          </h3>
          <p className="text-gray-600 text-sm">
            Crea mapas mentales, listas de tareas o moodboards en un lienzo
            ilimitado y personalizable.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between border-bor-card border-2">
          <img
            src={iconCompa}
            alt="icono de compatibilidad de la app"
            className="w-full max-w-10 block object-cover"
          />
          <h3 className="font-bold text-lg mb-2">Una gran compatibilidad</h3>
          <p className="text-gray-600 text-sm">
            Descarga nuestra app en Android o iOS y disfruta del contenido en
            cualquier dispositivo.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between border-bor-card border-2">
          <img
            src={iconNet}
            alt="icono de sincronizacion de la app"
            className="w-full max-w-10 block object-cover"
          />
          <h3 className="font-bold text-lg mb-2">Sincronización total</h3>
          <p className="text-gray-600 text-sm">
            Accede a tus proyectos desde móvil, tablet o web en cualquier
            dispositivo.
          </p>
        </div>
      </div>
    </section>
  );
}
