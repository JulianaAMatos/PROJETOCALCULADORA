function Click(num){
    const numero= document.getElementById("resultado").innerHTML
     document.getElementById('resultado').innerHTML= numero+num;

}

function Clear(){
     document.getElementById('resultado').innerHTML = "";
}

function Back(){
    const resultado= document.getElementById('resultado').innerHTML; 
    document.getElementById('resultado').innerHTML= resultado.substring(0, resultado.length -1)
}

function Calcular(){
     
    const resultado= document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }}