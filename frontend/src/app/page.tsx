"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className="gradient-text">EMIP</span>
        </div>
        <nav className={styles.nav}>
          <a href="/portal">Student Portal</a>
          <a href="/dashboard">Government Dashboard</a>
        </nav>
      </header>

      <main className={styles.main}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            Intelligence for <span className="gradient-text">Education Migration</span>
          </h1>
          <p className={styles.subtitle}>
            A centralized platform to track, analyze, and predict student migration flows to optimize national resources and improve district-level education.
          </p>
          
          <div className={styles.actions}>
            <a href="/portal" className={styles.primaryButton}>
              Explore Student Insights
            </a>
            <a href="/dashboard" className={styles.secondaryButton}>
              Admin Access
            </a>
          </div>
        </motion.div>

        <motion.div
          className={`glass-panel ${styles.statsContainer}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.statBox}>
            <h3>5M+</h3>
            <p>Students Tracked</p>
          </div>
          <div className={styles.statBox}>
            <h3>742</h3>
            <p>Districts Covered</p>
          </div>
          <div className={styles.statBox}>
            <h3>₹120Cr</h3>
            <p>Economic Drain Identified</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
