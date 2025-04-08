// Laço de repetição para listar o ano atual até 10 anos a frente

const anoAtual = new Date().getFullYear();
const selectInput = document.getElementById("expiryYear");

for (let i = anoAtual; i <= anoAtual + 10; i = i + 1) {
    console.log(i);
    const opition = document.createElement("option")

    opition.value = i;
    opition.textContent = i;
    selectInput.appendChild(opition);
};

// Laço de repetição para listar os meses do ano
const selectMonth = document.getElementById("expiryMonth");

for (let mes = 1; mes <= 12; mes = mes + 1) {
    const option = document.createElement("option") 

    option.value = mes;
    option.textContent = mes;
    selectMonth.appendChild(option);
}