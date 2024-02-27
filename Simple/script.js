function calcular(){
  
    var n1 = document.getElementById("num1").valueAsNumber;
    var n2 = document.getElementById("num2").valueAsNumber;
    var res = document.getElementById("res");

if(isNaN(n1) && isNaN(n2)){
        alert("Digite números válidos")
return;
}
res.innerHTML = n1 + n2;
}
function media(){
  
    var n1 = document.getElementById("nota1").valueAsNumber;
    var n2 = document.getElementById("nota2").valueAsNumber;
    var res = document.getElementById("nota3").valueAsNumber;

    
    res.textcontent = ((n1 +n2 +n3) /3).tofixed(2) 
    if(res > 7){
      mediaTexto.innerHTML = res.tooFixed(2)
      mediaTexto.style.color = "green"
 
    }
    else(res >=7){
        mediaTexto.innerHTML = res.tooFixed(2)
        mediaTexto.style.color = "green"
   
