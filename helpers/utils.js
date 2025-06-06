import { dialogBoxChoices } from "./classes.js";
import { backgroudImg, foregroundImg, playerImg } from "./sprites.js";

/**
 * @param {HTMLImageElement} image
 * @returns {Promise<void>}
 */
export function loadImage(image) {
  return new Promise((res) => {
    image.addEventListener("load", res);
  });
}

/**
 * Make sure img assets are loaded
 */
export async function preloadImages() {
  await Promise.all([
    loadImage(backgroudImg),
    loadImage(playerImg),
    loadImage(foregroundImg),
  ]);
}

export const helpElement = document.getElementById("help");
export const helpExpandedClassName = "help-expanded";

document.addEventListener(
  "keydown",
  (e) => {
    // set browser to fullscreen
    if (e.key === "f") {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    if (e.key == "h") {
      helpElement.classList.toggle(helpExpandedClassName);
    }
  },
  false
);

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
