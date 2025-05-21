"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { resumeData } from '../../data/resumeData';
import SectionTitle from '../ui/SectionTitle';
import emailjs from '@emailjs/browser';

export default function Contact({ id }) {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.user_email)) {
      newErrors.user_email = "Email format is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
      try {
      // Replace these with your actual EmailJS service IDs
      // Sign up at https://www.emailjs.com/ to get these
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      );
      
      setSubmitStatus({ 
        success: true, 
        message: 'Message sent successfully! I will get back to you soon.' 
      });
      
      // Reset form data
      setFormData({ 
        user_name: '', 
        user_email: '', 
        subject: '', 
        message: '' 
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="user_name" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.user_name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:outline-none dark:bg-gray-800`}
                  placeholder="John Doe"
                />
                {errors.user_name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.user_name}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="user_email" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.user_email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:outline-none dark:bg-gray-800`}
                  placeholder="john@example.com"
                />
                {errors.user_email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.user_email}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:outline-none dark:bg-gray-800`}
                  placeholder="Job opportunity"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:outline-none dark:bg-gray-800`}
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-primary-light dark:bg-primary-dark text-white rounded-md hover:opacity-90 transition-opacity flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Sending...</span>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white"></div>
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {/* Form submission status */}
              {submitStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-md flex items-start ${
                    submitStatus.success 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-l-4 border-green-500' 
                      : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400 border-l-4 border-red-500'
                  }`}
                >
                  <div className="mr-3 mt-0.5">
                    {submitStatus.success ? (
                      <FiCheck className="h-5 w-5 text-green-500" />
                    ) : (
                      <FiAlertCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                  <div>
                    {submitStatus.message}
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10">
                  <FiMail className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                  <a 
                    href={`mailto:${resumeData.personalInfo.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    {resumeData.personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10">
                  <FiPhone className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <a 
                    href={`tel:${resumeData.personalInfo.phone}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    {resumeData.personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10">
                  <FiMapPin className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {resumeData.personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Availability */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'm currently open to full-time positions and freelance opportunities. Feel free to reach out if you think we could work together!
              </p>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Response Time
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  I typically respond to emails within 24-48 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}