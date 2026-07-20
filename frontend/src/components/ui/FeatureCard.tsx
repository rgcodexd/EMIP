"use client";

import styles from "./FeatureCard.module.css";
import { motion } from "motion/react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export default function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div 
      className={`${styles.card} glass-panel`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.2)" }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
}
