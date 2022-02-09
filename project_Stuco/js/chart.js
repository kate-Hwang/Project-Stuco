
const dataset = {
    label: '많이 쓰는 프로그램언어',
    backgroundColor: ['#ffd950','#02bc77','#28c3d7','#ff6384'], //label color
    data: [50,45,75,40]
}
const labels = ['JavaScript','Java','HTML/CSS','DataBase'];
const datasets = { datasets:[dataset], labels:labels }

const config = {
    type: 'pie',
    data: datasets,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'top',
            fontColor: 'black',
            align: 'center',
            display: 'true',
            fullWidth: true,
            labels: {
                fontColor:'rgb(0,0,0)'
            },
        },
        Plugins:{
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

const canvas = document.getElementById('myChartLang');
const myChartLang = new Chart(canvas,config);
