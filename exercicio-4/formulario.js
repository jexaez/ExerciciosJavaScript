let registros=[];

let registro ={
    nome:'',
    idade:'' 
 }

let pessoVelha;
 

 function agregarRegistro(){
     

     let imputNome= document.querySelector('#nome');
     let imputIdade=document.querySelector('#idade');
     let listaRegistro=document.querySelector('#listaRegistro');
      
     let capturaNome=imputNome.value;
     let capturaIdade=imputIdade.value;

     let registro ={
        nome:capturaNome,
        idade:Number(capturaIdade) 
     }
     
     registros.push(registro);

     imputNome.value='';
     imputIdade.value='';
      
     let listemItem= document.createElement('li');

     listemItem.textContent=capturaNome;
     listaRegistro.appendChild(listemItem);

     console.log('Los registros son:\n')
    
    for(let registro of registros){
    console.log('Nome: '+registro.nome+ ' Idade: '+registro.idade);
    }
    
    registros.find((registro, index) => 
    registro.idade > registros[0].idade && index !== 0)
    console.log('O mais velho e: '+registro.nome +' com '+registro.idade+'anos');  
    
 }

    
    document.querySelector('#btnRegistro').addEventListener('click', agregarRegistro);
    
     

    