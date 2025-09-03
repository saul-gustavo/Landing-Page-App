import logoSpark from "../assets/logo-spark.svg";

export default function Footer() {
  const footerLinks = {
    proteccion: [
      {
        fooText: "Privacidad",
        href: "#",
      },
      {
        fooText: "Terminos de Uso",
        href: "#",
      },
      {
        fooText: "Datos del usuario",
        href: "#",
      },
    ],
    guia: [
      {
        fooText: "Compatibilidad",
        href: "#",
      },
      {
        fooText: "Uso de la App",
        href: "#",
      },
      {
        fooText: "Documentación",
        href: "#",
      },
    ],
    documento: [
      {
        fooText: "Disponibilidad",
        href: "#",
      },
      {
        fooText: "Centro de Ayuda",
        href: "#",
      },
      {
        fooText: "API",
        href: "#",
      },
    ],
  };

  return (
    <footer className="px-4 py-10 lg:px-30 xl:px-50 bg-footer-bg">
      <div className="text-white pb-4 border-line-footer border-b-2 w-full flex flex-col gap-4 md:flex-row items-center md:justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={logoSpark}
            alt="logo spark"
            className="w-full h-auto block"
          />
          <span className="text-2xl">Spark</span>
        </div>
        <div className="flex gap-2" id="redes">
          <div className="rounded-full bg-red-500 w-6 h-6"></div>
          <div className="rounded-full bg-red-500 w-6 h-6"></div>
          <div className="rounded-full bg-red-500 w-6 h-6"></div>
          <div className="rounded-full bg-red-500 w-6 h-6"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <ul className="flex flex-col gap-2">
          <span className="text-footer-link">Protección al usuario</span>
          {footerLinks.proteccion.map((text, links) => (
            <a
              href={links.href}
              className="text-white hover:text-blue-400 w-fit cursor-pointer"
            >
              {text.fooText}
            </a>
          ))}
        </ul>
        <ul className="flex flex-col gap-2">
          <span className="text-footer-link">Guia Rapida</span>
          {footerLinks.guia.map((text, links) => (
            <a
              href={links.href}
              className="text-white hover:text-blue-400 w-fit cursor-pointer"
            >
              {text.fooText}
            </a>
          ))}
        </ul>
        <ul className="flex flex-col gap-2">
          <span className="text-footer-link">Recursos</span>
          {footerLinks.documento.map((text, links) => (
            <a
              href={links.href}
              className="text-white hover:text-blue-400 w-fit cursor-pointer"
            >
              {text.fooText}
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
}
