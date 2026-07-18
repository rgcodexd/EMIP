"use client";

import { motion } from "framer-motion";
import styles from "./AiPredictions.module.css";

const predictions = [
  { id: 1, state: "Karnataka", value: "+8%", type: "positive", trend: "↗" },
  { id: 2, state: "Bihar", value: "-3%", type: "negative", trend: "↘" },
  { id: 3, state: "Telangana", value: "+11%", type: "positive", trend: "↑" },
];

export default function AiPredictions() {
  return (
    <section className={styles.section}>
      <motion.h2 
        className={`${styles.title} title-medium`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="gradient-text">AI Forecast</span> (2026 Models)
      </motion.h2>

      <div className={styles.grid}>
        {predictions.map((pred, idx) => (
          <motion.div
            key={pred.id}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, borderColor: "rgba(59, 130, 246, 0.4)" }}
          >
            <div className={styles.year}>Migration Forecast</div>
            <div className={styles.state}>{pred.state}</div>
            <div className={`${styles.prediction} ${styles[pred.type]}`}>
              {pred.trend} {pred.value}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
