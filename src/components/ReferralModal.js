import React, { useState } from 'react';
import Modal from 'react-modal';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReferralModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    referralCode: '',
    course: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Log the form data to the console
    console.log('Referral Form Data:', form);
    
    try {
      // Send form data to the backend API
      await axios.post('http://localhost:5000/api/referrals', form);
      // Set the submission status message
      setSubmissionStatus('Referral submitted successfully!');
    } catch (error) {
      console.error('Error submitting referral:', error);
      setSubmissionStatus('Failed to submit referral.');
    }
   
    // Reset the form fields
    setForm({
      name: '',
      email: '',
      referralCode: '',
      course: '',
    });

    setTimeout(() => {
      navigate('/'); 
      onClose(); 
    }, 1000); // 1-second delay and then it goes back to the refer page
  };

  const handleClose = () => {
    // Reset the form fields when the modal is closed
    setForm({
      name: '',
      email: '',
      referralCode: '',
      course: '',
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Referral Form"
      ariaHideApp={false}
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        content: { width: '400px', height:'auto', margin: 'auto' }
      }}
    >
      <Typography variant="h6" gutterBottom>
        Refer a Friend
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name" 
          name="name" 
          label="Your Name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          autoComplete="name"
        />
        <TextField
          id="email" 
          name="email" 
          label="Your Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          autoComplete="email" 
        />
        <TextField
          id="referralCode" 
          name="referralCode" 
          label="Referral Code"
          value={form.referralCode}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off" 
        />
        <TextField
          id="course"
          name="course"
          label="Course to Refer"
          value={form.course}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          autoComplete="off"
        />
        
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
        {submissionStatus && (
          <Typography variant="body2" color={submissionStatus.includes('success') ? 'success' : 'error'} sx={{ mt: 2 }}>
            {submissionStatus}
          </Typography>
        )}
      </form>
    </Modal>
  );
};

export default ReferralModal;




 /*

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Referral submitted:', data);
      setSubmissionStatus('Referral submitted successfully!');
      setTimeout(() => {
        navigate('/'); // Redirect to home page after 3 seconds
        onClose();
      }, 3000); // 3-second delay before redirect
    } catch (error) {
      console.error('Error submitting referral:', error);
      setSubmissionStatus('Error submitting referral. Please try again.');
    }
  };
 */
  
