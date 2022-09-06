var num1 =  document.getElementById ("num1");
var num2 =  document.getElementById ("num2");



function Addition(){
    let sum = parseInt(num1.value) + parseInt(num2.value);
    alert(sum)
}
function minus(){
    let sum = parseInt(num1.value) - parseInt(num2.value);
    alert(sum)
}
function Multiplication(){
    let sum = parseInt(num1.value) * parseInt(num2.value);
    alert(sum)
}
function Division(){
    let sum = parseInt(num1.value) / parseInt(num2.value);
    alert(sum)
}

function Reset(){
    num1 = num1 = 0;
    document.getElementById("num1").innerHTML = num1;

}



