"use client";

import { motion } from "framer-motion";
import FeatureCard from "@/components/ui/FeatureCard";

export default function About() {
  return (
    <div style={{ padding: '4rem 5%', maxWidth: '1000px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h1 className="title-large" style={{ marginBottom: '1.5rem' }}>About <span className="gradient-text">EMIP</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
          The Education Migration Intelligence Platform (EMIP) is a specialized tool designed to analyze and address the massive internal migration of students across India for educational purposes.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <FeatureCard 
          title="The Problem" 
          description="Every year, millions of students migrate from Tier-2/3 cities to education hubs. This causes a massive capital drain on home states and strains the infrastructure of destination cities." 
          icon="🚨" 
        />
        <FeatureCard 
          title="Our Solution" 
          description="By leveraging Machine Learning and demographic data, we model these flows to predict future trends, allowing governments to build localized educational infrastructure." 
          icon="💡" 
          delay={0.2}
        />
      </div>
    </div>
  );
}
