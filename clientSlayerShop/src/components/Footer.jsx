import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="m-auto bg-black h-72 py-20 px-20">
        <div className="flex justify-between gap-x-8 mb-5">
          <div>
            <img
              className="inline-block items-center pb-4"
              src="https://i.ibb.co/MCLD24s/vecteezy-japanese-kitsune-mask-ai-5.png"
            />
            <p className="text-white pb-10">
              El rincón donde los sueños de los fanáticos se hacen realidad
            </p>
            <div className="flex">
              <a className="w-4 h-4 text-white" href="#">
                <BsGithub />
              </a>
              <a className="w-4 h-4 text-white px-4" href="#">
                <BsInstagram />
              </a>
              <a className="w-4 h-4 text-white px-4" href="#">
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">Servicios</p>
            <a
              className="block text-sm font-light text-white py-1 border-solid"
              href="#"
            >
              Afiliados
            </a>
            <a
              className="block block text-sm font-light text-white py-1"
              href="#"
            >
              Tarjeta de regalo
            </a>
            <a
              className="block block text-sm font-light text-white py-1"
              href="#"
            >
              Metodos de pagos
            </a>
            <a
              className="block block text-sm font-light text-white py-1"
              href="#"
            >
              Servicios
            </a>
            <a
              className="block block text-sm font-light text-white py-1"
              href="#"
            >
              Pagos
            </a>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">
              Asistencia al comprador
            </p>
            <a className="block text-sm font-light text-white py-1" href="#">
              Buscar un pedido
            </a>
            <a
              className="block block text-sm font-light text-white py-1"
              href="#"
            >
              Condiciones de entrega
            </a>
            <a
              className="block block text-sm font-light text-white py-1"
              href="#"
            >
              Cambios y devoluciones
            </a>
            <a
              className="block block text-sm font-light text-white py-1"
              href="#"
            >
              Garantía
            </a>
            <a
              className="block block text-sm font-light text-white py-1"
              href="#"
            >
              Preguntas frecuentes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
