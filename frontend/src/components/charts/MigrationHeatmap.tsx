"use client";

import React, { useMemo } from 'react';
import { EChartsWrapper } from './EChartsWrapper';

// Mock data: [xIndex (City), yIndex (District), intensity (Migration Volume)]
const generateMockHeatmapData = () => {
  const data: [number, number, number][] = [];
  for (let i = 0; i < 5; i++) { // 5 Tier-1 Cities
    for (let j = 0; j < 10; j++) { // 10 Districts
      // Generate some hotspots
      let intensity = Math.floor(Math.random() * 500);
      if ((i === 0 && j === 2) || (i === 3 && j === 7)) {
        intensity += 2000;
      }
      data.push([i, j, intensity]);
    }
  }
  return data;
};

const cities = ['Bengaluru', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune'];
const districts = [
  'Patna', 'Kanpur', 'Indore', 'Bhopal', 'Lucknow', 
  'Jaipur', 'Ranchi', 'Raipur', 'Varanasi', 'Agra'
];

export const MigrationHeatmap: React.FC = () => {
  const data = useMemo(() => generateMockHeatmapData(), []);

  const option = {
    tooltip: {
      position: 'top',
      formatter: (params: any) => {
        const city = cities[params.data[0]];
        const district = districts[params.data[1]];
        const volume = params.data[2];
        return `<b>${district} ➔ ${city}</b><br/>Students: ${volume}`;
      },
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      borderColor: 'rgba(255,255,255,0.1)',
      textStyle: { color: '#f8fafc' }
    },
    grid: {
      top: '10%',
      bottom: '15%',
      left: '10%',
      right: '5%',
    },
    xAxis: {
      type: 'category',
      data: cities,
      splitArea: { show: true },
      axisLabel: { color: '#94a3b8' },
      axisLine: { lineStyle: { color: '#334155' } }
    },
    yAxis: {
      type: 'category',
      data: districts,
      splitArea: { show: true },
      axisLabel: { color: '#94a3b8' },
      axisLine: { lineStyle: { color: '#334155' } }
    },
    visualMap: {
      min: 0,
      max: 2500,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '0%',
      inRange: {
        color: ['#1e293b', '#3b82f6', '#8b5cf6', '#ef4444'] // Dark to Blue to Purple to Red (Hotspots)
      },
      textStyle: { color: '#94a3b8' }
    },
    series: [
      {
        name: 'Migration Volume',
        type: 'heatmap',
        data: data,
        label: { show: false },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return <EChartsWrapper option={option} style={{ height: '450px' }} />;
};
