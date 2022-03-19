import "./App.css";
import Home from "./components/Home/Home";
import Timelines from "./components/Timeline/Timelines";
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
      <Route path="/timeline" element={<Timelines />} />
      </Routes>
    </Router>
  );
}

export default App;
