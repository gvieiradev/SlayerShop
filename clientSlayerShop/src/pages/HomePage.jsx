import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import SmallerBanners from "../components/SmallerBanners";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Producsts from "../components/Producsts";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <SmallerBanners />
      <Producsts />
      <Category />
      <Footer />
    </div>
  );
};

export default HomePage;
