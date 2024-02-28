import LandingPage from "./LandPage/LandingPage";
import HeroSection from "./LandPage/HerroSection";
import HerroSecond from "./LandPage/HerroSecond";
import BlogFooter from "./LandPage/BlogFooter";
import MarketFooter from "./LandPage/MarketFooter";
import { Route, Routes } from "react-router-dom"; // Import Routes from 'react-router-dom'


const images = [
  "https://via.placeholder.com/500",
  "https://via.placeholder.com/500",
  "https://via.placeholder.com/500",
];

const Home = () => {
  return (
    <>
      <LandingPage />
      <Routes>
        {" "}
        <Route path="/" element={<HeroSection />} />
      </Routes>
        
      <HerroSecond images={images} />
      <BlogFooter />
      <MarketFooter />
    </>
  );
};

export default Home;
