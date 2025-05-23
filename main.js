import { backgroundSprite, playerSprite } from "./helpers/sprites.js";
import { lastKeyPressed, pressedKeys } from "./helpers/movements.js";
import { preloadImages, toggleFullScreen } from "./helpers/utils.js";
import { boundaries, isColliding } from "./helpers/collision.js";

const movables = [backgroundSprite, ...boundaries];

/**
 * Main animation loop
 */
async function main() {
  backgroundSprite.draw();
  boundaries.forEach((boundary) => boundary.draw());
  playerSprite.draw();

  let canMove = true;
  const collisionMargin = 5;

  if (!!pressedKeys.w && lastKeyPressed == "w") {
    for (let index = 0; index < boundaries.length; index++) {
      const element = boundaries[index];
      if (
        isColliding(playerSprite, {
          ...element,
          position: {
            x: element.position.x,
            y: element.position.y + collisionMargin,
          },
        })
      ) {
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
          position: {
            x: element.position.x + collisionMargin,
            y: element.position.y,
          },
        })
      ) {
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
          position: {
            x: element.position.x,
            y: element.position.y - collisionMargin,
          },
        })
      ) {
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
          position: {
            x: element.position.x - collisionMargin,
            y: element.position.y,
          },
        })
      ) {
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
