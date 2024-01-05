import "./App.css";
import HeroConfig from "./component/HeroSection/HeroConfig.json";
// import Header from "./component/Header/Header.jsx";
import HeroSection from "./component/HeroSection/HeroSection.jsx";
import logoAM from "./media/logo-AM.png";
import HomeSection from "./component/HomeSection/HomeSection.jsx";

function App() {
  return (
    <div className="App">
      <div className="Home">
        <HomeSection/>
      </div>
        <div className="logo">
            <img
              className="logoPNG"
              src={logoAM}
              alt="Logo A.M Adlane.Ould :)"
            />
        </div>
      <div>
        {HeroConfig.map((section, index) => (
          <HeroSection key={index} {...section} />
        ))}
      </div>
    </div>
  );
}

export default App;
