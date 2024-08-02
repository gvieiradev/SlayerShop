const SmallerBanners = () => {
  return (
    <div>
      <div className="w-3/6 h-600 float-left">
        <div className="w-full h-80 bg-whiteDemon p-5 flex align-center">
          <img
            className="w-64 h-64"
            src="https://i.ibb.co/PtqLJgd/dca7561e098b54fe674abed7b9c496e9-removebg-preview.png"
          />
          <div className="ml-16 mt-12">
            <h1 className="text-6xl font-medium">Giyū Tomioka</h1>
            <p className="text-base font-medium">Kimono de Tomioka Giyū</p>
            <p className="text-xs font-medium">Kimetsu no yaiba</p>
          </div>
        </div>
        <div className="h-300 w-320 bg-violetDemon float-left flex align-center p-1">
          <img
            className="ml-[-10rem]"
            src="https://i.ibb.co/M92qLdL/DEMON-SLAYER-ZENITSU-TRANSFORMING-FUNKO-POP-removebg-preview.png"
          />
          <div className="mt-24 ml-[-1rem]">
            <h1 className="text-4xl font-medium">Zenitsu Agatsuma</h1>
            <p className="text-base font-medium">Funko Pop</p>
            <p className="text-xs font-medium">Destello del Relámpago</p>
          </div>
        </div>
        <div className="h-300 w-320 bg-roseDemon float-right flex align-center">
          <img
            className="w-50 h-72 mt-5"
            src="https://i.ibb.co/YNb5RxN/imagen-2024-08-02-200244910-removebg-preview-1.png"
          />
          <div className="mt-24 ml-12">
            <h1 className="text-4xl font-medium">Sabito</h1>
            <p className="text-base font-medium">Mascara de aprendiz</p>
            <p className="text-xs font-medium">
              Arco Resolución Inquebrantable
            </p>
          </div>
        </div>
      </div>
      <div className="w-3/6 h-600 bg-redDemon float-right">
        <div className="flex justify-end h-full">
          <img
            className="w-60 h-full"
            src="https://i.ibb.co/9sST13Y/akaza-06-removebg-preview-1.png"
          />
        </div>
        <div className="mt-[-320px] ml-10">
          <h1 className="text-6xl font-medium">Akaza</h1>
          <p className="text-base font-medium">Luna Superior 3</p>
          <p className="text-xs font-medium">Técnica de Sangre Demoníaca</p>
          <button
            type="button"
            className="mt-4 text-white active:bg-blackDemon border hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center w-32 h-10 mb-2"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default SmallerBanners;
