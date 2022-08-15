import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./pages/About/About";
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
