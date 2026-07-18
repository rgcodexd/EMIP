"use client";

import StatCard from "@/components/ui/StatCard";
import { DashboardCharts } from "@/components/charts/DashboardCharts";

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h1 className="title-medium">Overview Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <StatCard value="2.3M" label="Students Tracked" />
        <StatCard value="142" label="Migration Index" />
        <StatCard value="85%" label="Avg Infra Stress" />
        <StatCard value="₹120B" label="Revenue Shift" />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1.5rem' }}>Advanced Analytics</h2>
        <DashboardCharts />
      </div>

      {/* AI Assistant Mockup */}
      <div className="glass-panel" style={{ padding: '2rem', marginTop: '1rem', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#c4b5fd', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>🤖</span> AI Policy Assistant
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>Query: Which districts are losing the most students?</span>
            <p style={{ marginTop: '0.5rem', color: '#fff', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Based on the latest data, Patna (Bihar) and Kanpur (UP) are experiencing the highest outflow. 
              <strong> Recommendation:</strong> Invest in technical infrastructure and engineering faculties in these regions to reduce the 18% YoY capital flight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
