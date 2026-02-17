import React from 'react';

interface LayerControlsProps {
  onSeverityChange?: (severity: string | null) => void;
}

const LayerControls: React.FC<LayerControlsProps> = ({ onSeverityChange }) => {
  const severities = [
    { value: null, label: 'All Severities', color: '' },
    { value: 'property_damage_only', label: 'Property Damage Only', color: 'bg-blue-400' },
    { value: 'injury', label: 'Injury', color: 'bg-yellow-400' },
    { value: 'serious_injury', label: 'Serious Injury', color: 'bg-orange-500' },
    { value: 'fatal', label: 'Fatal', color: 'bg-red-600' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <p className="text-sm font-medium text-gray-700 mb-3">Filter by Severity:</p>
      <div className="flex flex-wrap gap-2">
        {severities.map((severity) => (
          <button
            key={severity.value || 'all'}
            onClick={() => onSeverityChange?.(severity.value as string | null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              severity.value === null
                ? 'bg-gray-900 text-white'
                : `${severity.color} text-white hover:opacity-80`
            }`}
          >
            {severity.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LayerControls;
