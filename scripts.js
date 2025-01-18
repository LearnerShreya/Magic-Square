// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
  
    cells.forEach((cell, index) => {
      cell.style.animation = `fadeIn 0.5s ease ${(index + 1) * 0.2}s forwards`;
    });
  });
  