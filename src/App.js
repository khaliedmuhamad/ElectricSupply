import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { LandingPage } from "./pages/Landingpage/LandingPage";
import OurTeam from "./components/OurTeam/OurTeam";
function App() {
  return (
    <div className="App ">
      <LandingPage />
    </div>
  );
}

export default App;
