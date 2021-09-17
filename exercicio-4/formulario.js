let registros=[];
let pessoVelha;

let registro = {
    nome:'',
    idade:'' 
 }

 function agregarRegistro(){
     
     let imputNome= document.querySelector('#name');
     let imputIdade=document.querySelector('#idade');
     
      
     let capturaNome=imputNome.value;
     let capturaIdade=imputIdade.value;

     let registro ={
        nome:capturaNome,
        idade:Number(capturaIdade) 
     }
     
     registros.push(registro);

     imputNome.value='';
     imputIdade.value='';
     

     let listaRegistro = document.querySelector('#listaRegistro');
    
     let listaNome = document.createElement('li');
     listaNome.textContent = capturaNome;

     let listaIdade = document.createElement('li');
     listaIdade.textContent = capturaIdade;

     
     listaRegistro.appendChild(listaNome);
     listaRegistro.appendChild(listaIdade);

     console.log('Los registros son:\n')
    
    for(let registro of registros){
    console.log('Nome: '+registro.nome+ ' Idade: '+registro.idade);
    }
    
    registros.find((registro, index) => 
    registro.idade > registros[0].idade && index !== 0)
    console.log('O mais velho e: '+registro.nome +' com '+registro.idade+'anos');  
    
 }

    
    