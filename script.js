document.addEventListener("DOMContentLoaded", () => {

  // ADD RECOMMENDATION
  function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation");

    if (recommendation.value.trim() !== "") {
      showPopup(true);

      let element = document.createElement("div");
      element.classList.add("recommendation");
      element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span>`;

      document.getElementById("all_recommendations").appendChild(element);
      recommendation.value = "";
    }
  }

  window.addRecommendation = addRecommendation; // expose for button onclick


  // POPUP
  function showPopup(bool) {
    document.getElementById("popup").style.visibility = bool ? "visible" : "hidden";
  }

  window.showPopup = showPopup; // expose for button onclick


  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 90,
                  behavior: "smooth"
              });
          }
      });
  });


  // NAVBAR SCROLL EFFECT
  const navbar = document.getElementById("home");

  window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });


  // SCROLL TO TOP BUTTON
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
          scrollBtn.style.display = "flex";
          scrollBtn.style.opacity = "1";
      } else {
          scrollBtn.style.opacity = "0";
          scrollBtn.style.display = "none";
      }
  });

  scrollBtn.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });


  // FADE IN ON SCROLL
  const fadeElements = document.querySelectorAll(".fade-in");

  function revealOnScroll() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger on load
});
