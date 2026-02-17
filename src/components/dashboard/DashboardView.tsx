import React, { useMemo } from 'react';
import StatCard from './StatCard';
import crashesData from '../../data/crashes.json';

const DashboardView: React.FC = () => {
  const stats = useMemo(() => {
    const crashes = crashesData as any[];

    const totalCrashes = crashes.length;
    const totalInjuries = crashes.reduce((sum, c) => sum + (c.injuries || 0), 0);
    const totalFatalities = crashes.reduce((sum, c) => sum + (c.fatalities || 0), 0);
    const seriousInjuries = crashes.filter(c => c.severity === 'serious_injury' || c.severity === 'fatal').length;

    return {
      totalCrashes,
      totalInjuries,
      totalFatalities,
      seriousInjuries,
    };
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Safety Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Crashes"
          value={stats.totalCrashes}
          icon="🚗"
          variant="default"
        />
        <StatCard
          title="Injuries"
          value={stats.totalInjuries}
          icon="🏥"
          variant="warning"
        />
        <StatCard
          title="Serious Injury Events"
          value={stats.seriousInjuries}
          icon="⚠️"
          variant="danger"
        />
        <StatCard
          title="Fatalities"
          value={stats.totalFatalities}
          icon="💔"
          variant="danger"
        />
      </div>
    </div>
  );
};

export default DashboardView;
