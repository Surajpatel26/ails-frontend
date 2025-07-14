import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Button, Typography } from '@mui/material';
import AuthModal from './AuthModal';
import PasswordReset from './PasswordReset';
import CodeUpdate from './CodeUpdate';
import './ProfilePage.css';

const ProfilePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminData, setAdminData] = useState({
    name: 'Admin Name',
    email: 'admin@example.com',
    codes: [],  // Empty initially, will be populated from the API
  });

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log("No token found");
          return;
        }

        const response = await axios.get("https://apiailsbacked-eqc6f6dwgehhgtgh.centralindia-01.azurewebsites.net/api/admins/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Assuming the response includes reset codes
        setAdminData({
          name: response.data.name,
          email: response.data.email,
          codes: response.data.codes || [],  // Ensure codes is always an array
        });
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Container>
      {/* Auth Modal */}
      {!isAuthenticated && <AuthModal setIsAuthenticated={setIsAuthenticated} />}

      {isAuthenticated && (
        <>
          <Typography variant="h4">Admin Profile</Typography>
          <Typography variant="h6"><strong>Name:</strong> {adminData.name}</Typography>
          <Typography variant="h6"><strong>Email:</strong> {adminData.email}</Typography>

          {/* Display reset codes */}
          <Typography variant="h6"><strong>Reset Codes:</strong></Typography>
          <ul>
            {Array.isArray(adminData.codes) && adminData.codes.length > 0 ? (
              adminData.codes.map((code, index) => (
                <li key={index}>{code}</li>
              ))
            ) : (
              <li>No reset codes available</li>
            )}
          </ul>

          {/* Reset Password */}
          <PasswordReset />

          {/* Update Codes */}
          <CodeUpdate />

          {/* Back to Dashboard Button */}
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate('/dashboard')} 
            sx={{ marginTop: 2 }}
          >
            Back to Dashboard
          </Button>
        </>
      )}
    </Container>
  );
};

export default ProfilePage;
