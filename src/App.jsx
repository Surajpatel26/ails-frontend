import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './layouts/Home';
import WebinarPage from './layouts/WebinarPage';
import AboutUsPage from './layouts/AboutUsPage';
import AdminLayout from './Admin/AdminLayout/AdminLayout';
import CourcePage from './layouts/CourcePage';
import CourseManagement from './Admin/CourceManagement/CourceManagement';
import ProfilePage from './Admin/Profile/ProfilePage';
import Dashboard from './Admin/Pages/Dashboard';
import Login from './Admin/LoginSection/Login';
import ContactUsLayout from './layouts/ContactUs';
import UploadPOC from './Admin/CourceManagement/UploadPoc/UploadPOC';
import HeaderStrip from './layouts/HeaderStrip';
import CareerPage from './CareerPage/CareerPage';

const App = (props) => {
  return (
    <>
    <HeaderStrip/>
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/webinar" element={<WebinarPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/training-menu" element={<CourcePage />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/manage-cources" element={<CourseManagement />} />
        <Route path="/manage-profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-login" element={<Login />} />
        <Route path="/contact" element={<ContactUsLayout />} />
        <Route path="/manage-poc" element={<UploadPOC />} />
        <Route path='/career' element={<CareerPage></CareerPage>}></Route>
      </Routes>
    </Router>
    
    </>
  );
};

export default App;
