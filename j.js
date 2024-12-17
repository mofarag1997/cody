alert("user names : cody or roman or let it empty")
let hassan = prompt("guess what is in the mystery box : ")
let btn=getElementById("btn");
function tamerHosny(btn){
  if (hassan === "cody"){
    document.getElementById("easy").innerHTML="كسم كودي رودز";
  }else if(hassan==="roman"){
    document.getElementById("easy").innerHTML="كسمين ام كودي رودز و اعترف بالزعيم ";
  }else{
      document.getElementById("easy").innerHTML=" انت عشمان في ايه؟ كسم كودي رودز ";
  };
  
  btn.hidden=true;
};



