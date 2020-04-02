var texto = document.getElementById('texto');
var boton = document.getElementById('btn');
var boton2 = document.getElementById('btn-2');
var keys = document.getElementById('keys');

var aguardar;
var lista = [];
var ifNeededJson = JSON.stringify(lista);

boton.addEventListener('click',()=>{
    // guardar dato en un nuevo array
    aguardar = texto.value;
    lista.push(aguardar);   
    // crear o actualizar lista 
    crearSelector(aguardar);
    // pruebas
    console.log(aguardar);
    console.log(lista);
})

boton2.addEventListener('click',()=>{
    modificador();
})


function crearSelector(nuevodato){
    // update del selector
    var option = document.createElement('option');
    var contador = nuevodato;
    var lastlist = lista.length;
    // hacer que el elemento dado sea el value
    option.setAttribute('value', contador)
    // anadirloo al elemento existente keys
    keys.appendChild(option);
    // update resultados
    print();

}

function modificador(){
    // validar que dato estoy tomando
    var dato = document.getElementById('data').value;
    // validar en queq posicion esta ese dato 
    var index = lista.indexOf(dato);
    // cambiar el dato existente en la lista
    lista[index] = texto.value;
    // remover datos actuales del seleccionador
    let keys = document.getElementById('keys');
    while (keys.hasChildNodes()){
        keys.removeChild(keys.firstChild);
    }

    for(let i = 0; i<lista.length; i++){
        var option = document.createElement('option');
        option.setAttribute('value', lista[i]);
        keys.appendChild(option);
    }

    // pruebas 
    console.log(dato);
    console.log(index);
    console.log(lista);
    // modificador print
    print();
}

function print(){
    var resultado = document.querySelector('#resultados');
    resultado.innerHTML = lista 
    localStorage.setItem('lista',JSON.stringify(lista));
}

var listal;

arr = document.getElementById('keys');

arr.addEventListener