import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import CoursePopup from "./CoursePopup"; // Importing the popup component
// import "./SearchBox.css";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [noResults, setNoResults] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null); // Store selected course

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      setShowDropdown(false);
      setNoResults("");
      return;
    }

    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://apiailsbacked-eqc6f6dwgehhgtgh.centralindia-01.azurewebsites.net/api/search/courses?name=${searchTerm}`);

        if (Array.isArray(response.data) && response.data.length === 0) {
          setNoResults("No courses found.");
          setResults([]);
        } else if (response.data.message) {
          setNoResults(response.data.message);
          setResults([]);
        } else {
          setResults(response.data); // API returns an array of courses
          setNoResults("");
        }

        setShowDropdown(true);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setNoResults("Failed to fetch courses.");
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(fetchCourses, 300);
    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  return (
    <div className="search-box">
      {/* Search Input */}
      <div className="search-input">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {loading && <ImSpinner2 className="loading-icon" />}
      </div>

      {/* Dropdown Results */}
      {showDropdown && (
        <ul className="dropdown-results">
          {results.length > 0 ? (
            results.map((course) => (
              <li
                key={course.course_id}
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => setSelectedCourse(course)} // Open popup on click
              >
                {course.title}
              </li>
            ))
          ) : (
            <li className="no-results">{noResults}</li>
          )}
        </ul>
      )}

      {/* Course Popup Component */}
      <CoursePopup course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </div>
  );
};

export default SearchBox;
