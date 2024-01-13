import "./App.css";
import HeroConfig from "./component/HeroSection/HeroConfig.json";
import HeroSection from "./component/HeroSection/HeroSection.jsx";
import HomeSection from "./component/HomeSection/HomeSection.jsx";

function App() {
  return (
    <div className="App">
      <div className="Home">
      <HomeSection heroConfig={HeroConfig} />
      </div>

        {HeroConfig.map((section, index) => (
          <div
            key={index}
            id={section.sectionName.replace(/\s+/g, "")}
            className="section"
          >
            <HeroSection {...section} />
          </div>
        ))}
    </div>
  );
}

export default App;
