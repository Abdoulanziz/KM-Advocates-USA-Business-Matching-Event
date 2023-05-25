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

  // Other functionality
  let collapsibleHeaders = document.getElementsByClassName("collapsible-header");
  let collapsibleSubHeaders = document.getElementsByClassName("collapsible-sub-header");

  Array.from(collapsibleHeaders).forEach((header) => {
      let isClicked = false;
      header.addEventListener("click", () => {
      if (!isClicked) {
          isClicked = true;
          header.parentElement.classList.toggle("collapsible-open");
          document.querySelector(".collapsible-header.last").style.borderBottomLeftRadius = "0";
          document.querySelector(".collapsible-header.last").style.borderBottomRightRadius = "0";
      } else {
          isClicked = false;
          header.parentElement.classList.toggle("collapsible-open");
          document.querySelector(".collapsible-header.last").style.borderBottomLeftRadius = "13px";
          document.querySelector(".collapsible-header.last").style.borderBottomRightRadius = "13px";
      }
      });
  });

  Array.from(collapsibleSubHeaders).forEach((subHeader) => {
      subHeader.nextElementSibling.classList.toggle("hide");
      subHeader.addEventListener("click", () => {
      subHeader.nextElementSibling.classList.toggle("hide");
      });
  });


  function countdown(date) {
    // Set the date we're counting down to
    const countDownDate = new Date(date).getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown in the HTML element
      document.getElementById("countdown").innerHTML = days + "d : " + hours + "h : "
      + minutes + "m : " + seconds + "s ";

      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "The event has already happened!";
      }
    }, 1000);
  }

  countdown("Oct 17, 2023 00:00:00");
});
