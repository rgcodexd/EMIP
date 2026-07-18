"use client";

import CountUp from "react-countup";
import styles from "./StatCard.module.css";
import { motion } from "framer-motion";

interface StatCardProps {
  value: string | number;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  // Extract number and suffix if it's a string like "2.3M" or "18%"
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;
  const suffix = typeof value === 'string' ? value.replace(/[0-9.]/g, '') : '';

  return (
    <motion.div 
      className={`${styles.card} glass-panel`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <div className={`${styles.value} gradient-text`}>
        {Number.isNaN(numericValue) ? value : (
          <CountUp 
            end={numericValue} 
            duration={2.5} 
            separator="," 
            suffix={suffix}
            decimals={numericValue % 1 !== 0 ? 1 : 0}
          />
        )}
      </div>
      <div className={styles.label}>{label}</div>
    </motion.div>
  );
}
