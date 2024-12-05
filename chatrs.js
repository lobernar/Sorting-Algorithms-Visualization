const ctx = document.getElementById('myChart')

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['BubbleSort', 'MergeSort', 'QuickSort'],
      datasets: [{
        label: '# of steps',
        data: [12, 19, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });