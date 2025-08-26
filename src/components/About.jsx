import CardImg from "../assets/mockup-img.svg";
export default function About() {
  return (
    <section className="px-4 lg:px-30 py-30">
      <div className="text-center max-w-2xl m-auto">
        <h2 className="text-titles text-2xl mb-2">Acerca de nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nulla
          optio nostrum laborum fuga asperiores fugiat minima facilis nihil
          dolor?
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between border-bor-card border-2">
          <div className="text-3xl mb-3">💬</div>
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
          <div className="text-3xl mb-3">📊</div>
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
          <div className="text-3xl mb-3">📱</div>
          <h3 className="font-bold text-lg mb-2">Una gran compatibilidad</h3>
          <p className="text-gray-600 text-sm">
            Descarga nuestra app en Android o iOS y disfruta del contenido en
            cualquier dispositivo.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between border-bor-card border-2">
          <div className="text-3xl mb-3">🔗</div>
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
