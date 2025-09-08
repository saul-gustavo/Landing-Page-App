import BtnDescarga from "./BtnDescarga";

export default function CTA() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-(--color-purple) to-(--color-cyan) py-30 px-4">
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
    </section>
  );
}
