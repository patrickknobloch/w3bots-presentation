import React from 'react';

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, className, children }) => {
  const [selectedTab, setSelectedTab] = React.useState(defaultValue);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TabsList) {
          return React.cloneElement(child as React.ReactElement<any>, {
            selectedTab,
            onTabChange: handleTabChange,
          });
        }
        if (React.isValidElement(child) && (child.props as any).value === selectedTab) {
          return child;
        }
        return null;
      })}
    </div>
  );
};

interface TabsListProps {
  className?: string;
  selectedTab?: string;
  onTabChange?: (value: string) => void;
  children: React.ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ className, selectedTab, onTabChange, children }) => (
  <div className={className}>
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === TabsTrigger) {
        return React.cloneElement(child as React.ReactElement<any>, {
          isSelected: selectedTab === child.props.value,
          onClick: onTabChange,
        });
      }
      return child;
    })}
  </div>
);

interface TabsTriggerProps {
  value: string;
  isSelected?: boolean;
  onClick?: (value: string) => void;
  children: React.ReactNode;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, isSelected, onClick, children }) => (
  <button
    className={`px-4 py-2 font-bold transition-colors ${
      isSelected ? 'text-neutral-900 border-b-2 border-neutral-900' : 'text-gray-500'
    }`}
    onClick={() => onClick && onClick(value)}
  >
    {children}
  </button>
);

interface TabsContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export const TabsContent: React.FC<TabsContentProps> = ({ value, className, children }) => (
  <div className={className}>
    {children}
  </div>
);
