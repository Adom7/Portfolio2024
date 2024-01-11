import "./App.css";
import HeroConfig from "./component/HeroSection/HeroConfig.json";
// import Header from "./component/Header/Header.jsx";
import HeroSection from "./component/HeroSection/HeroSection.jsx";
import HomeSection from "./component/HomeSection/HomeSection.jsx";

function App() {
  return (
    <div className="App">
      <div className="Home">
        <HomeSection/>

        {HeroConfig.map((section, index) => (
          <HeroSection key={index} {...section} />
        ))}
      </div>
    </div>
  );
}

export default App;