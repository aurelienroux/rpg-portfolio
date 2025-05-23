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
 * Checks if two sprites are colliding based on their positions and sizes.
 *
 * @param {Object} spriteOne - The first sprite object.
 * @param {Object} spriteOne.position - The position of the first sprite.
 * @param {number} spriteOne.position.x - The x-coordinate of the first sprite.
 * @param {number} spriteOne.position.y - The y-coordinate of the first sprite.
 * @param {Object} spriteOne.size - The size of the first sprite.
 * @param {number} spriteOne.size.width - The width of the first sprite.
 * @param {number} spriteOne.size.height - The height of the first sprite.
 * @param {Object} spriteTwo - The second sprite object.
 * @param {Object} spriteTwo.position - The position of the second sprite.
 * @param {number} spriteTwo.position.x - The x-coordinate of the second sprite.
 * @param {number} spriteTwo.position.y - The y-coordinate of the second sprite.
 * @param {Object} spriteTwo.size - The size of the second sprite.
 * @param {number} spriteTwo.size.width - The width of the second sprite.
 * @param {number} spriteTwo.size.height - The height of the second sprite.
 * @returns {boolean} True if the two sprites are colliding, otherwise false.
 *
 */
function isColliding(spriteOne, spriteTwo) {
  return (
    spriteOne.position.x + spriteOne.size.width >= spriteTwo.position.x &&
    spriteOne.position.x <= spriteTwo.position.x + spriteTwo.size.width &&
    spriteOne.position.y <= spriteTwo.position.y + spriteTwo.size.height / 12 &&
    spriteOne.position.y + spriteOne.size.height >= spriteTwo.position.y
  );
}

/**
 * Main animation loop
 */
async function main() {
  backgroundSprite.draw();
  boundaries.forEach((boundary) => boundary.draw());
  playerSprite.draw();

  let canMove = true;
  if (!!pressedKeys.w && lastKeyPressed == "w") {
    for (let index = 0; index < boundaries.length; index++) {
      const element = boundaries[index];
      if (
        isColliding(playerSprite, {
          ...element,
          position: { x: element.position.x, y: element.position.y + 4 },
        })
      ) {
        console.log("is colliding");
        canMove = false;
        break;
      }
    }

    if (canMove) {
      movables.forEach(
        (movable) => (movable.position.y += backgroundSprite.velocity)
      );
    }
  } else if (!!pressedKeys.a && lastKeyPressed == "a") {
    for (let index = 0; index < boundaries.length; index++) {
      const element = boundaries[index];
      if (
        isColliding(playerSprite, {
          ...element,
          position: { x: element.position.x + 7, y: element.position.y },
        })
      ) {
        console.log("is colliding");
        canMove = false;
        break;
      }
    }

    if (canMove) {
      movables.forEach(
        (movable) => (movable.position.x += backgroundSprite.velocity)
      );
    }
  } else if (!!pressedKeys.s && lastKeyPressed == "s") {
    for (let index = 0; index < boundaries.length; index++) {
      const element = boundaries[index];
      if (
        isColliding(playerSprite, {
          ...element,
          position: { x: element.position.x, y: element.position.y - 4 },
        })
      ) {
        console.log("is colliding");
        canMove = false;
        break;
      }
    }

    if (canMove) {
      movables.forEach(
        (movable) => (movable.position.y -= backgroundSprite.velocity)
      );
    }
  } else if (!!pressedKeys.d && lastKeyPressed == "d") {
    for (let index = 0; index < boundaries.length; index++) {
      const element = boundaries[index];
      if (
        isColliding(playerSprite, {
          ...element,
          position: { x: element.position.x - 4, y: element.position.y },
        })
      ) {
        console.log("is colliding");
        canMove = false;
        break;
      }
    }

    if (canMove) {
      movables.forEach(
        (movable) => (movable.position.x -= backgroundSprite.velocity)
      );
    }
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
