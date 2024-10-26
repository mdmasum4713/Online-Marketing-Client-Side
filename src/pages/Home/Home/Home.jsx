import Cart from "../Cart/Cart";
import CompanyName from "../CompanyName/CompanyName";
import Customer from "../Customer/Customer";
import HeroSection from "../HeroSection/HeroSection";
import InstragramShop from "../InstragramShop/InstragramShop";
import Slider from "../Slider/Slider";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import Carusel from "./Carusel/Carusel";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

const Home = () => {
    return (
        <div>
        <Header></Header>
        <div>
         <Navbar></Navbar>
        </div>
        <Carusel></Carusel>
        <Slider></Slider>
        <Cart></Cart>
        <TrendingProducts></TrendingProducts>
        <HeroSection></HeroSection>
        <Customer></Customer>
        <InstragramShop></InstragramShop>
        <CompanyName></CompanyName>
        </div>
    );
};

export default Home;