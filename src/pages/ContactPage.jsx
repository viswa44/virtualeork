import React from 'react';
import ContactForm from '../components/ContactForm';

function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold text-center mb-8">
        Tell us your task, we will get back to you
      </h1>
      <ContactForm />
    </div>
  );
}

export default ContactPage;