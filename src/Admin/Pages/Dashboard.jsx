import React, { useState } from "react";
import Layout from "../AdminLayout/AdminLayout";
import "./Dashboard.css";
import Webinar from "../Webinars/WebinarManagement";
import Sidebar from "../AdminSidebar/AdminSidebar"; // Single Sidebar
import CourseManagement from "../CourceManagement/CourceManagement";
import UploadPOC from "../CourceManagement/UploadPoc/UploadPOC";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("webinars"); // Default section

  const handleAddWebinar = () => {
    console.log("Add Webinar clicked");
    // Add logic to open "Add Webinar" modal/form
  };

  const handleEditWebinar = (webinar) => {
    console.log("Edit Webinar clicked", webinar);
    // Add logic to open "Edit Webinar" modal/form
  };

  const handleAddCourse = () => {
    console.log("Add Course clicked");
    // Add logic to open "Add Course" modal/form
  };

  const handleEditCourse = (course) => {
    console.log("Edit Course clicked", course);
    // Add logic to open "Edit Course" modal/form
  };

  return (
    <>
      <div className="dashboard-container">
       
        <Sidebar
          onShowWebinars={() => setActiveSection("webinars")}
          onShowCourses={() => setActiveSection("courses")}
          onShowUploadPoc={() => setActiveSection("uploadPoc")}  // New section
        />

        {/* Main Content Area */}
        <div className="main-content">
          {activeSection === "webinars" && (
            <div>
              <h1>Webinar Management</h1>
              <Webinar onEdit={handleEditWebinar} onAdd={handleAddWebinar} />
            </div>
          )}
          {activeSection === "courses" && (
            <div>
              <h1>Course Management</h1>
              <CourseManagement
                onEdit={handleEditCourse}
                onAdd={handleAddCourse}
              />
            </div>
          )}
          {activeSection === "uploadPoc" && (
            <div>
              <h1>Upload Proof of Concept (POC)</h1>
              <UploadPOC />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
