import HeroSection from "./components/Hero";
import WhereSection from "./sections/WhereSection";
import PrzewodnikGosciaSection from "./sections/PrzewodnikGosciaSection";
import Footer from "./components/Footer";
import PhotoSection from "./sections/PhotoSection";

function App() {
  return (
    <div>
      <HeroSection />
      <WhereSection />
      <PrzewodnikGosciaSection />  
      <PhotoSection />  
      <Footer />
    </div>
  );
}

export default App;
