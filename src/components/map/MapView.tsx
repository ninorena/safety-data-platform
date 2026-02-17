import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import crashesData from '../../data/crashes.json';
import LayerControls from './LayerControls';

// Mapbox token should be set via environment variable VITE_MAPBOX_TOKEN
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || '';

const MapView: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedSeverity, setSelectedSeverity] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-97.0, 38.0], // Center on data area
      zoom: 11,
    });

    // Add markers for each crash
    const crashes = crashesData as any[];
    crashes.forEach((crash) => {
      if (selectedSeverity && crash.severity !== selectedSeverity) return;

      const severityColors: { [key: string]: string } = {
        fatal: '#dc2626',
        serious_injury: '#f97316',
        injury: '#eab308',
        property_damage_only: '#3b82f6',
      };

      const color = severityColors[crash.severity] || '#3b82f6';

      const el = document.createElement('div');
      el.style.backgroundColor = color;
      el.style.width = '8px';
      el.style.height = '8px';
      el.style.borderRadius = '50%';
      el.style.cursor = 'pointer';

      new mapboxgl.Marker(el)
        .setLngLat([crash.longitude, crash.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div style="font-size: 12px;">
              <strong>${crash.location_description}</strong><br/>
              ${crash.date} ${crash.time}<br/>
              Severity: ${crash.severity}<br/>
              Injuries: ${crash.injuries}, Fatalities: ${crash.fatalities}
            </div>`
          )
        )
        .addTo(map.current);
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [selectedSeverity]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Crash Incidents</h2>
      <LayerControls onSeverityChange={setSelectedSeverity} />
      <div
        ref={mapContainer}
        style={{
          width: '100%',
          height: '500px',
          marginTop: '1rem',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      />
    </div>
  );
};

export default MapView;
