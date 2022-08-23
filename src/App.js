import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Navbar from './pages/Shared/Navbar';
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/appointment" element={<Appointment/>} />
      </Routes>
    </div>
  );
}

export default App;
