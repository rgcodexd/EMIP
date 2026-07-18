"use client";

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import styles from './MigrationMap.module.css';

// Using a reliable public TopoJSON for India states
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

export default function MigrationMap() {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div className={styles.mapContainer}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [82.8, 22.5]
        }}
        width={800}
        height={600}
        style={{ width: "100%", height: "100%", borderRadius: "16px" }}
      >
        <ZoomableGroup center={[82.8, 22.5]} zoom={1} maxZoom={3}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME_1 } = geo.properties;
                      setTooltipContent(`${NAME_1 || "Unknown State"}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "rgba(15, 23, 42, 0.5)",
                        stroke: "rgba(59, 130, 246, 0.4)",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "rgba(59, 130, 246, 0.3)",
                        stroke: "#3b82f6",
                        strokeWidth: 1.5,
                        outline: "none",
                        cursor: "pointer"
                      },
                      pressed: {
                        fill: "rgba(139, 92, 246, 0.4)",
                        outline: "none",
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <Tooltip id="my-tooltip" />
      {tooltipContent && (
        <div 
          style={{
            position: 'absolute',
            bottom: '20px',
            background: 'rgba(11, 17, 33, 0.9)',
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            pointerEvents: 'none'
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
}
