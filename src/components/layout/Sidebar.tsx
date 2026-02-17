import React from 'react';
import { useView } from '../../context/ViewContext';

type ViewType = 'dashboard' | 'map' | 'analysis' | 'high-injury' | 'countermeasures' | 'reporting';

interface NavItem {
  label: string;
  view: ViewType;
  icon: string;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', view: 'dashboard', icon: '📊' },
  { label: 'Crash Map', view: 'map', icon: '🗺️' },
  { label: 'Pattern Analysis', view: 'analysis', icon: '📈' },
  { label: 'High-Injury Network', view: 'high-injury', icon: '⚠️' },
  { label: 'Countermeasures', view: 'countermeasures', icon: '🛠️' },
  { label: 'SS4A Reporting', view: 'reporting', icon: '📋' },
];

const Sidebar: React.FC = () => {
  const { currentView, setCurrentView } = useView();

  return (
    <aside className="w-64 bg-slate-800 text-white shadow-lg overflow-y-auto">
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.view}>
              <button
                onClick={() => setCurrentView(item.view)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  currentView === item.view
                    ? 'bg-blue-600 font-semibold'
                    : 'hover:bg-slate-700'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
