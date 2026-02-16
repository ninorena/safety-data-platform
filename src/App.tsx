import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import PageWrapper from './components/layout/PageWrapper';
import DashboardView from './components/dashboard/DashboardView';
import MapView from './components/map/MapView';
import PatternAnalysisView from './components/analysis/PatternAnalysisView';
import HighInjuryView from './components/network/HighInjuryView';
import CountermeasureView from './components/countermeasures/CountermeasureView';
import SS4AReportingView from './components/reporting/SS4AReportingView';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
          <h1>City of Safety Data Platform</h1>
          <PageWrapper>
            <h2>Dashboard</h2>
            <DashboardView />
            <hr />
            <h2>Crash Map</h2>
            <MapView />
            <hr />
            <h2>Pattern Analysis</h2>
            <PatternAnalysisView />
            <hr />
            <h2>High-Injury Network</h2>
            <HighInjuryView />
            <hr />
            <h2>Countermeasures</h2>
            <CountermeasureView />
            <hr />
            <h2>SS4A Reporting</h2>
            <SS4AReportingView />
          </PageWrapper>
        </main>
      </div>
    </div>
  );
};

export default App;
