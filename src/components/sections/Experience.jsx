"use client";

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { resumeData } from '@/data/resumeData';
import SectionTitle from '../ui/SectionTitle';

export default function Experience({ id }) {
  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Work Experience</SectionTitle>
        
        <div className="relative">
          {/* Timeline bar */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {resumeData.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Date marker - only visible on larger screens */}
                <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                  <div className="w-5 h-5 rounded-full bg-primary-light dark:bg-primary-dark border-4 border-white dark:border-gray-900"></div>
                </div>
                
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h3>
                    <p className="text-primary-light dark:text-primary-dark font-medium mb-2">
                      {job.company}
                    </p>
                    
                    <div className="flex flex-wrap text-sm text-gray-500 dark:text-gray-400 mb-4 gap-x-4 gap-y-2">
                      <div className="flex items-center">
                        <FiCalendar className="mr-1" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="mr-1" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-light dark:text-primary-dark mr-2 mt-1">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}