let preco = Number(prompt("Insira o precio do produto"));

resposta = confirm("Deseja pagar a vista");

if (resposta){
    desconto = (preco / 100) *10;
    precoConDesconto= preco - desconto;
    alert("El preco é " +preco+ "e o valor a pagar con 10% de desconto é "+ precoConDesconto);
}
else{
    parcela = Number(prompt("Quantas parcelas"));

    if( parcela >= 2 && parcela <= 6){
    parcelaComAumento = preco + 1.5 / 100 * preco  * parcela ;
    alert("Se le sumara o 15%, que sera dividido en " + parcela + " parcela a cantidade de " +parcelaComAumento);
    }else{
        alert("Numero errado, é ate 6 parcela");
    }
}