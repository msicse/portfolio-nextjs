"use client";

import { motion } from 'framer-motion';

export default function SectionTitle({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {children}
      </h2>
      <div className="mt-4 mx-auto w-24 h-1 bg-primary-light dark:bg-primary-dark rounded"></div>
    </motion.div>
  );
}