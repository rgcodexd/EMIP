"use client";

import dynamic from 'next/dynamic';
import styles from './MigrationMap.module.css';

// Dynamically import the Leaflet map, turning off Server Side Rendering
// because Leaflet relies on the `window` object which doesn't exist on the server.
const DynamicLeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className={styles.mapContainer} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '600px' }}>
      <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Loading Interactive Map...</div>
    </div>
  )
});

export default function MigrationMap() {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <DynamicLeafletMap />
    </div>
  );
}
