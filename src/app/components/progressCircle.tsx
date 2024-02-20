import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

interface ProgressSemiCircleProps {
  progress: number;
}

const ProgressSemiCircle: React.FC<ProgressSemiCircleProps> = ({ progress }) => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"polarArea", number[], string> | null>(null);

  useEffect(() => {
    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: ['Progress', 'Remaining'],
            datasets: [{
              data: [progress, 100 - progress],
              backgroundColor: [
                'rgba(54, 162, 235, 0.6)', // Progress color
                'rgba(201, 203, 207, 0.6)' // Remaining color
              ],
              borderWidth: 0
            }]
          },
          options: {
            startAngle: -0.5 * Math.PI, // Start angle set to top
            responsive: false, // Disable responsiveness
            cutout: '90%', // Adjust the cutout percentage to control the size of the semi-circle
            plugins: {
              legend: {
                display: false
              }
            }
          }
        } as ChartConfiguration<'polarArea', number[], string>);
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [progress]);

  useEffect(() => {
    // Update progress data when progress prop changes
    if (chartInstance.current) {
      if (chartInstance.current.data.datasets) {
        chartInstance.current.data.datasets[0].data = [progress, 100 - progress];
        chartInstance.current.update();
      }
    }
  }, [progress]);

  return (
    <div className='flex flex-row justify-center'>
      <canvas ref={chartContainer} width={60} height={60} />
    </div>
  );
};

export default ProgressSemiCircle;
