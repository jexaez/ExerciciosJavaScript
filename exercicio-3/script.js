
let registros=[];
let agregar;

function RegistroPessoa(){
    let registro={
        nome:prompt('Qual é seu nome'),
        sobrenome:prompt('Qual é seu sobrenome'),
        idade:Number(prompt('Qual é seu idade'))      
     }
     registros.push(registro);   
}

do{
    RegistroPessoa();
    agregar = prompt('Desea agregar mais pessoas? S/N');

    if((!agregar == 'S') || (!agregar =='s') && (
        !agregar == 'N') || (!agregar =='n')){
        alert('Dato Invalido');
    }
}while((agregar == 'S') || (agregar =='s'));

function comparaIdade(registros){   
    let  pessoaVelha = registros.find((element, index) => 
    element.idade > registros[0].idade && index !== 0)
    console.log('O mais velho e: '+pessoaVelha.nome+' com '+pessoaVelha.idade+' anos');
} 

function mostra(){
    console.log('Los registros son:\n')
        
    for(let registro of registros){
        console.log('Nome: '+registro.nome+ ' Idade: '+registro.idade);
    }
    comparaIdade(registros);
}

mostra();
    
   
            
     
        

    
 

