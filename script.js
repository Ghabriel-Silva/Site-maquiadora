// Seleciona o primeiro elemento com a classe 'manual-btn' e armazena na variável 'radio'
// (Esta linha não é utilizada no restante do código, mas está aí para referência futura)
const radio = document.querySelector('.manual-btn');

// Define a variável 'cont' como uma variável mutável (let) e a inicializa com o valor 1
let cont = 1;

// Marca o primeiro input radio como selecionado (checked = true)
document.getElementById('radio1').checked = true;

// Configura um intervalo para executar a função 'proximaImg' a cada 1000 milissegundos (1 segundo)
setInterval(() => {
    proximaImg(); // Chama a função para avançar para a próxima imagem
}, 5000);

// Função que avança para a próxima imagem, marcando o próximo input radio
function proximaImg() {
    // Incrementa a variável 'cont' para avançar para o próximo input radio
    cont++;

    // Se 'cont' for maior que 3, redefine 'cont' para 1
    // Isso cria um loop, voltando ao primeiro input após o terceiro
    if (cont > 3) {
        cont = 1;
    }

    // Marca o input radio correspondente ao valor atual de 'cont' como selecionado (checked = true)
    document.getElementById('radio' + cont).checked = true;
}
