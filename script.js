alert("Welcome to Darshika's Portfolio!");
// Typing animation
const roles = ["Web Developer", "AI Explorer", "Student Coder"];
let i = 0, j = 0, currentRole = '', isDeleting = false;

function typeEffect() {
  if (i < roles.length) {
    currentRole = roles[i];

    if (!isDeleting) {
      document.getElementById("typing").textContent = currentRole.slice(0, j++);
      if (j > currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }
    } else {
      document.getElementById("typing").textContent = currentRole.slice(0, j--);
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
      }
    }
    setTimeout(typeEffect, 150);
  }
}
typeEffect();