
const dataset = {
    title: '많이 쓰는 프로그램언어',
    backgroundColor: ['#2B82F6 ','#1E2A64','#5D4F8D','#78CFF1'], //label color
    borderColor: '#f8f9fa',
    data: [50,45,75,40]
}
const labels = ['JavaScript','Java','HTML/CSS','DataBase'];
const datasets = { datasets:[dataset], labels:labels }

const config = {
    type: 'doughnut',
    data: datasets,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        Plugins:{
            legend: {
                fontColor: 'black',
                align: 'center',
                display: 'true',
                fullWidth: true,
                labels: {
                    fontColor:'rgb(0,0,0)',
                },
            },
            labels:{
                render: 'value',
                fontColor: 'black',
                fontSize:15,
                fontFamily:'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                precision:2
            }
        }
    }
}

const actions = [
    {
        name: 'Position: bottom',
        handler(chart) {
          chart.options.plugins.legend.position = 'bottom';
          chart.update();
        }
    },
];

const canvas = document.getElementById('myChartLang');
const myChartLang = new Chart(canvas,config);

