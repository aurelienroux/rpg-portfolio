import {
  backgroundSprite,
  backgroudImg,
  playerImg,
  playerSprite,
} from "./helpers/sprites.js";
import { lastKeyPressed, pressedKeys } from "./helpers/movements.js";
import { loadImage, toggleFullScreen } from "./helpers/utils.js";
import { boundaries } from "./helpers/collision.js";

/**
 * Make sure img assets are loaded
 */
async function preloadImages() {
  await Promise.all([loadImage(backgroudImg), loadImage(playerImg)]);
}

const movables = [backgroundSprite, ...boundaries];

/**
 * Main animation loop
 */
async function main() {
  backgroundSprite.draw();
  boundaries.forEach((boundary) => boundary.draw());
  playerSprite.draw();

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
