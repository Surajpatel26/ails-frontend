import React from 'react';
import Sidebar from '../AdminSidebar/AdminSidebar';
import Navbar from '../AdminNavbar/Adminnavbar';
// import '../AdminLayout/adminLayout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar 
       
      />
      <div className="main">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
