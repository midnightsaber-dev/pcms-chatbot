/*  function demoVisibilityone() {
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
 */

function demoVisibilityone() {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.visibility = "visible";
  document.getElementById("two").style.display = "";
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('nextBtn1')
    .addEventListener('click', demoVisibilityone);
});

function demoVisibilitytwoNext() {
  document.getElementById("two").style.display = "none";
   document.getElementById("three").style.visibility = "visible";
   document.getElementById("three").style.display = "";
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('P2-NextBtn')
    .addEventListener('click', demoVisibilitytwoNext);
});

function demoVisibilitytwoPre() {
  document.getElementById("one").style.display = "";
   document.getElementById("two").style.display = "none";
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('p2-PrevBtn')
    .addEventListener('click', demoVisibilitytwoPre);
});

function demoVisibilitythreePre() {
  document.getElementById("three").style.display = "none";
   document.getElementById("two").style.display = "";
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('P3-PrevBtn')
    .addEventListener('click', demoVisibilitythreePre);
});

/* for choose product */
$(document).ready(function(){
  $('#myselection').on('change', function(){
    var demovalue = $(this).val(); 
      $("div.myDiv").hide();
      $("#show"+demovalue).show();
  });
});