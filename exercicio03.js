// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const faturamento = [0, 1500, 2300, 0, 3800, 0, 1200, 2100, 0, 3400, 0, 2750]; // Exemplo de dados

function calcularFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(valor => valor > 0);
    const menorFaturamento = Math.min(...diasComFaturamento);
    const maiorFaturamento = Math.max(...diasComFaturamento);
    const mediaMensal = diasComFaturamento.reduce((a, b) => a + b, 0) / diasComFaturamento.length;
    const diasAcimaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaMedia
    };
}

const resultado = calcularFaturamento(faturamento);
console.log(`Menor faturamento: R$${resultado.menorFaturamento}`);
console.log(`Maior faturamento: R$${resultado.maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaMedia}`);
