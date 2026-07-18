"use client";

import Table from "@/components/ui/Table";
import StatCard from "@/components/ui/StatCard";
import { stats, topDistricts, destinations } from "@/lib/dummyData";

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h1 className="title-medium">Overview Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <StatCard value="2.3M" label="Students Tracked" />
        <StatCard value={stats.districts} label="Districts" />
        <StatCard value={`${stats.migrationRate}%`} label="Migration Growth" />
        <StatCard value={stats.resourceLoss} label="Estimated Resource Shift" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        <div>
          <h2 style={{ marginBottom: '1rem', color: '#fff', fontSize: '1.2rem' }}>Top Source Districts</h2>
          <Table 
            columns={['Rank', 'District', 'State', 'Outflow']} 
            data={topDistricts} 
          />
        </div>
        <div>
          <h2 style={{ marginBottom: '1rem', color: '#fff', fontSize: '1.2rem' }}>Top Destinations</h2>
          <Table 
            columns={['Rank', 'City', 'Inflow']} 
            data={destinations} 
          />
        </div>
      </div>
    </div>
  );
}
