var operação = prompt("Qual é a operação desejada?");
var num1 = prompt("digite o primeiro valor");
var num2 = prompt("digite o outro número");

if (operação == "+"){
    let resultado = parseInt(num1) + parseInt(num2);
    alert(resultado)

}
if (operação == "-"){
    let resultado = parseInt(num1) - parseInt(num2);
    alert(resultado)

}
if (operação == "*" || operação == "x"){
    let resultado = parseInt(num1) * parseInt(num2);
    alert(resultado)

}
if (operação == "/" || operação == ":"){
    let resultado = parseInt(num1) / parseInt(num2);
    alert(resultado)

}
window.location.reload()