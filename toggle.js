let ele1 = document.getElementById("primaryNav");

function openSideMenu() {
  document.getElementById("hamburgerBtn").classList.toggle("open");
  document.body.classList.toggle("show");
  if (ele1.style.display === "block") {
    ele1.style.display = "none";
  } else {
    ele1.style.display = "block";
  };
};
