document.getElementById("order-btn").addEventListener("click", function() {
  document.getElementById("modal").classList.remove("hidden");
});
document.querySelector(".close-button").addEventListener("click", function() {
  document.getElementById("modal").classList.add("hidden");
});
