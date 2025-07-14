import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Dialog, DialogActions, DialogContent } from '@mui/material';
import axios from 'axios';

const CodeUpdate = () => {
  const [newCodes, setNewCodes] = useState(''); // To hold the input codes
  const [open, setOpen] = useState(false); // To manage the dialog visibility

  // Function to handle the code update request
  const handleUpdateCodes = async () => {
    try {
      // Split the entered codes and trim any whitespace
      const codesArray = newCodes.split(',').map((code) => code.trim());

      // Check if any code is empty
      if (codesArray.some((code) => !code)) {
        alert('Codes cannot contain empty values.');
        return;
      }

      // Send the PUT request to the backend with the new codes
      const response = await axios.put('https://apiailsbacked-eqc6f6dwgehhgtgh.centralindia-01.azurewebsites.net/api/code/update-code', {
        adminId: 2,  // You may replace this with a dynamic admin ID (or fetch it from state)
        newCodes: codesArray,  // Sending an array of codes
      });

      if (response.status === 200) {
        alert('Codes updated successfully.');
        setNewCodes(''); // Clear input field
        setOpen(false); // Close the dialog
      } else {
        alert('Failed to update codes.');
      }
    } catch (error) {
      console.error('Error updating codes:', error);
      alert('Error updating codes. Please try again later.');
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Update Codes
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Typography variant="h6">Update Access Codes</Typography>
          <TextField
            label="New Codes (comma separated)"
            fullWidth
            value={newCodes}
            onChange={(e) => setNewCodes(e.target.value)}
            sx={{ marginTop: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdateCodes} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CodeUpdate;
