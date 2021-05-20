$(document).ready(function(){
    $('#nextBtn1').click(function(){
        function demoVisibilityone() {
            document.getElementById("one").style.display = "none";
            document.getElementById("two").style.visibility = "visible";
            document.getElementById("two").style.display = "";
            
          }
    });
  });

  $(document).ready(function(){
    $('#p2-PrevBtn').click(function(){
        function demoVisibilitytwoPre() {
            document.getElementById("one").style.display = "";
             document.getElementById("two").style.display = "none";
          }
    });
  });

  $(document).ready(function(){
    $('#P2-NextBtn').click(function(){
        function demoVisibilitytwoNext() {
            document.getElementById("two").style.display = "none";
            document.getElementById("three").style.visibility = "visible";
            document.getElementById("three").style.display = "";
         }
    });
  });