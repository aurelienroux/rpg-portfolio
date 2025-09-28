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
  preloadDialog,
  setCanOpenDialog,
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
  // NOTE: elements order indicates z-index on canvas
  backgroundSprite.draw();
  dialogs.forEach((dialog) => dialog.draw());
  playerSprite.draw();
  foregroundSprite.draw();

  boundaries.forEach((boundary) => boundary.draw());
  let collisionCanMove = true;
  playerSprite.canMove = false;

  if (!!pressedKeys.up && lastKeyPressed == "up") {
    //#region direction up
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
        setCanOpenDialog(true);
        preloadDialog(dialog);

        dialog.setDialogBoxText();
        dialog.clearChoices();
        if (dialog.choices?.length > 0) {
          dialog.createChoices();
        }
        break;
      } else {
        spaceBtn.classList.add(hiddenClass);
        dialogBoxElement.classList.add(hiddenClass);
        setCanOpenDialog(false);
        preloadDialog(null);
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
    //#endregion
  } else if (!!pressedKeys.left && lastKeyPressed == "left") {
    //#region direction left
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
        setCanOpenDialog(true);
        preloadDialog(dialog);

        dialog.setDialogBoxText();
        dialog.clearChoices();
        if (dialog.choices?.length > 0) {
          dialog.createChoices();
        }
        break;
      } else {
        spaceBtn.classList.add(hiddenClass);
        dialogBoxElement.classList.add(hiddenClass);
        setCanOpenDialog(false);
        preloadDialog(null);
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
    //#endregion
  } else if (!!pressedKeys.down && lastKeyPressed == "down") {
    //#region direction down
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
        setCanOpenDialog(true);
        preloadDialog(dialog);

        dialog.setDialogBoxText();
        dialog.clearChoices();
        if (dialog.choices?.length > 0) {
          dialog.createChoices();
        }
        break;
      } else {
        spaceBtn.classList.add(hiddenClass);
        dialogBoxElement.classList.add(hiddenClass);
        setCanOpenDialog(false);
        preloadDialog(null);
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
    //#endregion
  } else if (!!pressedKeys.right && lastKeyPressed == "right") {
    //#region direction right
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
        setCanOpenDialog(true);
        preloadDialog(dialog);

        dialog.setDialogBoxText();
        dialog.clearChoices();
        if (dialog.choices?.length > 0) {
          dialog.createChoices();
        }
        break;
      } else {
        spaceBtn.classList.add(hiddenClass);
        dialogBoxElement.classList.add(hiddenClass);
        setCanOpenDialog(false);
        preloadDialog(null);
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
    //#endregion
  }

  requestAnimationFrame(main);
}

/**
 * App launch
 */
preloadImages().then(main);
