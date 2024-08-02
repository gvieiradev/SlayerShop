const Banner = () => {
  return (
    <div className=" bg-cover bg-center h-500 bg-blackDemon">
      <div className="float-left w-3/6 ">
        <p className="text-white text-base mt-24 ml-28">Sega (17cm)</p>
        <p className="text-white text-7xl text-center ml-24">Tanjiro Kamado</p>
        <p className="text-white ml-28 mt-2">
          Octava Postura: Inmensa Bruma Llameante
        </p>
        <button
          type="button"
          className="mt-4 ml-28 text-white active:bg-redDemon border hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center w-32 h-10 mb-2"
        >
          Shop Now
        </button>
      </div>
      <div className="float-left w-3/6 pl-12">
        <img src="https://i.ibb.co/47hLgkY/tanjiro-kamado-demon-slayer-kimetsu-no-yaiba-removebg-preview.png" />
      </div>
    </div>
  );
};

export default Banner;
