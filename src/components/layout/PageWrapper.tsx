import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {children}
    </div>
  );
};

export default PageWrapper;
