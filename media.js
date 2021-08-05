let Nota1= pedirNota();
let Nota2= pedirNota();
let Nota3= pedirNota();


let media= CalcularMedia(Nota1, Nota2, Nota3);

if(media >= 7){
    alert("Você foi aprovado");
}else{
    alert("Você foi reprovado");
}

function pedirNota(){
    let nota = Number(prompt("Insira nota"));

    if( nota >= 0 && nota <= 10){
        return nota;
    }
}

function CalcularMedia(n1,n2,n3){
    return(n1+n2+n3)/3;
}