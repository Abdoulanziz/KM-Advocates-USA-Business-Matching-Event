const payBtn = document.querySelector("#goToFlutter");
if (payBtn) {
  payBtn.addEventListener("click", (event) => {
    payBtn.textContent = "Please wait...";
    payBtn.style.opacity = ".4";
    setTimeout(() => {
      payBtn.textContent = "Submit & Proceed to Pay";
      payBtn.style.opacity = "unset";
    }, 5000);
  });
}
