import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: string;
  variant?: 'default' | 'danger' | 'warning' | 'success';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  variant = 'default',
}) => {
  const bgClasses = {
    default: 'bg-blue-50 border-blue-200',
    danger: 'bg-red-50 border-red-200',
    warning: 'bg-yellow-50 border-yellow-200',
    success: 'bg-green-50 border-green-200',
  };

  const textClasses = {
    default: 'text-blue-700',
    danger: 'text-red-700',
    warning: 'text-yellow-700',
    success: 'text-green-700',
  };

  return (
    <div className={`border rounded-lg p-6 ${bgClasses[variant]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-3xl font-bold mt-2 ${textClasses[variant]}`}>{value}</p>
          {description && (
            <p className="text-xs text-gray-500 mt-2">{description}</p>
          )}
        </div>
        {icon && <span className="text-4xl">{icon}</span>}
      </div>
    </div>
  );
};

export default StatCard;
