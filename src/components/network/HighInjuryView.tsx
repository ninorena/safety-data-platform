import React, { useMemo } from 'react';
import hinData from '../../data/high-injury-network.json';

const HighInjuryView: React.FC = () => {
  const sortedIntersections = useMemo(() => {
    return hinData.intersections
      .filter((int) => int.total_crashes > 0)
      .sort((a, b) => b.severity_score - a.severity_score)
      .slice(0, 10);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">High-Injury Network</h2>
      <p className="text-gray-600 mb-6">Top 10 intersections by injury severity score</p>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Intersection</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Total Crashes</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Severity Score</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Crash Types</th>
            </tr>
          </thead>
          <tbody>
            {sortedIntersections.map((intersection, idx) => (
              <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{intersection.name}</td>
                <td className="px-4 py-3 text-gray-600">{intersection.total_crashes}</td>
                <td className="px-4 py-3">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {intersection.severity_score}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600 text-sm">
                  {intersection.primary_crash_types.join(', ') || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighInjuryView;
