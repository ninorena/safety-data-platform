import React from 'react';
import countermeasuresData from '../../data/countermeasures.json';

const CountermeasureView: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Evidence-Based Countermeasures</h2>
      <p className="text-gray-600 mb-6">FHWA Proven Safety Countermeasures for selected crash types</p>
      <div className="grid grid-cols-1 gap-4">
        {countermeasuresData.recommendations.map((measure) => (
          <div
            key={measure.id}
            className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{measure.name}</h3>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                {measure.crash_reduction_factor}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{measure.description}</p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-700">Applicable to:</p>
                <p className="text-gray-600">{measure.applicable_crash_types.join(', ')}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Estimated Cost:</p>
                <p className="text-gray-600">{measure.estimated_cost}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Source:</p>
                <p className="text-gray-600">{measure.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountermeasureView;
