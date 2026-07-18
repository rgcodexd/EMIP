"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./HowItWorks.module.css";

const steps = [
  { id: 1, title: "Student Registration", icon: "📝" },
  { id: 2, title: "Migration Tracking", icon: "📍" },
  { id: 3, title: "AI Prediction", icon: "🧠" },
  { id: 4, title: "Government Insights", icon: "💡" }
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <motion.h2 
        className={`${styles.title} title-medium`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        How <span className="gradient-text">EMIP</span> Works
      </motion.h2>

      <div className={styles.steps}>
        {steps.map((step, idx) => (
          <React.Fragment key={step.id}>
            <motion.div 
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <div className={styles.icon}>{step.icon}</div>
              <div className={styles.stepTitle}>{step.title}</div>
            </motion.div>
            
            {idx < steps.length - 1 && (
              <motion.div 
                className={styles.arrow}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx * 0.2) + 0.1, duration: 0.3 }}
              >
                →
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
