function verificarSolo() {
    // Pega o valor digitado no campo de umidade
    const umidade = document.getElementById('entrada-umidade').value;
    const resultadoDiv = document.getElementById('resultado-simulacao');
    
    resultadoDiv.style.display = 'block';

    if (umidade === "") {
        resultadoDiv.innerHTML = "Por favor, digite um valor.";
        resultadoDiv.style.backgroundColor = "#ffeb3b";
    } else if (umidade >= 20 && umidade <= 40) {
        resultadoDiv.innerHTML = "✅ Solo Ideal! A umidade está perfeita para o plantio.";
        resultadoDiv.style.backgroundColor = "#c8e6c9";
        resultadoDiv.style.color = "#2e7d32";
    } else if (umidade < 20) {
        resultadoDiv.innerHTML = "⚠️ Solo Seco! É necessário acionar a irrigação.";
        resultadoDiv.style.backgroundColor = "#ffccbc";
        resultadoDiv.style.color = "#d84315";
    } else {
        resultadoDiv.innerHTML = "🌊 Solo Encharcado! Cuidado com o apodrecimento das raízes.";
        resultadoDiv.style.backgroundColor = "#bbdefb";
        resultadoDiv.style.color = "#1565c0";
    }
}
