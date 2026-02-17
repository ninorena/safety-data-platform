import React, { useMemo } from 'react';
import BarChart from '../charts/BarChart';
import crashesData from '../../data/crashes.json';

const PatternAnalysisView: React.FC = () => {
  const analyzePatterns = useMemo(() => {
    const crashes = crashesData as any[];

    // Crashes by day of week
    const dayOfWeekMap: { [key: number]: number } = {
      0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0,
    };

    // Crashes by hour
    const hourMap: { [key: number]: number } = {};
    for (let i = 0; i < 24; i++) hourMap[i] = 0;

    crashes.forEach((crash) => {
      const date = new Date(crash.date);
      dayOfWeekMap[date.getDay()]++;

      const time = crash.time.split(':')[0];
      const hour = parseInt(time, 10);
      hourMap[hour] = (hourMap[hour] || 0) + 1;
    });

    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayData = dayLabels.map((label, idx) => ({
      day: label,
      crashes: dayOfWeekMap[idx],
    }));

    const hourData = Object.entries(hourMap).map(([hour, count]) => ({
      hour: `${hour}:00`,
      crashes: count,
    }));

    return { dayData, hourData };
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Crash Pattern Analysis</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <BarChart
            data={analyzePatterns.dayData}
            title="Crashes by Day of Week"
            xKey="day"
            yKey="crashes"
          />
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <BarChart
            data={analyzePatterns.hourData}
            title="Crashes by Time of Day"
            xKey="hour"
            yKey="crashes"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default PatternAnalysisView;
