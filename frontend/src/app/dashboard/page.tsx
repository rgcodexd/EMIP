import styles from "./page.module.css";
import { MigrationHeatmap } from "@/components/charts/MigrationHeatmap";
import { ResourceDrainGraph } from "@/components/charts/ResourceDrainGraph";

export default function DashboardOverview() {
  return (
    <div className={styles.overview}>
      <header className={styles.header}>
        <h1>Dashboard Overview</h1>
        <p className="text-secondary">Key metrics for National Education Migration</p>
      </header>

      <div className={styles.grid}>
        <div className={`glass-panel ${styles.card}`}>
          <h3>Net Migration</h3>
          <p className={styles.metric}>+12.4%</p>
          <span className={styles.trend}>vs last year</span>
        </div>
        <div className={`glass-panel ${styles.card}`}>
          <h3>Economic Drain</h3>
          <p className={styles.metric}>₹450M</p>
          <span className={styles.trend}>Tier-2 & Tier-3</span>
        </div>
        <div className={`glass-panel ${styles.card}`}>
          <h3>AI Confidence</h3>
          <p className={styles.metric}>94.2%</p>
          <span className={styles.trend}>Prediction accuracy</span>
        </div>
      </div>
      
      <div className={styles.chartsGrid}>
        <div className={`glass-panel ${styles.chartArea}`}>
          <h3>Migration Flow Intensity</h3>
          <p className="text-secondary" style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
            Origin districts to Tier-1 destinations
          </p>
          <MigrationHeatmap />
        </div>
        
        <div className={`glass-panel ${styles.chartArea}`}>
          <h3>Financial & Resource Impact</h3>
          <p className="text-secondary" style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
            Economic outflow vs infrastructure burden
          </p>
          <ResourceDrainGraph />
        </div>
      </div>
    </div>
  );
}
