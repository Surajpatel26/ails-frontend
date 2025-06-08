import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import './AuthModal.css';

const AuthModal = ({ setIsAuthenticated }) => {
  const [open, setOpen] = useState(true);
  const [codeInput, setCodeInput] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async () => {
    try {
      if (!codeInput.trim()) {
        alert('Code cannot be empty.');
        return;
      }

      // Fetch adminId from localStorage
      const adminId = localStorage.getItem('adminId');

      // Ensure adminId exists in localStorage
      if (!adminId) {
        alert('Admin ID not found in localStorage.');
        return;
      }

      // Send both adminId and code to the backend
      const response = await axios.post('http://localhost:8080/api/admins/check-code', {
        adminId: adminId,
        code: codeInput,
      });

      if (response.data.valid) {
        setIsAuthenticated(true);
        setOpen(false);
      } else {
        alert('Invalid or used code. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error checking code. Please try again later.');
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={{ width: 400, margin: '100px auto', backgroundColor: 'white', padding: 2, borderRadius: 2 }}>
        <Typography variant="h6">Enter Access Code</Typography>
        <TextField
          label="Access Code"
          fullWidth
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          sx={{ marginTop: 2 }}
        />
        <Button fullWidth onClick={handleSubmit} variant="contained" sx={{ marginTop: 2 }}>
          Submit
        </Button>

        {/* Back to Dashboard Button */}
        <Button 
          fullWidth 
          variant="outlined" 
          color="primary" 
          sx={{ marginTop: 2 }} 
          onClick={() => navigate('/')}
        >
          Back to website 
        </Button>
      </Box>
    </Modal>
  );
};

export default AuthModal;
