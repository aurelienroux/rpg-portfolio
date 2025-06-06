import {
  backgroundSprite,
  foregroundSprite,
  playerSprite,
} from "./helpers/sprites.js";
import { lastKeyPressed, pressedKeys } from "./helpers/movements.js";
import { preloadImages } from "./helpers/utils.js";
import {
  boundaries,
  collisionMargin,
  isColliding,
} from "./helpers/collision.js";
import {
  dialogBoxElement,
  hiddenClass,
  setActiveDialog,
  setCanInteract,
  spaceBtn,
} from "./helpers/dialogs.js";
import { helpElement, helpExpandedClassName } from "./helpers/help.js";
import { dialogs } from "./data/dialogs.js";

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
  dialogs.forEach((dialog) => dialog.draw());
  playerSprite.draw();
  foregroundSprite.draw();

  boundaries.forEach((boundary) => boundary.draw());
  let collisionCanMove = true;
  playerSprite.canMove = false;

  // TODO: add js section for minimap
  if (!!pressedKeys.w && lastKeyPressed == "w") {
    playerSprite.canMove = true;
    playerSprite.setDirection("up");
    helpElement.classList.remove(helpExpandedClassName);

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
        setActiveDialog(dialog);

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
        setActiveDialog(null);
        if (dialog.choices?.length > 0) {
          dialog.resetSelectedChoiceIndex();
        }
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
    helpElement.classList.remove(helpExpandedClassName);

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
        setActiveDialog(dialog);

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
        setActiveDialog(null);
        if (dialog.choices?.length > 0) {
          dialog.resetSelectedChoiceIndex();
        }
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
    helpElement.classList.remove(helpExpandedClassName);

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
        setActiveDialog(dialog);

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
        setActiveDialog(null);
        if (dialog.choices?.length > 0) {
          dialog.resetSelectedChoiceIndex();
        }
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
    helpElement.classList.remove(helpExpandedClassName);

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
        setActiveDialog(dialog);

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
        setActiveDialog(null);
        if (dialog.choices?.length > 0) {
          dialog.resetSelectedChoiceIndex();
        }
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
