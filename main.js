import {
  backgroundSprite,
  bearImg,
  bearSprite,
  portfolioImg,
  toggleFullScreen,
} from "./helpers/sprites.js";
import { lastKeyPressed, pressedKeys } from "./helpers/movements.js";

/**
 * @param {HTMLImageElement} image
 * @returns {Promise<void>}
 */
function loadImage(image) {
  return new Promise((res) => {
    image.addEventListener("load", res);
  });
}

/**
 * Make sure img assets are loaded
 */
async function preloadImages() {
  await Promise.all([loadImage(bearImg), loadImage(portfolioImg)]);
}

/**
 * Main animation loop
 */
async function main() {
  backgroundSprite.draw();
  bearSprite.draw();

  if (!!pressedKeys.w && lastKeyPressed == "w") {
    backgroundSprite.position.y += backgroundSprite.velocity;
  } else if (!!pressedKeys.a && lastKeyPressed == "a") {
    backgroundSprite.position.x += backgroundSprite.velocity;
  } else if (!!pressedKeys.s && lastKeyPressed == "s") {
    backgroundSprite.position.y -= backgroundSprite.velocity;
  } else if (!!pressedKeys.d && lastKeyPressed == "d") {
    backgroundSprite.position.x -= backgroundSprite.velocity;
  }

  requestAnimationFrame(main);
}
preloadImages().then(main);

document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
  },
  false
);
