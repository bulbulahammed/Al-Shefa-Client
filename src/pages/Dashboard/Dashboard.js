import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
<div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* <!-- Page content here --> */}
    <h2 className='text-2xl text-center text-purple-700 font-bold'>Welcome to your Dashboard</h2>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">My Appointment</Link></li>
      <li><Link to="/dashboard/review">My Reviews</Link></li>
      <li><Link to="/dashboard/history">My History</Link></li>
      <li><Link to="/dashboard/users">All Users</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Dashboard;