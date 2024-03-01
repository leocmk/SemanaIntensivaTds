function checkMajority(){
    var wasBorn = document.getElementById("clientBirth").valueAsNumber;
    var res = document.getElementById("result");

   if(isNaN(wasBorn)){
    res.textContent = "type only numbers"
    res.style.color = "red";
    return;

   }

   const thisYear = new Date().getFullYear();
   const age = thisYear - wasBorn;
   
   if(age >=18){
    res.textContent = "over 18, Entry 👍"
    res.style.color = "green"
    
   }else{
    res.textContent = "Under 18, Not ALLOWED 🐱‍👤"
    res.style.color = "orange"
   }

   document.getElementById("clientAge").innerHTML =`${age} anos de idade!`;
  

}
