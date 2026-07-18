"use client";

import React from 'react';
import ReactECharts, { EChartsReactProps } from 'echarts-for-react';

interface EChartsWrapperProps extends EChartsReactProps {
  style?: React.CSSProperties;
  className?: string;
}

export const EChartsWrapper: React.FC<EChartsWrapperProps> = ({ 
  style = { height: '100%', width: '100%' }, 
  className, 
  ...props 
}) => {
  return (
    <div className={className} style={{ width: '100%', height: '400px', ...style }}>
      <ReactECharts
        style={{ height: '100%', width: '100%' }}
        theme="dark"
        {...props}
      />
    </div>
  );
};
