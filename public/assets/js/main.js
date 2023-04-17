document.addEventListener("DOMContentLoaded", () => {
  // Device Check
  (function () {
    // Create a condition that targets viewports at least 768px wide
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    function handleDeviceChange(e) {
      // Check if the media query is true
      if (e.matches) {
        // Desktop view

        // Accordions
        const accordions = document.querySelectorAll(".accordion");
        accordions.forEach((accordion) => {
          let isClicked = false;
          let icon;

          if (accordion.querySelector(".title")) {
            accordion.querySelector(".title").addEventListener("click", (event) => {
              icon = accordion.querySelector("i");
              if (!isClicked) {
                isClicked = true;
                icon.classList.remove("ti-angle-up");
                icon.classList.add("ti-angle-down");
                accordion.querySelector(".content").classList.toggle("hide");
                accordion.querySelector(".content").style.borderBottomLeftRadius = "13px";
                accordion.querySelector(".content").style.borderBottomRightRadius = "13px";
                accordion.querySelector(".title").style.borderBottomLeftRadius = "0";
                accordion.querySelector(".title").style.borderBottomRightRadius = "0";
                
              } else {
                isClicked = false;
                icon.classList.remove("ti-angle-down");
                icon.classList.add("ti-angle-up");
                accordion.querySelector(".content").classList.toggle("hide");
                accordion.querySelector(".title").style.borderBottomLeftRadius = "13px";
                accordion.querySelector(".title").style.borderBottomRightRadius = "13px";
                
              }
            });
          }
        });
      } else {

        // Accordions
        const accordions = document.querySelectorAll(".accordion");
        accordions.forEach((accordion) => {
          let isClicked = false;
          let icon;
          if (accordion.querySelector(".title")) {
            accordion.querySelector(".title").addEventListener("click", (event) => {
              icon = accordion.querySelector("i");
              if (!isClicked) {
                isClicked = true;
                icon.classList.remove("ti-angle-up");
                icon.classList.add("ti-angle-down");
                accordion.querySelector(".content").classList.toggle("hide");
                accordion.querySelector(".content").style.borderBottomLeftRadius = "13px";
                accordion.querySelector(".content").style.borderBottomRightRadius = "13px";
                accordion.querySelector(".title").style.borderBottomLeftRadius = "0";
                accordion.querySelector(".title").style.borderBottomRightRadius = "0";
                
              } else {
                isClicked = false;
                icon.classList.remove("ti-angle-down");
                icon.classList.add("ti-angle-up");
                accordion.querySelector(".content").classList.toggle("hide");
                accordion.querySelector(".title").style.borderBottomLeftRadius = "13px";
                accordion.querySelector(".title").style.borderBottomRightRadius = "13px";
              }
            });
          }
        });
      }
    }

    // Register event listener
    mediaQuery.addListener(handleDeviceChange);

    // Initial check
    handleDeviceChange(mediaQuery);
  })()
});
