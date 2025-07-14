import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Dialog, DialogActions, DialogContent } from '@mui/material';
import axios from 'axios';
import './PasswordReset.css'
const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [open, setOpen] = useState(false);

  const validatePassword = (password) => password.length >= 6;

  const handleResetPassword = async () => {
    if (!validatePassword(newPassword)) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found, please log in again.');
        return;
      }

      await axios.post(
        'https://apiailsbacked-eqc6f6dwgehhgtgh.centralindia-01.azurewebsites.net/api/admins/update-profile',
        { password: newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert('Password reset successfully.');
      setNewPassword('');
      setOpen(false);
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('Error resetting password. Please try again later.');
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Reset Password
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Typography variant="h6">Reset Password</Typography>
          <TextField
            label="New Password"
            fullWidth
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            sx={{ marginTop: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleResetPassword}>Reset</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PasswordReset;
