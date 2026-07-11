document.addEventListener("DOMContentLoaded", () => {
  var yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
});
