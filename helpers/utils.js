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

/**
 * set browser to fullscreen
 */
document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "f") {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  },
  false
);
