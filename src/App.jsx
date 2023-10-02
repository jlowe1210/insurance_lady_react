import Jumbo from "./Components/JumboComponent/JumboComponent";
import NarBar from "./Components/NavBarComponent/NavBarComponent";
import "./App.css";
import AboutSection from "./Components/AboutSectionComponent/AboutSectionComponent";
import OurService from "./Components/OurServiceComponent/OurServiceComponent";
import ConsultationComponent from "./Components/ConsultationsComponent/ConsultationsComonent";
import ContactComponent from "./Components/ContactComponent/ContactComponent";
import MapComponent from "./Components/MapComponent/MapComponent";
import FooterComponent from "./Components/FooterComponent/FooterComponent";

function App() {
  return (
    <>
      <NarBar />
      <Jumbo />
      <div className="arrow_img_container">
        <img
          src="./down.png"
          width="40"
          height="40"
          alt="arrow pointing down"
        />
      </div>
      <AboutSection />
      <OurService />
      <ConsultationComponent />
      <ContactComponent />
      <MapComponent />
      <FooterComponent />
    </>
  );
}

export default App;
