"use client";

import styles from "./ProblemStatement.module.css";
import { motion } from "framer-motion";

const problems = [
  {
    id: 1,
    title: "Tier-1 cities overloaded",
    icon: "🏙️"
  },
  {
    id: 2,
    title: "Rural colleges losing talent",
    icon: "🏫"
  },
  {
    id: 3,
    title: "Government lacks real-time migration intelligence",
    icon: "📊"
  },
  {
    id: 4,
    title: "Uneven infrastructure investments",
    icon: "💸"
  }
];

export default function ProblemStatement() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <div className={styles.stickyHeader}>
          <motion.h2 
            className={`${styles.title} title-large`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Why This <span className="gradient-text">Matters</span>
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Student migration is reshaping the economic and educational landscape of India. 
            Without proper tracking, resources are misallocated and systemic inequalities grow.
          </motion.p>
        </div>
      </div>
      
      <div className={styles.right}>
        {problems.map((prob, idx) => (
          <motion.div 
            key={prob.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -10, borderColor: "rgba(59, 130, 246, 0.4)" }}
          >
            <div className={styles.icon}>{prob.icon}</div>
            <h3 className={styles.cardTitle}>{prob.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
