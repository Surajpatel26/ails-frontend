import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CourseForm.module.css";

const CourseForm = ({ type, course, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(
    course || {
      title: "",
      description: "",
      price: "",
      image_url: "",
      poc_url: "",
      course_type: "standard",
      category: "very short",
    }
  );

  const [imageFile, setImageFile] = useState(null);
  const [pocFile, setPocFile] = useState(null);

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

  const handlePocChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPocFile(file);
      setFormData({
        ...formData,
        poc_url: file.name,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formPayload = new FormData();
      formPayload.append("title", formData.title);
      formPayload.append("description", formData.description);
      formPayload.append("price", formData.price);
      formPayload.append("course_type", formData.course_type);
      formPayload.append("category", formData.category);
      if (imageFile) formPayload.append("image", imageFile);
      if (pocFile) formPayload.append("poc", pocFile);

      let response;
      if (type === "add") {
        response = await axios.post("http://localhost:8080/api/courses", formPayload, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        response = await axios.put(
          `http://localhost:8080/api/courses/${course.course_id}`,
          formPayload,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      onSubmit(response.data);
    } catch (error) {
      console.error("Error saving course:", error);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{type === "add" ? "Add Course" : "Edit Course"}</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Course Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
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
            <label>POC Document</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handlePocChange}
            />
            {formData.poc_url && (
              <div className={styles.filePreview}>
                Selected: {formData.poc_url}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Course Type</label>
            <select
              name="course_type"
              value={formData.course_type}
              onChange={handleInputChange}
              required
            >
              <option value="standard">Standard</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="very short">Very Short</option>
              <option value="short">Short</option>
              <option value="long">Long</option>
            </select>
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.submitButton}>
              {type === "add" ? "Add Course" : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;