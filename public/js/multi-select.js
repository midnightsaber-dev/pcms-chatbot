document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nextBtn1").addEventListener("click", () => {
    nextPage(2);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nextBtn2").addEventListener("click", () => {
    nextPage(3);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("prevBtn1").addEventListener("click", () => {
    nextPage(1);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("prevBtn2").addEventListener("click", () => {
    nextPage(2);
  });
});

function nextPage(page) {
  if (page == 3) {
    document.getElementById("luckydraw-form").className = "block";
    document.getElementById("user-info").className = "hidden";
    document.getElementById("product").className = "hidden";
  } else if (page == 2) {
    document.getElementById("product").className = "block";
    document.getElementById("luckydraw-form").className = "hidden";
    document.getElementById("user-info").className = "hidden";
  } else if (page == 1) {
    document.getElementById("user-info").className = "block";
    document.getElementById("luckydraw-form").className = "hidden";
    document.getElementById("product").className = "hidden";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nextBtn1").addEventListener("click", () => {
    nextPage(2);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nextBtn2").addEventListener("click", () => {
    nextPage(3);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("prevBtn1").addEventListener("click", () => {
    nextPage(1);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("prevBtn2").addEventListener("click", () => {
    nextPage(2);
  });
});

function nextPage(page) {
  if (page == 3) {
    document.getElementById("luckydraw-form").className = "block";
    document.getElementById("user-info").className = "hidden";
    document.getElementById("product").className = "hidden";
  } else if (page == 2) {
    document.getElementById("product").className = "block";
    document.getElementById("luckydraw-form").className = "hidden";
    document.getElementById("user-info").className = "hidden";
  } else if (page == 1) {
    document.getElementById("user-info").className = "block";
    document.getElementById("luckydraw-form").className = "hidden";
    document.getElementById("product").className = "hidden";
  }
}
