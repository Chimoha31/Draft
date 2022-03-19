import './App.css';
import Home from './components/Home/Home';
import Pointer from './components/Home/parts/Pointer';

function App() {
  return (
    <div className="home_container">
      <Pointer />
      <Home />
    </div>
  );
}

export default App;
