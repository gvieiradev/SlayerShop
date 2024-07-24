const Banner = () => {
  return (
    <div>
      <div className="bg-black h-500 float-left w-3/6">
        <p className="text-white text-base mt-24 ml-16">Sega (17cm)</p>
        <p className="text-white text-7xl text-center">Tanjiro Kamado</p>
        <p className="text-white ml-16 mt-2">
          Octava Postura: Inmensa Bruma Llameante
        </p>
        <button
          type="button"
          className="mt-4 ml-16 text-gray-900 hover:text-color-primary border border-primary hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-32 h-10 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Shop Now
        </button>
      </div>
      <div className="bg-black float-left w-3/6">
        <img src="https://i.ibb.co/47hLgkY/tanjiro-kamado-demon-slayer-kimetsu-no-yaiba-removebg-preview.png" />
      </div>
    </div>
  );
};

export default Banner;
