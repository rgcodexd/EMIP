import { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, CircleMarker, Popup, useMap } from 'react-leaflet';
import { useTheme } from 'next-themes';
import L from 'leaflet';
import styles from './MigrationMap.module.css';

// Fix for default Leaflet icon issues in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const migrationFlows = [
  { from: [25.5941, 85.1376], to: [28.6139, 77.2090], source: 'Patna', target: 'Delhi NCR', count: '45,000' }, // Patna to Delhi
  { from: [26.8467, 80.9462], to: [25.1728, 75.8391], source: 'Lucknow', target: 'Kota', count: '35,000' }, // Lucknow to Kota
  { from: [23.3441, 85.3096], to: [12.9716, 77.5946], source: 'Ranchi', target: 'Bengaluru', count: '15,000' }, // Ranchi to Bengaluru
  { from: [22.7196, 75.8577], to: [18.5204, 73.8567], source: 'Indore', target: 'Pune', count: '22,000' }, // Indore to Pune
];

// Helper to update map theme tiles dynamically
function ThemeTileLayer() {
  const { resolvedTheme } = useTheme();
  
  const tileUrl = resolvedTheme === 'dark'
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' // CartoDB Dark Matter
    : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'; // CartoDB Positron

  return (
    <TileLayer
      url={tileUrl}
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    />
  );
}

export default function LeafletMap() {
  return (
    <div className={styles.mapContainer} style={{ width: '100%', height: '100%', minHeight: '600px', borderRadius: '16px', overflow: 'hidden' }}>
      <MapContainer 
        center={[22.5, 80]} // Center of India
        zoom={5} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
      >
        <ThemeTileLayer />

        {migrationFlows.map((flow, idx) => (
          <div key={idx}>
            {/* Draw arc/line */}
            <Polyline 
              positions={[flow.from as [number, number], flow.to as [number, number]]} 
              pathOptions={{ 
                color: 'var(--primary)', 
                weight: 3, 
                opacity: 0.6,
                dashArray: '5, 10', // Dotted line effect
                lineCap: 'round'
              }} 
            />
            
            {/* Source Marker */}
            <CircleMarker 
              center={flow.from as [number, number]} 
              radius={6} 
              pathOptions={{ color: 'var(--danger)', fillColor: 'var(--danger)', fillOpacity: 0.7 }}
            >
              <Popup>
                <div style={{ color: '#000' }}><strong>{flow.source}</strong> (Source)</div>
              </Popup>
            </CircleMarker>
            
            {/* Target Marker */}
            <CircleMarker 
              center={flow.to as [number, number]} 
              radius={8} 
              pathOptions={{ color: 'var(--success)', fillColor: 'var(--success)', fillOpacity: 0.9 }}
            >
              <Popup>
                <div style={{ color: '#000' }}>
                  <strong>{flow.target}</strong> (Destination)<br/>
                  Incoming: +{flow.count} students
                </div>
              </Popup>
            </CircleMarker>
          </div>
        ))}
      </MapContainer>
    </div>
  );
}
