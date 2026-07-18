"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import MigrationMap from "../charts/MigrationMap";
import StatCard from "../ui/StatCard";
import { stats } from "@/lib/dummyData";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.subtitle}>Intelligence for Education Migration</div>
        <h1 className={`${styles.title} title-large`}>
          Predict • Analyze • Optimize <br/>
          <span className="gradient-text">Student Mobility Across India</span>
        </h1>
        <p className={styles.description}>
          The government-level platform designed to track student migration patterns, calculate financial drains, and optimize infrastructure.
        </p>
        
        <div className={styles.actions}>
          <Link href="/dashboard">
            <button className={styles.primaryBtn}>Explore Dashboard</button>
          </Link>
          <Link href="/student">
            <button className={styles.secondaryBtn}>Student Portal</button>
          </Link>
        </div>
      </motion.div>

      <motion.div 
        className={styles.mapSection}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <MigrationMap />
      </motion.div>

      <div className={styles.statsGrid}>
        <StatCard value="2.3M" label="Students Tracked" delay={0.6} />
        <StatCard value={stats.districts} label="Districts" delay={0.7} />
        <StatCard value={`${stats.migrationRate}%`} label="Migration Growth" delay={0.8} />
        <StatCard value={stats.resourceLoss} label="Estimated Resource Shift" delay={0.9} />
      </div>
    </section>
  );
}
