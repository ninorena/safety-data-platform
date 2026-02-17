import React from 'react';
import { ViewProvider, useView } from './context/ViewContext';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import PageWrapper from './components/layout/PageWrapper';
import DashboardView from './components/dashboard/DashboardView';
import MapView from './components/map/MapView';
import PatternAnalysisView from './components/analysis/PatternAnalysisView';
import HighInjuryView from './components/network/HighInjuryView';
import CountermeasureView from './components/countermeasures/CountermeasureView';
import SS4AReportingView from './components/reporting/SS4AReportingView';

const AppContent: React.FC = () => {
  const { currentView } = useView();

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'map':
        return <MapView />;
      case 'analysis':
        return <PatternAnalysisView />;
      case 'high-injury':
        return <HighInjuryView />;
      case 'countermeasures':
        return <CountermeasureView />;
      case 'reporting':
        return <SS4AReportingView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <PageWrapper>
            {renderView()}
          </PageWrapper>
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ViewProvider>
      <AppContent />
    </ViewProvider>
  );
};

export default App;
