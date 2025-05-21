"use client";

import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { resumeData } from '../../data/resumeData';
import SectionTitle from '../ui/SectionTitle';

export default function About({ id }) {
  return (
    <section id={id} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About content */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {resumeData.summary}
              </p>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Why You Should Hire Me</h3>
                <ul className="space-y-3">
                  {resumeData.strengths.map((strength, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex space-x-2"
                    >
                      <span className="text-primary-light dark:text-primary-dark font-bold">✓</span>
                      <div>
                        <span className="font-medium">{strength.title}: </span> 
                        {strength.description}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary-light/10 dark:bg-primary-dark/10">
                  <FiMapPin className="h-5 w-5 text-primary-light dark:text-primary-dark" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-800 dark:text-gray-200">{resumeData.personalInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary-light/10 dark:bg-primary-dark/10">
                  <FiMail className="h-5 w-5 text-primary-light dark:text-primary-dark" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href={`mailto:${resumeData.personalInfo.email}`} className="text-gray-800 dark:text-gray-200 hover:underline">
                    {resumeData.personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary-light/10 dark:bg-primary-dark/10">
                  <FiPhone className="h-5 w-5 text-primary-light dark:text-primary-dark" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a href={`tel:${resumeData.personalInfo.phone}`} className="text-gray-800 dark:text-gray-200 hover:underline">
                    {resumeData.personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-6">              <a 
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block w-full text-center py-2 px-4 bg-primary-light dark:bg-primary-dark text-white rounded-md hover:opacity-90 transition-opacity cursor-pointer"
              >
                Send a Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}