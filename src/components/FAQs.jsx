import { FaQs } from "../data.js";

export default function FAQs() {
  return (
    <section className="px-4 lg:px-30 min-h-screen grid content-center">
      <h3 className="text-titles text-center mb-8 text-2xl font-bold">
        Preguntas Frecuentes
      </h3>
      <div>
        {FaQs.map((question) => (
          <div
            key={question.id}
            className="max-w-2xl mx-auto grid gap-2 mb-4 border-b-2 border-gray-200"
          >
            <h3 className="font-bold mb-2">{question.pregunta}</h3>
            <p className="text-(--color-text-faq) mb-2">{question.respuesta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
