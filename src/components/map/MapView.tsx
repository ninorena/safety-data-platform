import React, { useEffect, useRef, useMemo } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import crashesData from '../../data/crashes.json';
import LayerControls from './LayerControls';

const MapView: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const [selectedSeverity, setSelectedSeverity] = React.useState<string | null>(null);

  const filteredCrashes = useMemo(() => {
    const crashes = crashesData as any[];
    if (!selectedSeverity) return crashes;
    return crashes.filter((c) => c.severity === selectedSeverity);
  }, [selectedSeverity]);

  const getSeverityColor = (severity: string): string => {
    const colors: { [key: string]: string } = {
      fatal: '#dc2626',
      serious_injury: '#f97316',
      injury: '#eab308',
      property_damage_only: '#3b82f6',
    };
    return colors[severity] || '#3b82f6';
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map only once
    if (!map.current) {
      map.current = L.map(mapContainer.current).setView([38.0, -97.0], 11);

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map.current);
    }

    // Clear existing markers
    map.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.current!.removeLayer(layer);
      }
    });

    // Add markers for filtered crashes
    filteredCrashes.forEach((crash) => {
      const color = getSeverityColor(crash.severity);

      // Create a custom circle marker
      const marker = L.circleMarker([crash.latitude, crash.longitude], {
        radius: 6,
        fillColor: color,
        color: color,
        weight: 2,
        opacity: 0.9,
        fillOpacity: 0.8,
      }).addTo(map.current!);

      // Add popup
      marker.bindPopup(
        `<div style="font-size: 12px;">
          <strong>${crash.location_description}</strong><br/>
          ${crash.date} ${crash.time}<br/>
          Severity: ${crash.severity}<br/>
          Injuries: ${crash.injuries}, Fatalities: ${crash.fatalities}
        </div>`
      );
    });
  }, [filteredCrashes]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Crash Incidents</h2>
      <LayerControls onSeverityChange={setSelectedSeverity} />
      <div
        ref={mapContainer}
        className="rounded-lg overflow-hidden border border-gray-200 mt-4"
        style={{
          width: '100%',
          height: '500px',
        }}
      />
      <p className="text-xs text-gray-500 mt-2">
        Map tiles © OpenStreetMap contributors
      </p>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Crash Incidents</h2>
      {error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-700 font-medium">⚠️ Map Configuration Error</p>
          <p className="text-red-600 text-sm mt-2">{error}</p>
          <p className="text-red-600 text-sm mt-2">
            To fix this, copy <code className="bg-red-100 px-2 py-1 rounded">.env.example</code> to{' '}
            <code className="bg-red-100 px-2 py-1 rounded">.env.local</code> and add your Mapbox token from{' '}
            <a
              href="https://account.mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-red-800"
            >
              account.mapbox.com
            </a>
          </p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default MapView;
