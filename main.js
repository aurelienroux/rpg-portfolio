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
import {
  dialogBoxElement,
  dialogs,
  hiddenClass,
  setCanInteract,
  spaceBtn,
} from "./helpers/dialogs.js";

const movables = [
  backgroundSprite,
  foregroundSprite,
  ...boundaries,
  ...dialogs,
];

/**
 * Main animation loop
 */
async function main() {
  backgroundSprite.draw();
  playerSprite.draw();
  foregroundSprite.draw();

  dialogs.forEach((dialog) => dialog.draw());

  boundaries.forEach((boundary) => boundary.draw());
  let collisionCanMove = true;
  playerSprite.canMove = false;

  if (!!pressedKeys.w && lastKeyPressed == "w") {
    playerSprite.canMove = true;
    playerSprite.setDirection("up");

    // player collision
    for (let index = 0; index < boundaries.length; index++) {
      const boundary = boundaries[index];
      if (
        isColliding(playerSprite, {
          ...boundary,
          position: {
            x: boundary.position.x,
            y: boundary.position.y + collisionMargin,
          },
        })
      ) {
        collisionCanMove = false;
        break;
      }
    }

    // dialogs interaction
    for (let index = 0; index < dialogs.length; index++) {
      const dialog = dialogs[index];

      if (isColliding(playerSprite, dialog)) {
        spaceBtn.classList.remove(hiddenClass);
        setCanInteract(true);

        dialog.setDialogBoxText();
        dialog.clearChoices();
        if (dialog.choices?.length > 0) {
          dialog.createChoices();
        }
        break;
      } else {
        spaceBtn.classList.add(hiddenClass);
        dialogBoxElement.classList.add(hiddenClass);
        setCanInteract(false);
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

    // player collision
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

    // dialogs interaction
    for (let index = 0; index < dialogs.length; index++) {
      const dialog = dialogs[index];
      if (isColliding(playerSprite, dialog)) {
        spaceBtn.classList.remove(hiddenClass);
        setCanInteract(true);

        dialog.setDialogBoxText();
        dialog.clearChoices();
        if (dialog.choices?.length > 0) {
          dialog.createChoices();
        }
        break;
      } else {
        spaceBtn.classList.add(hiddenClass);
        dialogBoxElement.classList.add(hiddenClass);
        setCanInteract(false);
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

    // player collision
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

    // dialogs interaction
    for (let index = 0; index < dialogs.length; index++) {
      const dialog = dialogs[index];
      if (isColliding(playerSprite, dialog)) {
        spaceBtn.classList.remove(hiddenClass);
        setCanInteract(true);

        dialog.setDialogBoxText();
        dialog.clearChoices();
        if (dialog.choices?.length > 0) {
          dialog.createChoices();
        }
        break;
      } else {
        spaceBtn.classList.add(hiddenClass);
        dialogBoxElement.classList.add(hiddenClass);
        setCanInteract(false);
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

    // player collision
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

    // dialogs interaction
    for (let index = 0; index < dialogs.length; index++) {
      const dialog = dialogs[index];
      if (isColliding(playerSprite, dialog)) {
        spaceBtn.classList.remove(hiddenClass);
        setCanInteract(true);

        dialog.setDialogBoxText();
        dialog.clearChoices();
        if (dialog.choices?.length > 0) {
          dialog.createChoices();
        }
        break;
      } else {
        spaceBtn.classList.add(hiddenClass);
        dialogBoxElement.classList.add(hiddenClass);
        setCanInteract(false);
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
