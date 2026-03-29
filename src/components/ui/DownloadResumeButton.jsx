"use client";

import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { resumeData } from '../../data/resumeData';

export default function DownloadResumeButton({ className = '', variant = 'primary', size = 'md' }) {
  const resumeUrl = resumeData.personalInfo.links.resume || '/files/resume.pdf';

  // Determine classes based on variant and size
  const getButtonClasses = () => {
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50";

    const variantClasses = {
      primary: "bg-primary-light dark:bg-primary-dark text-white hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark",
      secondary: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600",
      outline: "border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100"
    };

    const sizeClasses = {
      sm: "py-1 px-3 text-sm",
      md: "py-2 px-4 text-base",
      lg: "py-3 px-6 text-lg"
    };

    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  };

  return (
    <motion.a
      href={resumeUrl}
      download="Md_Sumon_Islam_Resume.pdf"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={getButtonClasses()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiDownload className="mr-2" />
      Download Resume
    </motion.a>
  );
}