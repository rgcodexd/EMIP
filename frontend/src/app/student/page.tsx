"use client";

import { motion } from "framer-motion";

export default function StudentPortal() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: '2rem' }}>
      <motion.div 
        className="glass-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}
      >
        <h1 className="title-medium" style={{ marginBottom: '1rem' }}>Student Portal</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem' }}>
          Discover the true Return on Investment (ROI) of migrating for education. Enter your home district and target city to compare costs, infrastructure, and outcomes.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <select style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', outline: 'none' }}>
            <option>Select Origin District</option>
            <option>Patna, Bihar</option>
            <option>Kanpur, UP</option>
          </select>
          <select style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', outline: 'none' }}>
            <option>Select Destination</option>
            <option>Kota, Rajasthan</option>
            <option>Delhi NCR</option>
          </select>
        </div>
        <button style={{ marginTop: '2rem', padding: '12px 24px', borderRadius: '8px', background: 'var(--primary)', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
          Calculate ROI
        </button>
      </motion.div>
    </div>
  );
}
