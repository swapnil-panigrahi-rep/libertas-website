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
    labels: Array.from({ length: 4 }, (_, i) => `Quarter ${i + 1}`),
    datasets: [
      {
        label: 'Total Projects (+31%)',
        data: [20, 26, 35, 53],
        borderColor: '#5468ff',
        backgroundColor: gradientBlue,
        tension: 0.4,
        fill: true,
        pointRadius: 3,
        borderWidth: 2
      },
      {
        label: 'Active Freelancers',
        data: [20, 24, 28, 35],
        borderColor: '#ff69b4',
        backgroundColor: gradientPink,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 1.8
      },
      {
        label: 'Active Clients',
        data: [20, 22, 24, 27],
        borderColor: '#ffa500',
        backgroundColor: gradientOrange,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 1.8
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
          text: 'Number in thousand(s)'
        }
      },
      x: {
        title: {
          display: true,
          text: '2025-26'
        }
      }
    }
  }
});

