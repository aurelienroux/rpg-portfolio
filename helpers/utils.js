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
    // TODO: change key
    if (e.key === "Enter") {
      // toggleFullScreen();
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  },
  false
);
