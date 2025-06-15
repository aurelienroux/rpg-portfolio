import { dialogBoxChoices } from "./classes.js";
import { backgroudImg, foregroundImg, playerImg, uiImage } from "./sprites.js";

/**
 * @param {HTMLImageElement} image
 * @returns {Promise<void>}
 */
export function loadImage(image) {
  return new Promise((res) => {
    image.addEventListener("load", res);
  });
}

// Make sure img assets are loaded
export async function preloadImages() {
  await Promise.all([
    loadImage(backgroudImg),
    loadImage(playerImg),
    loadImage(foregroundImg),
    loadImage(uiImage),
  ]);
}

// set browser to fullscreen
window.addEventListener("keydown", (e) => {
  if (e.key === "f" || e.key === "F") {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  if (e.key === "o" || e.key === "O") {
    window.open("./images/cv.pdf", "_blank");
  }
});

export function updateSelectedChoiceUI(selectedChoiceIndex) {
  const choiceElements = dialogBoxChoices.querySelectorAll("li");
  choiceElements.forEach((el, i) => {
    if (i === selectedChoiceIndex) {
      el.setAttribute("data-selected", "true");
    } else {
      el.removeAttribute("data-selected");
    }
  });
}

// mobile: open cv
const cvInput = document.getElementById("input-cv");
cvInput.addEventListener("click", () => {
  window.open("./images/cv.pdf", "_blank");
});
