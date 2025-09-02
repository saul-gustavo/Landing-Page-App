import { Reseñas } from "../data.js";
export default function Reviews() {
  return (
    <section className="px-4 py-20 mb-4 md:px-20 lg:px-30 xl:px-50">
      <h4 className="mb-10 text-2xl text-center text-titles font-bold">
        Reseñas
      </h4>
      <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Reseñas.map((review) => (
          <article
            className="py-4 px-2 rounded-2xl shadow-xl border-1 border-gray-300"
            key={review.avatar}
          >
            <img
              src={review.avatar}
              alt="avatar de la reseña"
              className="block w-15 h-15 mx-auto my-2"
            />
            <div className="text-center">
              <span className="text-gray-600">{review.nombre}</span>
              <p className="font-semibold text-gray-600 mt-2 ">
                "{review.reseña}"
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// px-4 my-10 md:px-20 lg:px-30 xl:px-50
