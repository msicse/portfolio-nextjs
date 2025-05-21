"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { resumeData } from '../../data/resumeData';
import ParticlesBackground from '../ParticlesBackground';
import Image from 'next/image';
import DownloadResumeButton from '../ui/DownloadResumeButton';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 dark:to-black/20 z-0"></div>
      
      {/* Hero content */}      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center md:text-left md:flex md:items-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I'm <span className="text-primary-light dark:text-primary-dark">{resumeData.personalInfo.name.split(' ')[1]}</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Full-Stack Web Developer 
            <span className="hidden sm:inline"> specializing in PHP, Laravel, MySQL, and JavaScript(React)</span>
          </motion.p>
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center md:justify-start flex-wrap gap-4 pt-6"
          >            <a 
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-md hover:opacity-90 transition-opacity cursor-pointer"
            >
              Contact Me
            </a>
            <a 
              href="/#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:opacity-90 transition-opacity cursor-pointer"
            >
              View Projects
            </a>
            <DownloadResumeButton variant="outline" className="px-6 py-3" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center pt-6 space-x-6"
          >
            <a 
              href={`mailto:${resumeData.personalInfo.email}`}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              aria-label="Email"
              target="_blank" rel="noopener noreferrer"
            >
              <FiMail size={24} />
            </a>
            <a 
              href={resumeData.personalInfo.links.github} 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              aria-label="GitHub"
              target="_blank" rel="noopener noreferrer"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href={resumeData.personalInfo.links.linkedin} 
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              aria-label="LinkedIn"
              target="_blank" rel="noopener noreferrer"
            >
              <FiLinkedin size={24} />
            </a>          </motion.div>
        </motion.div>
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:block relative mt-10 md:mt-0"
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
            <div className="absolute inset-0 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
              {/* Replace the src path with your actual image path */}
              <Image 
                src="/images/profile.jpg" 
                alt={resumeData.personalInfo.name} 
                width={320} 
                height={320} 
                className="w-full h-full object-cover"
                priority
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/320x320.png?text=Your+Photo+Here";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}<motion.a 
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.8, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-primary-light dark:hover:text-primary-dark"
      >
        <FiArrowDown size={24} />
      </motion.a>
    </section>
  );
}