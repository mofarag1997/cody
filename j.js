alert("user names : hassan or farag or let it empty")
let hassan = prompt("guess what is in the mystery box : ")
let btn=getElementById("btn");
function tamerHosny(btn){
  if (hassan === "hassan"){
    document.getElementById("easy").innerHTML="كسم تامر حسني";
  }else if(hassan==="farag"){
    document.getElementById("easy").innerHTML="كسم حسن فرج ";
  }else{
      document.getElementById("easy").innerHTML=" كسم حسن فرج برضوا ";
  };let job = "Manager";
  let salary = 0;
  
  if (job === "Manager") {
    salary = 8000;
  } else if (job === "IT" || job === "Support") {
    salary = 6000;
  } else if (job === "Developer" || job === "Designer") {
    salary = 7000;
  } else {
    salary = 4000;
  }
  
  btn.hidden=true;
};



