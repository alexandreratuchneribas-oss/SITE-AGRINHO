// Dados simulados do solo
const areas = [
    {nome:"Área 1", umidade:22, nitrogenio:15, fosfato:8},
    {nome:"Área 2", umidade:18, nitrogenio:10, fosfato:5},
    {nome:"Área 3", umidade:25, nitrogenio:20, fosfato:10},
    {nome:"Área 4", umidade:20, nitrogenio:12, fosfato:7},
    {nome:"Área 5", umidade:23, nitrogenio:18, fosfato:9},
];

// Seleção dos elementos HTML
const selectArea = document.getElementById('selectArea');
const umidadeEl = document.getElementById('umidade');
const nitrogenioEl = document.getElementById('nitrogenio');
const fosfatoEl = document.getElementById('fosfato');
const statusEl = document.getElementById('status');
const ctx = document.getElementById('graficoArea').getContext('2d');

// Criando gráfico vazio
let grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Umidade (%)', 'Nitrogênio (mg/kg)', 'Fosfato (mg/kg)'],
        datasets: [{
            label: 'Valores do Solo',
            data: [0, 0, 0],
            backgroundColor: ['#4caf50','#ff9800','#2196f3']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Dados do Solo da Área Selecionada'
            }
        },
        scales: { y: { beginAtZero: true } }
    }
});

// Função para atualizar dados e gráfico
function atualizarDados(index){
    const area = areas[index];
    umidadeEl.textContent = `Umidade: ${area.umidade}%`;
    nitrogenioEl.textContent = `Nitrogênio: ${area.nitrogenio} mg/kg`;
    fosfatoEl.textContent = `Fosfato: ${area.fosfato} mg/kg`;

    // Status simples baseado em valores
    let status = 'Pronto para plantio';
    if(area.umidade < 20 || area.nitrogenio < 12 || area.fosfato < 6){
        status = 'Necessita cuidados';
    }
    statusEl.textContent = `Status: ${status}`;

    // Atualiza gráfico
    grafico.data.datasets[0].data = [area.umidade, area.nitrogenio, area.fosfato];
    grafico.update();
}

// Inicializa com a primeira área
atualizarDados(0);

// Atualiza quando muda a seleção
selectArea.addEventListener('change', () => {
    atualizarDados(selectArea.value);
});
