import React from 'react';

interface AspectRatioBoxProps {
  children: React.ReactNode;
}

export const AspectRatioBox: React.FC<AspectRatioBoxProps> = ({ children }) => {
  return (
    <div className="aspect-ratio-box">
      {children}
    </div>
  );
};
