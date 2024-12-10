import { useState } from 'react';
import axios from 'axios';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = async (formData) => {
    setIsSubmitting(true);
    setError(null);

    // For now, we'll just simulate a successful submission
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setIsSuccess(true);
      
      // You can implement actual form submission logic here later
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
    isSuccess,
    error,
  };
};