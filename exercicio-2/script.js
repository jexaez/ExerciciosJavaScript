let nome1= prompt("Qual é seu nome");
let edade1= Number(prompt("Qual é seu edade"));
let cor1=prompt("Qual é seu cor favorito");

let nome2= prompt("Qual é seu nome");
let edade2= Number(prompt("Qual é seu edade"));
let cor2=prompt("Qual é seu cor favorito");


if(edade1 == edade2){
    console.log(nome1+"="+edade1+"\n" +nome2+"="+edade2+"\n"+nome1+" e "+ nome2+ " tem a misma idade");
} if(edade1 > edade2){
    console.log(nome1+"="+edade1+"\n" +nome2+"="+edade2+"\n" +nome1+" é maior o que  "+ nome2);
}if(edade1 < edade2){
    console.log(nome1+"="+edade1+"\n" +nome2+"="+edade2+"\n" +nome1+" é menor o que  "+ nome2);
}

if(cor1 == cor2){
    console.log(nome1+"="+cor1+"\n" +nome2+"="+cor2+"\n"+nome1+" e "+ nome2+ " tem o mismo cor");
}
if (cor1 != cor2){
    console.log(nome1+"="+cor1+"\n" +nome2+"="+cor2+"\n");
    console.log('Los cores são diferentes')
}



    

    







    