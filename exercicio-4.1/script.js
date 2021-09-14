
let registros=[];
let agregar = 's';

if((agregar =='s') || (agregar =='n')){
    while(agregar == 's'){
        RegistroPessoa();
        agregar = prompt('Desea agregar mais pessoas? S/N');
    }
}else{ prompt('Dato invalido');
    }

function RegistroPessoa(){
    let registro={
        nome:prompt('Qual é seu nome'),
        sobrenome:prompt('Qual é seu sobrenome'),
        idade:Number(prompt('Qual é seu idade'))      
     }
     registros.push(registro);   
}

console.log('Los registros son:\n')
 for(let registro of registros){
     console.log('Nome: '+registro.nome+ ' Idade: '+registro.idade);
 }
    
   let  pessoaVelha = registros.find((element, index) => 
        element.idade > registros[0].idade && index !== 0)
        console.log('O mais velho e: '+pessoaVelha.nome+' com '+pessoaVelha.idade+'anos');
            
     
        

    
 

