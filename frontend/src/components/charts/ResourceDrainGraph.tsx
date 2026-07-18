"use client";

import React from 'react';
import { EChartsWrapper } from './EChartsWrapper';

export const ResourceDrainGraph: React.FC = () => {
  // Mock data representing Economic Drain on District vs Resource Strain on City (in Crores)
  const years = ['2020', '2021', '2022', '2023', '2024', '2025 (Proj)'];
  const districtDrain = [-45, -52, -60, -75, -88, -105]; // Negative to show outflow
  const cityStrain = [30, 38, 45, 60, 75, 90]; // Positive to show burden/cost of infrastructure

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: (params: any) => {
        let res = `<b>${params[0].name}</b><br/>`;
        params.forEach((item: any) => {
          const val = Math.abs(item.value);
          res += `${item.marker} ${item.seriesName}: ₹${val} Cr<br/>`;
        });
        return res;
      },
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      borderColor: 'rgba(255,255,255,0.1)',
      textStyle: { color: '#f8fafc' }
    },
    legend: {
      data: ['District Economic Drain', 'Tier-1 Resource Strain'],
      textStyle: { color: '#cbd5e1' },
      top: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: (value: number) => `₹${Math.abs(value)}Cr`,
          color: '#94a3b8'
        },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: years,
        axisLabel: { color: '#cbd5e1', fontWeight: 'bold' }
      }
    ],
    series: [
      {
        name: 'Tier-1 Resource Strain',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'right',
          formatter: (params: any) => `₹${params.value}Cr`
        },
        itemStyle: {
          color: '#ef4444', // Danger/Strain color
          borderRadius: [0, 4, 4, 0]
        },
        data: cityStrain
      },
      {
        name: 'District Economic Drain',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'left',
          formatter: (params: any) => `₹${Math.abs(params.value)}Cr`
        },
        itemStyle: {
          color: '#3b82f6', // Outflow color
          borderRadius: [4, 0, 0, 4]
        },
        data: districtDrain
      }
    ]
  };

  return <EChartsWrapper option={option} style={{ height: '350px' }} />;
};
