import React, { useState } from "react";
import axios from "axios";
import styles from "./WebinarForm.module.css";

const WebinarForm = ({ type, webinar, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(
    webinar || {
      title: "",
      description: "",
      cost: "",
      image_url: "",
      webinar_type: "Standard",
      launch_date: "",
    }
  );

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setFormData({
        ...formData,
        image_url: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formPayload = new FormData();
      formPayload.append("title", formData.title);
      formPayload.append("description", formData.description || "");
      formPayload.append("cost", formData.cost || 0);
      formPayload.append("webinar_type", formData.webinar_type);
      formPayload.append("launch_date", formData.launch_date || "");

      if (imageFile) {
        formPayload.append("image", imageFile);
      } else if (formData.image_url && !imageFile) {
        // If editing and no new image selected, keep the existing image_url
        formPayload.append("image_url", formData.image_url);
      }

      const url = type === "add" 
        ? "http://localhost:8080/api/webinars" 
        : `http://localhost:8080/api/webinars/${webinar.webinar_id}`;

      const method = type === "add" ? "post" : "put";

      const response = await axios({
        method,
        url,
        data: formPayload,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onSubmit(response.data);
      onClose();
    } catch (error) {
      console.error("Error saving webinar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose} disabled={loading}>
          &times;
        </button>
        <h2>{type === "add" ? "Add Webinar" : "Edit Webinar"}</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Cost</label>
            <input
              type="number"
              name="cost"
              value={formData.cost}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Launch Date & Time</label>
            <input
              type="datetime-local"
              name="launch_date"
              value={formData.launch_date}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Webinar Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              disabled={loading}
            />
            {formData.image_url && (
              <img
                src={formData.image_url}
                alt="Preview"
                className={styles.imagePreview}
              />
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Webinar Type</label>
            <select
              name="webinar_type"
              value={formData.webinar_type}
              onChange={handleInputChange}
              required
              disabled={loading}
            >
              <option value="Standard">Standard</option>
              <option value="Customized">Customized</option>
            </select>
          </div>

          <div className={styles.formActions}>
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? "Processing..." : type === "add" ? "Add Webinar" : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WebinarForm;