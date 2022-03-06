
import './App.css';
import Menu from './components/menu/Menu';
import "boxicons"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import HouseInfo from './components/HouseInfo';
import Post from './components/Post';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<HouseInfo />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
