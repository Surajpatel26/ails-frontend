import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseForm from "./CourseForm";
import ConfirmationModal from "./ConfirmationModal";
import SuccessModal from "./SuccessModal";
import styles from "./CourseManagement.module.css";
import Sidebar from "../AdminSidebar/AdminSidebar";

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("add");
  const [currentCourse, setCurrentCourse] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (id) => {
    setCourseToDelete(id);
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/courses/${courseToDelete}`);
      // Instead of local state update, refresh from server
      await fetchCourses();
      setShowConfirmation(false);
      setSuccessMessage("Course deleted successfully!");
      setShowSuccess(true);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const openForm = (type, course = null) => {
    setFormType(type);
    setCurrentCourse(course);
    setShowForm(true);
  };

  const handleFormSubmit = async (newCourse) => {
    try {
      // Always refresh from server after successful operation
      await fetchCourses();
      setSuccessMessage(
        formType === "add" ? "Course added successfully!" : "Course updated successfully!"
      );
      setShowSuccess(true);
    } catch (error) {
      console.error("Error refreshing courses:", error);
    }
    setShowForm(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className={styles.courseManagement} style={{ flex: 1 }}>
        <h1>Course Management</h1>
        <button onClick={() => openForm("add")} className={styles.addButton}>
          Add Course
        </button>
        
        {isLoading ? (
          <div className={styles.loading}>Loading courses...</div>
        ) : (
          <div className={styles.tableContainer}>
            <table className={styles.courseTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>POC</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.course_id}>
                    <td>{course.course_id}</td>
                    <td>
                      <img
                        src={course.image_url}
                        alt={course.title}
                        className={styles.courseImage}
                      />
                    </td>
                    <td>{course.title}</td>
                    <td>{course.category}</td>
                    <td>{course.course_type}</td>
                    <td>
                      {course.poc_url && (
                        <a
                          href={course.poc_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.pocLink}
                        >
                          View POC
                        </a>
                      )}
                    </td>
                    <td>${course.price}</td>
                    <td>
                      <button
                        onClick={() => openForm("edit", course)}
                        className={styles.editButton}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(course.course_id)}
                        className={styles.deleteButton}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showForm && (
          <CourseForm
            type={formType}
            course={currentCourse}
            onClose={() => setShowForm(false)}
            onSubmit={handleFormSubmit}
          />
        )}

        {showConfirmation && (
          <ConfirmationModal
            message="Are you sure you want to delete this course?"
            onConfirm={confirmDelete}
            onCancel={() => setShowConfirmation(false)}
          />
        )}

        {showSuccess && (
          <SuccessModal
            message={successMessage}
            onClose={() => {
              setShowSuccess(false);
              // Optional: refresh again when closing success modal
              fetchCourses();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CourseManagement;