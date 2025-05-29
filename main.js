import {
  backgroundSprite,
  foregroundSprite,
  playerSprite,
} from "./helpers/sprites.js";
import { lastKeyPressed, pressedKeys } from "./helpers/movements.js";
import { preloadImages, toggleFullScreen } from "./helpers/utils.js";
import {
  boundaries,
  collisionMargin,
  isColliding,
} from "./helpers/collision.js";
import { DialogBox } from "./helpers/classes.js";

const dialog = new DialogBox({
  position: {
    x: 500,
    y: 500,
  },
  size: {
    width: 48,
    height: 48,
  },
});

const movables = [backgroundSprite, ...boundaries, foregroundSprite, dialog];

/**
 * Main animation loop
 */
async function main() {
  backgroundSprite.draw();
  playerSprite.draw();
  foregroundSprite.draw();

  dialog.draw();

  boundaries.forEach((boundary) => boundary.draw());
  let collisionCanMove = true;
  playerSprite.canMove = false;

  if (!!pressedKeys.w && lastKeyPressed == "w") {
    playerSprite.canMove = true;
    playerSprite.setDirection("up");

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
        collisionCanMove = false;
        break;
      }
    }

    if (collisionCanMove) {
      movables.forEach(
        (movable) => (movable.position.y += backgroundSprite.velocity)
      );
    }
  } else if (!!pressedKeys.a && lastKeyPressed == "a") {
    playerSprite.canMove = true;
    playerSprite.setDirection("left");

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
        collisionCanMove = false;
        break;
      }
    }

    if (collisionCanMove) {
      movables.forEach(
        (movable) => (movable.position.x += backgroundSprite.velocity)
      );
    }
  } else if (!!pressedKeys.s && lastKeyPressed == "s") {
    playerSprite.canMove = true;
    playerSprite.setDirection("down");

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
        collisionCanMove = false;
        break;
      }
    }

    if (collisionCanMove) {
      movables.forEach(
        (movable) => (movable.position.y -= backgroundSprite.velocity)
      );
    }
  } else if (!!pressedKeys.d && lastKeyPressed == "d") {
    playerSprite.canMove = true;
    playerSprite.setDirection("right");

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
        collisionCanMove = false;
        break;
      }
    }

    if (collisionCanMove) {
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
