"use client";

import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

// Dummy data for Sankey Diagram
const sankeyData = {
  nodes: [
    { name: 'Bihar' }, { name: 'UP' }, { name: 'Jharkhand' }, { name: 'MP' },
    { name: 'Delhi NCR' }, { name: 'Kota' }, { name: 'Bengaluru' }, { name: 'Pune' }
  ],
  links: [
    { source: 'Bihar', target: 'Delhi NCR', value: 45000 },
    { source: 'Bihar', target: 'Kota', value: 25000 },
    { source: 'UP', target: 'Delhi NCR', value: 65000 },
    { source: 'UP', target: 'Kota', value: 35000 },
    { source: 'Jharkhand', target: 'Bengaluru', value: 15000 },
    { source: 'MP', target: 'Pune', value: 22000 },
  ]
};

const sankeyOption = {
  backgroundColor: 'transparent',
  tooltip: { trigger: 'item', triggerOn: 'mousemove' },
  series: [
    {
      type: 'sankey',
      data: sankeyData.nodes,
      links: sankeyData.links,
      emphasis: { focus: 'adjacency' },
      lineStyle: { color: 'source', curveness: 0.5, opacity: 0.4 },
      itemStyle: { borderWidth: 0, borderColor: '#fff' },
      label: { color: '#fff', fontSize: 12, fontWeight: 'bold' }
    }
  ]
};

// Dummy data for Treemap
const treemapData = [
  {
    name: 'Destinations',
    children: [
      { name: 'Delhi NCR (High Stress)', value: 120000, itemStyle: { color: '#ef4444' } },
      { name: 'Kota (Critical)', value: 85000, itemStyle: { color: '#dc2626' } },
      { name: 'Bengaluru (Medium Stress)', value: 65000, itemStyle: { color: '#f59e0b' } },
      { name: 'Pune (Medium Stress)', value: 50000, itemStyle: { color: '#f59e0b' } },
      { name: 'Hyderabad (Low Stress)', value: 30000, itemStyle: { color: '#10b981' } }
    ]
  }
];

const treemapOption = {
  backgroundColor: 'transparent',
  tooltip: { formatter: '{b}: {c} Students' },
  series: [
    {
      type: 'treemap',
      data: treemapData,
      roam: false,
      nodeClick: false,
      breadcrumb: { show: false },
      itemStyle: { borderColor: '#1e293b', borderWidth: 2, gapWidth: 2 },
      label: { color: '#fff', fontSize: 14, fontWeight: 'bold' }
    }
  ]
};

// Dummy data for Bar chart (Incoming vs Outgoing)
const barOption = {
  backgroundColor: 'transparent',
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  legend: { textStyle: { color: '#fff' }, bottom: 0 },
  grid: { left: '3%', right: '4%', bottom: '15%', top: '10%', containLabel: true },
  xAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }, axisLabel: { color: 'rgba(255,255,255,0.7)' } },
  yAxis: { type: 'category', data: ['Bihar', 'UP', 'Delhi NCR', 'Karnataka', 'Maharashtra'], axisLabel: { color: 'rgba(255,255,255,0.7)' } },
  series: [
    {
      name: 'Outgoing',
      type: 'bar',
      stack: 'total',
      itemStyle: { color: '#ef4444' },
      data: [120000, 150000, 10000, 5000, 8000]
    },
    {
      name: 'Incoming',
      type: 'bar',
      stack: 'total',
      itemStyle: { color: '#10b981' },
      data: [5000, 12000, 180000, 95000, 110000]
    }
  ]
};

export function DashboardCharts() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', height: '400px' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>National Migration Flow (Sankey)</h3>
          <ReactECharts option={sankeyOption} style={{ height: '300px', width: '100%' }} />
        </div>
        
        <div className="glass-panel" style={{ padding: '1.5rem', height: '400px' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Infrastructure Stress (Treemap)</h3>
          <ReactECharts option={treemapOption} style={{ height: '300px', width: '100%' }} />
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', height: '400px' }}>
        <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Net Migration Balance</h3>
        <ReactECharts option={barOption} style={{ height: '300px', width: '100%' }} />
      </div>
      
    </div>
  );
}
