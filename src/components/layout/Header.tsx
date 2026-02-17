import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="px-6 py-4">
        <h1 className="text-3xl font-bold">Safety Data Platform</h1>
        <p className="text-slate-300 text-sm">Interactive crash analysis and countermeasure assessment</p>
      </div>
    </header>
  );
};

export default Header;
