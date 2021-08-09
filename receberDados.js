
    let nome1= prompt("Qual é seu nome");
    /*let sobreNome= prompt("Qual é seu sobrenome");*/
    let edade1= Number(prompt("Qual é seu edade"));
    let cor1=prompt("Qual é seu cor favorito");

    let nome2= prompt("Qual é seu nome");
    /*let sobreNome= prompt("Qual é seu sobrenome");*/
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
}

/*console.log("Seu nome é " +nome+ "\n Seu Sobrenome " +sobreNome+ "\n Seu edade " +edade);*/
/*console.table(
    {nome:'Jani',
     sobreNome:'Exaez',
     edade:31
    });*/

    /*for(count= 10; count > 0; count --){
        console.log(count);
    }*/