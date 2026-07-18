"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import StatCard from "@/components/ui/StatCard";

export default function StudentPortal() {
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div style={{ padding: '2rem 5%', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      
      {/* Header Profile Section */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="title-medium">Hello, <span className="gradient-text">Rahul</span> 👋</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Find Your Best Education Destination & Calculate ROI</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ padding: '10px 20px', borderRadius: '8px', background: 'var(--primary)', color: '#fff', border: 'none', fontWeight: 'bold' }}>Track Migration</button>
          <button style={{ padding: '10px 20px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>Apply Scholarship</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Migration Calculator Form (Google Forms vibe) */}
        <motion.div 
          className="glass-panel" 
          style={{ padding: '2rem' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff' }}>Migration Calculator</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={handleCalculate}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Current District</label>
              <select style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                <option style={{ color: '#000' }}>Patna, Bihar</option>
                <option style={{ color: '#000' }}>Kanpur, UP</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Target City</label>
              <select style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                <option style={{ color: '#000' }}>Kota, Rajasthan</option>
                <option style={{ color: '#000' }}>Delhi NCR</option>
                <option style={{ color: '#000' }}>Bengaluru, Karnataka</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Course</label>
              <input type="text" placeholder="e.g. B.Tech Computer Science" style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Budget (₹)</label>
                <input type="number" placeholder="500000" style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Family Income</label>
                <input type="number" placeholder="300000" style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
              </div>
            </div>
            <button style={{ padding: '12px', borderRadius: '8px', background: 'var(--primary)', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}>
              Calculate ROI
            </button>
          </form>
        </motion.div>

        {/* Results Output (LinkedIn/Dashboard vibe) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          {showResults ? (
            <>
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff' }}>Migration Insights</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <StatCard value="₹4.2L" label="Total Migration Cost" />
                  <StatCard value="₹8.5L" label="Expected Salary" />
                  <StatCard value="2.1x" label="ROI Multiplier" />
                  <StatCard value="82%" label="Employment Rate" />
                </div>
                
                <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                  <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>AI Recommendation: HIGHLY RECOMMENDED</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Migrating to Delhi NCR for B.Tech CS yields a 2.1x ROI compared to local options. Your profile aligns well with the industry demand in this region.</p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff' }}>Recommended Institutions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ color: '#fff', marginBottom: '0.2rem' }}>IIT Delhi</h4>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Acceptance Chance: 12% • Avg Package: ₹16L</div>
                    </div>
                    <button style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px' }}>View Details</button>
                  </div>
                  <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ color: '#fff', marginBottom: '0.2rem' }}>DTU (Delhi Technological University)</h4>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Acceptance Chance: 45% • Avg Package: ₹10L</div>
                    </div>
                    <button style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px' }}>View Details</button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '300px', color: 'rgba(255,255,255,0.5)' }}>
              Submit the calculator form to view your AI-powered migration insights, ROI, and personalized college recommendations.
            </div>
          )}
        </motion.div>
      </div>

    </div>
  );
}
