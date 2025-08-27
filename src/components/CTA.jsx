import BtnDescarga from "./BtnDescarga";

export default function CTA() {
  return (
    <div className="py-20 w-full px-4">
      <section className="px-4 w-full max-w-[1200px] m-auto rounded-4xl flex flex-col items-center justify-center bg-gradient-to-b from-(--color-purple) to-(--color-cyan) h-[500px]">
        <div className="max-w-3xl m-auto text-center">
          <h3 className="mb-4 font-bold text-2xl md:text-4xl">
            ¿Listo para encender tu creatividad
          </h3>
          <p className="mb-4 font-semibold">
            Únete a miles de mentes creativas que ya están desbloqueando su
            potencial. Descarga Spark hoy mismo y empieza gratis.
          </p>
          <span className="mb-4">Descarga Spark (Es Gratis)</span>
          <div className="flex justify-center">
            <BtnDescarga />
          </div>
        </div>
      </section>
    </div>
  );
}
