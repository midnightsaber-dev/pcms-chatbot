$(document).ready(function(){

    
   
    $("#nextBtn1").on("click", function(){
      function demoVisibilityone() {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.visibility = "visible";
  document.getElementById("two").style.display = "";
  
}
    }); 
   
    $("#p2-PrevBtn").click(); //trigger event after listening to it.
 
 });