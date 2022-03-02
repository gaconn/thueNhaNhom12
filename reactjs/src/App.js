
import './App.css';
import Menu from './components/menu/Menu';
import "boxicons"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import HouseInfo from './components/HouseInfo';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<HouseInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
