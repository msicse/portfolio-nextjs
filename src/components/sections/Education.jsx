"use client";

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import { resumeData } from '../../data/resumeData';
import SectionTitle from '../ui/SectionTitle';

export default function Education() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Education & Certifications</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex space-x-4">
              <div className="p-2 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 h-fit">
                <FiBookOpen className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Academic Education</h3>
                <div className="space-y-4">
                  {resumeData.education.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md"
                    >
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.degree}
                      </h4>
                      <p className="text-primary-light dark:text-primary-dark mt-1">
                        {item.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Graduated: {item.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex space-x-4">
              <div className="p-2 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 h-fit">
                <FiAward className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Professional Certifications
                </h3>
                
                <div className="space-y-4">
                  {resumeData.certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-md"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      {cert.provider && (
                        <p className="text-primary-light dark:text-primary-dark mt-1">
                          {cert.provider}
                        </p>
                      )}
                      {cert.focus && (
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          Focus: {cert.focus}
                        </p>
                      )}
                      {cert.year && (
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {cert.year}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}