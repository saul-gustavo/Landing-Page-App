import logoApple from "../assets/logo-apple.svg";
import logoPlay from "../assets/logo-playstore.svg";

export default function BtnDescarga() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <div className="text-left flex items-center gap-2 px-4 py-1 bg-black text-white rounded-3xl w-52 hover:opacity-80 transition-all duration-100 cursor-pointer shadow-btns">
        <img src={logoApple} alt="logo de la tienda de apple" />
        <div className="flex flex-col">
          <span>Disponible en la</span>
          <span>App Store</span>
        </div>
      </div>

      <div className="text-left flex items-center gap-2 px-4 py-1 bg-black text-white rounded-3xl w-52 hover:opacity-80 transition-all duration-100 cursor-pointer shadow-btns">
        <img src={logoPlay} alt="logo de la tienda de android play store" />
        <div className="flex flex-col">
          <span>Disponible en la</span>
          <span>Google Play</span>
        </div>
      </div>
    </div>
  );
}
