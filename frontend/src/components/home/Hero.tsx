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
          Track Student Migration Across India<br/>
          <span className="gradient-text">Predict Future Trends</span>
        </h1>
        <p className={styles.description}>
          Optimize National Education Resources with AI-powered analytics and demographic modeling.
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
        <StatCard value={stats.students} label="Students" delay={0.6} />
        <StatCard value={stats.districts} label="Districts" delay={0.7} />
        <StatCard value={stats.universities} label="Universities" delay={0.8} />
        <StatCard value={stats.predictions} label="Predictions" delay={0.9} />
      </div>
    </section>
  );
}
