import "./App.css";
import ReactDOM from "react-dom/client";
import { Routes, Route , BrowserRouter } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import NoPage from "./pages/NoPage/NoPage";



function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="project" element={<ProjectPage />} />
          {/* <Route path="contact" element={<ContactPage />} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
