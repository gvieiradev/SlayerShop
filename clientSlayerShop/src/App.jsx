import "./App.css";
import Banner from "./components/Banner";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import SmallerBanners from "./components/SmallerBanners";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <SmallerBanners />
      <Category />
    </>
  );
}

export default App;
