import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/Login/SignUp";
import Navbar from './pages/Shared/Navbar';


function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment/>
          </RequireAuth>
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        }>
        {/* Nester Route */}
        <Route index element={<MyAppointment></MyAppointment>}></Route>
        <Route path="review" element={<MyReview></MyReview>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
