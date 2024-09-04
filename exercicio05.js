// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverterString(str) {
    let invertedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedStr += str[i];
    }
    return invertedStr;
}

let string = "Hello, World!";
let resultado = inverterString(string);
console.log(resultado); // Saída: !dlroW ,olleH
