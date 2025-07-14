import React, { useState, useEffect } from "react";
import axios from "axios";
import WebinarForm from "./WebinarForm";
import ConfirmationModal from "./ConfirmationModal";
import SuccessModal from "./SuccessModal";
import "./WebinarManagement.css";

const WebinarManagement = () => {
  const [webinars, setWebinars] = useState([]); // Ensure default is an array
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("add");
  const [currentWebinar, setCurrentWebinar] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [webinarToDelete, setWebinarToDelete] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchWebinars();
  }, []);

  const fetchWebinars = async () => {
    try {
      const response = await axios.get("https://apiailsbacked-eqc6f6dwgehhgtgh.centralindia-01.azurewebsites.net/api/webinars");
      setWebinars(response.data?.webinars || []);
    } catch (error) {
      console.error("Error fetching webinars:", error);
      setWebinars([]); // Fallback to empty array
    }
  };

  const handleDelete = (id) => {
    setWebinarToDelete(id);
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    try {
      console.log("Deleting webinar with ID:", webinarToDelete);
      await axios.delete(`https://apiailsbacked-eqc6f6dwgehhgtgh.centralindia-01.azurewebsites.net/api/webinars/${webinarToDelete}`);
      setWebinars((prev) => prev.filter((webinar) => webinar.webinar_id !== webinarToDelete));
      setShowConfirmation(false);
      setShowSuccess(true);
      setSuccessMessage("Webinar deleted successfully.");
    } catch (error) {
      console.error("Error deleting webinar:", error);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
    setSuccessMessage("");
  };

  const openForm = (type, webinar = null) => {
    setFormType(type);
    setShowForm(true);
    setCurrentWebinar(webinar);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setCurrentWebinar(null);
  };

  const handleFormSubmit = (newWebinar) => {
    if (formType === "add") {
      setWebinars((prev) => [...prev, newWebinar]);
      setSuccessMessage("Webinar added successfully.");
    } else if (formType === "edit" && newWebinar.webinar_id) {
      setWebinars((prev) =>
        prev.map((webinar) =>
          webinar.webinar_id === newWebinar.webinar_id ? newWebinar : webinar
        )
      );
      setSuccessMessage("Webinar updated successfully.");
    } else {
      console.error("Invalid webinar ID for editing.");
      return;
    }
    setShowForm(false);
    setShowSuccess(true);
  };

  return (
    <div className="webinar-management">
      {/* <h1>Webinar Management</h1> */}
      <button onClick={() => openForm("add")} className="add-button">
        Add Webinar
      </button>
      <table className="webinar-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Type</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {webinars.map((webinar) => (
            <tr key={webinar.webinar_id}>
              <td>
                <img
                  src={webinar.image_url || "default-image.png"}
                  alt={webinar.title || "No title"}
                  className="webinar-image"
                />
              </td>
              <td>{webinar.title}</td>
              <td>{webinar.webinar_type}</td>
              <td>{webinar.payment_status}</td>
              <td>{webinar.cost}</td>
              <td>
                <button
                  onClick={() => openForm("edit", webinar)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(webinar.webinar_id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <WebinarForm
          type={formType}
          webinar={currentWebinar}
          onSubmit={handleFormSubmit}
          onClose={handleFormClose}
        />
      )}
      {showConfirmation && (
        <ConfirmationModal
          onConfirm={confirmDelete}
          onCancel={() => setShowConfirmation(false)}
        />
      )}
      {showSuccess && (
        <SuccessModal
          message={successMessage}
          onClose={closeSuccessModal}
        />
      )}
    </div>
  );
};

export default WebinarManagement;
