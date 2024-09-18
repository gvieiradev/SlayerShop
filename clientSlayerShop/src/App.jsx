import "./App.css";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Producsts from "./components/Producsts";
import SmallerBanners from "./components/SmallerBanners";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <SmallerBanners />
      <Category />
      <Producsts />
      <Footer />
    </>
  );
}

export default App;
