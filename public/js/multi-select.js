function demoVisibilityone() {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.visibility = "visible";
  document.getElementById("two").style.display = "";
  
}
function demoVisibilitytwoNext() {
   document.getElementById("two").style.display = "none";
   document.getElementById("three").style.visibility = "visible";
   document.getElementById("three").style.display = "";
}
function demoVisibilitytwoPre() {
  document.getElementById("one").style.display = "";
   document.getElementById("two").style.display = "none";
}
function demoVisibilitythreePre() {
   document.getElementById("three").style.display = "none";
   document.getElementById("two").style.display = "";
}