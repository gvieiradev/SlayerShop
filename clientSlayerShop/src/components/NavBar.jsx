import {
  BsCart2,
  BsFileImage,
  BsHeart,
  BsPerson,
  BsSearch,
} from "react-icons/bs";
import {
  GiCharacter,
  GiKatana,
  GiNewspaper,
  GiSparkles,
  GiTShirt,
} from "react-icons/gi";

const NavBar = () => {
  const Links = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Contact Us", path: "contact" },
    { link: "Feature", path: "feature" },
  ];

  return (
    <div>
      <nav className="bg-blackDemon md:px-6 p-2 max-w-screen-2xl mx-auto">
        {/* navbar */}
        <div className="text-lg container mx-auto flex justify-between items-center">
          <div className="flex space-x-14 items-center">
            {/* logo */}
            <a href="" className="flex items-center space-x-3 ">
              <img
                className="inline-block items-center"
                src="https://i.ibb.co/MCLD24s/vecteezy-japanese-kitsune-mask-ai-5.png"
              />
            </a>

            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400">
                  <BsSearch />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="w-96 p-2.5 ps-9 text-sm text-gray-900 border rounded-lg bg-gray-50"
                placeholder="Search"
              />
            </div>

            {/* links */}
            <ul className="md:flex space-x-12">
              {Links.map(({ link, path }) => (
                <a
                  className="block text-white text-base font-medium hover:text-redDemon active:text-red-800"
                  key={link}
                  href={path}
                >
                  {link}
                </a>
              ))}
            </ul>

            {/* links icons */}
            <div className="space-x-12 hidden md:flex items-center ">
              <a href="" className="w-5 h-5 hidden lg:flex items center ">
                <BsHeart className="w-5 h-5 text-white hover:text-redDemon active:text-red-800 " />
              </a>
              <a href="" className="w-5 h-5 hidden lg:flex items center">
                <BsCart2 className="w-5 h-5 text-white hover:text-redDemon active:text-red-800" />
              </a>
              <a href="" className="w-5 h-5 hidden lg:flex items center">
                <BsPerson className="w-5 h-5 text-white hover:text-redDemon active:text-red-800" />
              </a>
            </div>
          </div>
        </div>

        {/* subNavbar */}
      </nav>
      <div className="container h-10 max-w-screen-2xl mx-auto flex justify-between items-center bg-redDemon">
        <ul className="md:flex items-center space-x-10 m-auto">
          <a
            href=""
            className="flex px-6 items-center text-white font-medium hover:text-blackDemon active:text-gray-900"
          >
            <GiCharacter className="mx-2" />
            Personajes
          </a>
          <a
            href=""
            className="flex px-6 items-center text-white font-medium hover:text-blackDemon active:text-gray-900"
          >
            <GiNewspaper className="mx-2" />
            Manga
          </a>
          <a
            href=""
            className="flex px-6 items-center text-white font-medium hover:text-blackDemon active:text-gray-900"
          >
            <GiTShirt className="mx-2" />
            Merch
          </a>
          <a
            href=""
            className="flex px-6 items-center text-white font-medium hover:text-blackDemon active:text-gray-900"
          >
            <GiKatana className="mx-2" />
            Katanas
          </a>
          <a
            href=""
            className="flex px-6 items-center text-white font-medium hover:text-blackDemon active:text-gray-900"
          >
            <GiSparkles className="mx-2" />
            Accesorios
          </a>
          <a
            href=""
            className="flex px-6 items-center text-white font-medium hover:text-blackDemon active:text-gray-900"
          >
            <BsFileImage className="mx-2" />
            Posters
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
