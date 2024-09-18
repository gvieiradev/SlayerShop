import { BsFileImage } from "react-icons/bs";
import {
  GiCharacter,
  GiKatana,
  GiNewspaper,
  GiSparkles,
  GiTShirt,
} from "react-icons/gi";

const Category = () => {
  return (
    <div>
      <div className="m-auto bg-blackDemon h-22 py-20 px-40">
        <h1 className="text-white text-2xl pb-8">Búsqueda por categoría</h1>
        <div className="flex justify-between gap-x-8">
          <div className="bg-redDemon rounded-2xl w-40 h-32 flex justify-center p-5 cursor-pointer">
            <div>
              <GiCharacter className="w-12 h-12 ml-4 mb-3 text-white" />
              <p className="text-base text-white">Personajes</p>
            </div>
          </div>
          <div className="bg-redDemon rounded-2xl w-40 h-32 flex justify-center p-5 cursor-pointer">
            <div>
              <GiNewspaper className="w-12 h-12 ml-1 mb-3 text-white" />
              <p className="text-base text-white">Manga</p>
            </div>
          </div>
          <div className="bg-redDemon rounded-2xl w-40 h-32 flex justify-center p-5 cursor-pointer">
            <div>
              <GiTShirt className="w-12 h-12 ml-1 mb-3 text-white" />
              <p className="text-base text-white">Merch</p>
            </div>
          </div>
          <div className="bg-redDemon rounded-2xl w-40 h-32 flex justify-center p-5 cursor-pointer">
            <div>
              <GiKatana className="w-12 h-12 ml-2 mb-3 text-white" />
              <p className="text-base text-white">Katanas</p>
            </div>
          </div>
          <div className="bg-redDemon rounded-2xl w-40 h-32 flex justify-center p-5 cursor-pointer">
            <div>
              <GiSparkles className="w-12 h-12 ml-3 mb-3 text-white" />
              <p className="text-base text-white">Accesorios</p>
            </div>
          </div>
          <div className="bg-redDemon rounded-2xl w-40 h-32 flex justify-center p-5 cursor-pointer">
            <div>
              <BsFileImage className="w-12 h-12 ml-1 mb-3 text-white" />
              <p className="text-base text-white">Posters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
