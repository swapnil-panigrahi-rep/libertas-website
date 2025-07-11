const ctx = document.getElementById('victoryChart').getContext('2d');

// Create gradient for lines
const gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
gradientBlue.addColorStop(0, 'rgba(84,104,255,0.6)');
gradientBlue.addColorStop(1, 'rgba(84,104,255,0.1)');

const gradientPink = ctx.createLinearGradient(0, 0, 0, 400);
gradientPink.addColorStop(0, 'rgba(255,104,180,0.5)');
gradientPink.addColorStop(1, 'rgba(255,104,180,0.1)');

const gradientOrange = ctx.createLinearGradient(0, 0, 0, 400);
gradientOrange.addColorStop(0, 'rgba(255,165,0,0.5)');
gradientOrange.addColorStop(1, 'rgba(255,165,0,0.1)');

const gradientGray = ctx.createLinearGradient(0, 0, 0, 400);
gradientGray.addColorStop(0, 'rgba(180,180,180,0.5)');
gradientGray.addColorStop(1, 'rgba(180,180,180,0.1)');

// Chart
new Chart(ctx, {
  type: 'line',
  data: {
    labels: Array.from({ length: 20 }, (_, i) => `Week ${i + 1}`),
    datasets: [
      {
        label: 'Current Winner (+31%)',
        data: [20, 25, 24, 30, 32, 35, 40, 45, 50, 52, 55, 60, 65, 68, 70, 72, 74, 75, 76, 77],
        borderColor: '#5468ff',
        backgroundColor: gradientBlue,
        tension: 0.4,
        fill: true,
        pointRadius: 3,
        borderWidth: 2
      },
      {
        label: 'Variant B',
        data: [20, 21, 22, 25, 28, 30, 35, 38, 42, 45, 48, 50, 52, 54, 55, 55, 56, 56, 56, 56],
        borderColor: '#ff69b4',
        backgroundColor: gradientPink,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 1.8
      },
      {
        label: 'Variant C',
        data: [20, 22, 24, 27, 30, 32, 35, 38, 40, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42],
        borderColor: '#ffa500',
        backgroundColor: gradientOrange,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 1.8
      },
      {
        label: 'Holdout',
        data: [20, 21, 20, 20, 19, 19, 20, 21, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
        borderColor: '#999',
        backgroundColor: gradientGray,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 1.5
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10
        },
        title: {
          display: true,
          text: 'Performance (%)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Timeline'
        }
      }
    }
  }
});

