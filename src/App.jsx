import Navbar from "./components/navbar/Navbar";
import Hero from "./section/hero/Hero";
import Category from "./section/category/Category";
import FeaturesFruit from "./section/features/FeaturesFruit";
import Banner from "./section/banner/Banner";
import Blog from "./section/blog/Blog";
import NewLetter from "./section/news/NewLetter";
import Footer from "./section/footer/Footer";
import FeaturesCard from "./section/feature_card/FeaturesCard";
import Sidebar from "./components/navbar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <FeaturesFruit />
      <Banner />
      <Blog />
      <NewLetter />
      <FeaturesCard />
      <Footer />
    </>
  );
}

export default App;
