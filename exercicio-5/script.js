
form.addEventListener('submit', function(e) {
    e.preventDefault()

    //formData = new FormData(this);

    let cep = document.getElementById('cep').value;
    console.log(cep);
   
    let dadosCep;
    fetch('http://viacep.com.br/ws/01001000/json/')   
    .then(resp => resp.json())
    .then(data => dadosCep = data)
    .then(data => console.log(dadosCep.cep));

    let listaRegistro = document.getElementById('listaRegistro');
    let lista = document.createElement('li');
    lista.textContent = dadosCep.cep;
    listaRegistro.appendChild(lista);

});

//console.log(formData.get('name'));

    /*fetch('http://viacep.com.br/ws/01001000/json/',{
        method:'post', 
        body: formData
    })
    .then(resp => resp.json())
    .then(formData => console.log(formData));*/