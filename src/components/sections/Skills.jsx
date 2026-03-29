"use client";

import { motion } from 'framer-motion';
import { resumeData } from '../../data/resumeData';
import SectionTitle from '../ui/SectionTitle';
import { FiCode, FiDatabase, FiServer, FiTool, FiUsers } from 'react-icons/fi';

export default function Skills({ id }) {
  // Skill category icons
  const categoryIcons = {
    languages: <FiCode className="w-6 h-6" />,
    frameworks: <FiCode className="w-6 h-6" />,
    databases: <FiDatabase className="w-6 h-6" />,
    systemAdmin: <FiServer className="w-6 h-6" />,
    tools: <FiTool className="w-6 h-6" />,
    soft: <FiUsers className="w-6 h-6" />
  };

  // Category display names
  const categoryNames = {
    languages: "Programming Languages",
    frameworks: "Frameworks & Libraries",
    databases: "Databases",
    systemAdmin: "System Administration",
    tools: "Tools & APIs",
    soft: "Soft Skills"
  };

  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills & Expertise</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(resumeData.skills).map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark mr-3">
                  {categoryIcons[category]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {categoryNames[category]}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {resumeData.skills[category].map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md text-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Skill bars - additional visualization */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-center text-gray-900 dark:text-white mb-8"
          >
            Core Technical Proficiencies
          </motion.h3>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {resumeData.coreTechnicalProficiencies.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-base">
                  <span className="break-words text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="shrink-0 text-gray-700 dark:text-gray-300">{skill.value}%</span>
                </div>
                <motion.div 
                  className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="h-full bg-primary-light dark:bg-primary-dark rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}