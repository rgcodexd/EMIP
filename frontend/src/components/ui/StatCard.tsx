"use client";

import styles from "./StatCard.module.css";
import { motion } from "framer-motion";

interface StatCardProps {
  value: string | number;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div 
      className={`${styles.card} glass-panel`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <div className={`${styles.value} gradient-text`}>{value}</div>
      <div className={styles.label}>{label}</div>
    </motion.div>
  );
}
