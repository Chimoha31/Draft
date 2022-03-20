import "./App.css";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/aboutme" element={<AboutMe />} />
      {/* <Route path="/works" element={<Works />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
