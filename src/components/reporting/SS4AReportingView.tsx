import React, { useMemo } from 'react';
import crashesData from '../../data/crashes.json';

const SS4AReportingView: React.FC = () => {
  const metrics = useMemo(() => {
    const crashes = crashesData as any[];

    const totalInjuries = crashes.reduce((sum, c) => sum + (c.injuries || 0), 0);
    const totalFatalities = crashes.reduce((sum, c) => sum + (c.fatalities || 0), 0);
    const pedestrianCrashes = crashes.filter(c => c.pedestrians_involved > 0).length;
    const bicycleCrashes = crashes.filter(c => c.cyclists_involved > 0).length;

    return {
      totalInjuries,
      totalFatalities,
      pedestrianCrashes,
      bicycleCrashes,
    };
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">SS4A Grant Reporting</h2>
      <p className="text-gray-600 mb-6">Safer Streets for All Grant Program Metrics</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-gray-700">Total Injuries:</span>
              <span className="font-bold text-blue-600">{metrics.totalInjuries}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Total Fatalities:</span>
              <span className="font-bold text-red-600">{metrics.totalFatalities}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Pedestrian-Involved:</span>
              <span className="font-bold text-orange-600">{metrics.pedestrianCrashes}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Bicycle-Involved:</span>
              <span className="font-bold text-green-600">{metrics.bicycleCrashes}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Focus</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Vision Zero implementation</li>
            <li>✓ Safe systems approach</li>
            <li>✓ Equity-focused interventions</li>
            <li>✓ Data-driven countermeasures</li>
            <li>✓ Community engagement</li>
          </ul>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Grant Objectives</h3>
        <div className="space-y-3 text-gray-700">
          <p>
            • <strong>Reduce severe crashes:</strong> Implement evidence-based countermeasures at high-injury locations
          </p>
          <p>
            • <strong>Improve safety culture:</strong> Engage community and stakeholders in safety planning
          </p>
          <p>
            • <strong>Advance equity:</strong> Prioritize interventions in historically underserved neighborhoods
          </p>
          <p>
            • <strong>Measure impact:</strong> Track before/after metrics for all implemented countermeasures
          </p>
        </div>
      </div>
    </div>
  );
};

export default SS4AReportingView;
