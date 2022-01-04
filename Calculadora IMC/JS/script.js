var idade = document.getElementById("idade")
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
var feminino = document.getElementById("feminino")
var masculino = document.getElementById("masculino")

document.getElementById("calcular").addEventListener("click", validadeForm);

function validadeForm(){
    if(idade.value == '' || altura.value == '' || peso.value == '' || (masculino.checked==false  && feminino.checked==false)){
        alert("Todos os campos são obrigatorios!");
        document.getElementById("calcular").removeEventListener("click", calcularIMC);
    } else{
        calcularIMC();
    }
}

function calcularIMC(){
    var arrayPessoas = [idade.value, altura.value, peso.value];
    if(masculino.checked){
        arrayPessoas.push("masculino");
    } else if(feminino.checked){
        arrayPessoas.push("feminino");
    }
    
    var imc = Number(arrayPessoas[2]) / (Number(arrayPessoas[1])/100 * Number(arrayPessoas[1])/100);
    
    var resultado = '';
    if(imc<18.5){
        resultado = 'Magreza';
    } else if(18.5<=imc && imc<=24.9){
        resultado = 'Normal';
    } else if(24.9<=imc && imc<=30) {
        resultado = 'Obeso';
    } else if(imc>30) {
        resultado = 'Obesidade Extrema';
    }

    var h1 = document.createElement('h1');
    var h2 = document.createElement('h2');

    var t = document.createTextNode(resultado);
    var b = document.createTextNode('imc: ');
    var r = document.createTextNode(parseFloat(imc).toFixed(2) + ' kg/m²');

    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);

    document.body.appendChild(h1);
    document.body.appendChild(h2);

    document.getElementById("calcular").removeEventListener("click", calcularIMC);
    document.getElementById("calcular").removeEventListener("click", validadeForm);
}

document.getElementById("calcular").removeEventListener("click", calcularIMC);