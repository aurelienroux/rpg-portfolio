import {
  backgroundSprite,
  bearImg,
  bearSprite,
  backgroudImg,
  toggleFullScreen,
  boundary,
  boundaryTwo,
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
  await Promise.all([loadImage(bearImg), loadImage(backgroudImg)]);
}

const movables = [backgroundSprite, boundary, boundaryTwo];

/**
 * Main animation loop
 */
async function main() {
  backgroundSprite.draw();
  boundary.draw();
  boundaryTwo.draw();
  bearSprite.draw();

  if (!!pressedKeys.w && lastKeyPressed == "w") {
    movables.forEach(
      (movable) => (movable.position.y += backgroundSprite.velocity)
    );
  } else if (!!pressedKeys.a && lastKeyPressed == "a") {
    movables.forEach(
      (movable) => (movable.position.x += backgroundSprite.velocity)
    );
  } else if (!!pressedKeys.s && lastKeyPressed == "s") {
    movables.forEach(
      (movable) => (movable.position.y -= backgroundSprite.velocity)
    );
  } else if (!!pressedKeys.d && lastKeyPressed == "d") {
    movables.forEach(
      (movable) => (movable.position.x -= backgroundSprite.velocity)
    );
  }

  requestAnimationFrame(main);
}

/**
 * App launch
 */
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
