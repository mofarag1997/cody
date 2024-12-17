alert("user names : hassan or farag or let it empty")
let hassan = prompt("guess what is in the mystery box : ")
let btn=getElementById("btn");
function tamerHosny(btn){
  if (hassan === "hassan"){
    document.getElementById("easy").innerHTML="كسم كودي رودز";
  }else if(hassan==="farag"){
    document.getElementById("easy").innerHTML="كسمين ام كودي رودز ";
  }else{
      document.getElementById("easy").innerHTML=" انت عشمان في ايه؟ كسم كودي رودز ";
  };
  
  btn.hidden=true;
};



