"use client";

import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import styles from './MigrationMap.module.css';

export default function MigrationMap() {
  const [geoJson, setGeoJson] = useState<any>(null);

  useEffect(() => {
    // Fetch a public GeoJSON for India
    fetch('https://raw.githubusercontent.com/Subhash9325/GeoJson-Data-of-Indian-States/master/Indian_States')
      .then(res => res.json())
      .then(data => {
        echarts.registerMap('india', data);
        setGeoJson(data);
      })
      .catch(err => console.error("Error loading map data", err));
  }, []);

  if (!geoJson) {
    return <div className={`${styles.mapContainer} glass-panel`}><p>Loading Map...</p></div>;
  }

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{b}'
    },
    geo: {
      map: 'india',
      roam: false,
      itemStyle: {
        areaColor: 'rgba(15, 23, 42, 0.5)',
        borderColor: 'rgba(59, 130, 246, 0.4)',
        borderWidth: 1.5,
      },
      emphasis: {
        itemStyle: {
          areaColor: 'rgba(59, 130, 246, 0.2)',
        },
        label: { show: false }
      }
    },
    series: [
      {
        name: 'Migration Routes',
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          period: 4,
          trailLength: 0.1,
          color: '#8b5cf6',
          symbol: 'arrow',
          symbolSize: 6
        },
        lineStyle: {
          color: '#3b82f6',
          width: 2,
          opacity: 0.4,
          curveness: 0.2
        },
        data: [
          // Bihar to Delhi
          { coords: [[85.3131, 25.0961], [77.1025, 28.7041]] },
          // UP to Kota (Rajasthan)
          { coords: [[80.9462, 26.8467], [75.8391, 25.1651]] },
          // MP to Pune (Maharashtra)
          { coords: [[77.4126, 23.2599], [73.8567, 18.5204]] },
          // Jharkhand to Bangalore
          { coords: [[85.3096, 23.3441], [77.5946, 12.9716]] }
        ]
      },
      {
        name: 'Hubs',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke',
          scale: 4
        },
        label: {
          show: true,
          position: 'right',
          formatter: '{b}',
          color: '#fff',
          fontWeight: 'bold'
        },
        itemStyle: {
          color: '#10b981',
          shadowBlur: 10,
          shadowColor: '#10b981'
        },
        data: [
          { name: 'Delhi NCR', value: [77.1025, 28.7041] },
          { name: 'Kota', value: [75.8391, 25.1651] },
          { name: 'Pune', value: [73.8567, 18.5204] },
          { name: 'Bengaluru', value: [77.5946, 12.9716] }
        ]
      }
    ]
  };

  return (
    <div className={styles.mapContainer}>
      <ReactECharts 
        option={option} 
        style={{ height: '100%', width: '100%' }}
        className={styles.mapPlaceholder}
      />
    </div>
  );
}
