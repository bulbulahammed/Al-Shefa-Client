import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import ContactPage from './pages/Contact/ContactPage';
import AddDoctor from './pages/Dashboard/AddDoctor';
import Dashboard from "./pages/Dashboard/Dashboard";
import History from "./pages/Dashboard/History";
import ManageDoctors from './pages/Dashboard/ManageDoctors';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';
import Payment from './pages/Dashboard/Payment';
import Users from "./pages/Dashboard/Users";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import RequireAdmin from './pages/Login/RequireAdmin';
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/Login/SignUp";
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';



// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactPage/>} />
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
            <Route path="users" element={<RequireAdmin>
              <Users></Users>
            </RequireAdmin>}></Route>
            
            <Route path="addDoctor" element={<RequireAdmin>
              <AddDoctor></AddDoctor>
            </RequireAdmin>}></Route>
            <Route path="manageDoctor" element={<RequireAdmin>
              <ManageDoctors></ManageDoctors>
            </RequireAdmin>}></Route>
            <Route path="history" element={<History></History>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
