"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import styles from "./page.module.css";
import { EChartsWrapper } from "@/components/charts/EChartsWrapper";
import Link from "next/link";

const districts = ['Patna', 'Kanpur', 'Indore', 'Bhopal', 'Lucknow', 'Jaipur', 'Ranchi'];
const cities = ['Bengaluru', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune'];
const degrees = ['B.Tech / B.E.', 'B.Sc', 'B.Com', 'B.A.', 'MBA'];

export default function StudentPortal() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [degree, setDegree] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin || !destination || !degree) return;
    
    setLoading(true);
    setShowResults(false);
    
    // Simulate API call for calculation
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const getChartOption = () => ({
    tooltip: {},
    legend: {
      data: ['Local District', 'Tier-1 City'],
      textStyle: { color: '#cbd5e1' },
      bottom: 0
    },
    radar: {
      indicator: [
        { name: 'Tuition Cost (Lower is better)', max: 10 },
        { name: 'Living Cost (Lower is better)', max: 10 },
        { name: 'Infrastructure Quality', max: 10 },
        { name: 'Placement Opportunities', max: 10 },
        { name: 'Faculty Ratio', max: 10 }
      ],
      axisName: { color: '#94a3b8' },
      splitArea: { show: false },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
    },
    series: [{
      type: 'radar',
      data: [
        {
          value: [3, 2, 5, 4, 6],
          name: 'Local District',
          itemStyle: { color: '#3b82f6' },
          areaStyle: { color: 'rgba(59, 130, 246, 0.3)' }
        },
        {
          value: [8, 9, 9, 9, 8],
          name: 'Tier-1 City',
          itemStyle: { color: '#ef4444' },
          areaStyle: { color: 'rgba(239, 68, 68, 0.3)' }
        }
      ]
    }]
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <span className="gradient-text">EMIP Student Portal</span>
        </Link>
        <Link href="/login" className={styles.adminLink}>Admin Login</Link>
      </header>

      <main className={styles.main}>
        <motion.div 
          className={styles.calculatorSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.intro}>
            <h1 className="gradient-text">Calculate Your Migration ROI</h1>
            <p>Compare the true cost and educational value of studying locally versus migrating to a Tier-1 city.</p>
          </div>

          <Card className={styles.formCard}>
            <form onSubmit={handleCalculate} className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Origin District</label>
                <select value={origin} onChange={(e) => setOrigin(e.target.value)} required className={styles.select}>
                  <option value="" disabled>Select your home district</option>
                  {districts.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>Target City</label>
                <select value={destination} onChange={(e) => setDestination(e.target.value)} required className={styles.select}>
                  <option value="" disabled>Select target destination</option>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>Degree Type</label>
                <select value={degree} onChange={(e) => setDegree(e.target.value)} required className={styles.select}>
                  <option value="" disabled>Select program</option>
                  {degrees.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <Button type="submit" isLoading={loading} className={styles.calculateBtn} size="lg">
                Analyze ROI
              </Button>
            </form>
          </Card>
        </motion.div>

        {showResults && (
          <motion.div 
            className={styles.resultsSection}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.resultsTitle}>Analysis: {origin} vs {destination} ({degree})</h2>
            
            <div className={styles.metricsGrid}>
              <Card className={styles.metricCard}>
                <span className={styles.metricLabel}>Extra Living Cost (4 Years)</span>
                <span className={styles.metricValueDanger}>+₹8.4 Lakhs</span>
                <span className={styles.metricContext}>Housing, food, travel</span>
              </Card>
              
              <Card className={styles.metricCard}>
                <span className={styles.metricLabel}>Placement Probability</span>
                <span className={styles.metricValueSuccess}>+42%</span>
                <span className={styles.metricContext}>Higher chance of campus tech job</span>
              </Card>

              <Card className={styles.metricCard}>
                <span className={styles.metricLabel}>Overall ROI Score</span>
                <span className={styles.metricValueNeutral}>6.8 / 10</span>
                <span className={styles.metricContext}>Based on average starting salary</span>
              </Card>
            </div>

            <Card className={styles.chartCard}>
              <h3>Quality vs Cost Comparison</h3>
              <EChartsWrapper option={getChartOption()} style={{ height: '400px' }} />
            </Card>
            
            <div className={styles.insightBox}>
              <h3>💡 AI Policy Insight for {origin}</h3>
              <p>
                If {origin} district colleges improve their faculty-to-student ratio by 15% and establish 3 major tech incubator partnerships, 
                our models predict a 22% retention rate of migrating students within 3 years, saving the local economy approximately ₹18 Crores annually.
              </p>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
