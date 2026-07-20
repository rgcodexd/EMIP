"use client";

import { motion } from "motion/react";
import styles from "./DesignedFor.module.css";

const targets = [
  "Government",
  "Educational Boards",
  "Policy Makers",
  "Researchers"
];

export default function DesignedFor() {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Designed For
      </motion.div>
      <div className={styles.grid}>
        {targets.map((target, idx) => (
          <motion.div
            key={idx}
            className={styles.item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            {target}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
