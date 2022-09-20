import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { LandingPage } from './pages/Landingpage/LandingPage';
function App() {
  console.log("first")
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
