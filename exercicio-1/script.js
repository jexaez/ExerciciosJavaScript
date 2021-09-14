let nome= prompt("Qual é seu nome");
let sobrenome= prompt("Qual é seu sobrenome");
let idade= Number(prompt("Qual é seu edade"));
let cor=prompt("Qual é seu cor favorito");

console.log('Nome:' +nome+ ' Sobrenome:' +sobrenome+ ' Idade:'+idade+ ' Cor favorito:' +cor);

console.table(
    {
    Nome: nome,
    sobrenome: sobrenome,
    idade:idade,
    cor: cor
    });

    