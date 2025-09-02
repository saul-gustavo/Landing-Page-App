import { FaQs } from "../data.js";

export default function FAQs() {
  return (
    <section className="px-4 lg:px-30 min-h-screen flex flex-col items-center gap-4 py-10">
      <div className="mb-8">
        <h3 className="text-titles text-center text-2xl font-bold mb-4">
          Preguntas Frecuentes
        </h3>
        <p className="text-center">
          Encuentra respuesta a las preguntas más frecuentes de la app
        </p>
      </div>
      <div>
        {FaQs.map((question) => (
          <div
            key={question.id}
            className="grid gap-2 mb-4 border-b-2 border-gray-400"
          >
            <h3 className="font-bold mb-1">{question.pregunta}</h3>
            <p className="text-(--color-text-faq) mb-2">{question.respuesta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
