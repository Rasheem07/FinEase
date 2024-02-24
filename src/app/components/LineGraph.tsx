import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

interface LineGraphProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (chartContainer && chartContainer.current && data) {
      const ctx = chartContainer.current.getContext('2d');

      if (ctx) {
        if (chartInstance.current) {
          // If a chart instance already exists, destroy it
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.labels,
            datasets: [
              {
                label: 'Line Graph',
                data: data.values,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'MONTH',
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'AMOUNT',
                },
              },
            },
          },
        });
      }
    }

    return () => {
      // Cleanup function to destroy the chart instance when the component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
      <canvas ref={chartContainer} className='relative max-h-[250px]'></canvas>
  );
};

export default LineGraph;
