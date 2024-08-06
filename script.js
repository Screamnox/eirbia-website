document.addEventListener("DOMContentLoaded", () => {
  try {
    particlesJS.load("particles-js", "assets/particles.json", function () {
      console.log("Particles.js configuration loaded");
    });
  } catch (error) {
    console.error("Error loading particles.js:");
  }
});
