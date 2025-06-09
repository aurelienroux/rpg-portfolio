import { activeDialogMode } from "./dialogs.js";

/**
 * @typedef {{up: boolean, left: boolean, down: boolean, right: boolean}} PressedKeys
 */
export let pressedKeys = { up: false, left: false, down: false, right: false };

export let lastKeyPressed = "";

window.addEventListener("keydown", (e) => {
  if (!activeDialogMode) {
    if (e.key === "ArrowUp") {
      pressedKeys.up = true;
      lastKeyPressed = "up";
    } else if (e.key === "ArrowLeft") {
      pressedKeys.left = true;
      lastKeyPressed = "left";
    } else if (e.key === "ArrowDown") {
      pressedKeys.down = true;
      lastKeyPressed = "down";
    } else if (e.key === "ArrowRight") {
      pressedKeys.right = true;
      lastKeyPressed = "right";
    }
  }
});

window.addEventListener("keyup", (e) => {
  pressedKeys.up = false;
  pressedKeys.left = false;
  pressedKeys.down = false;
  pressedKeys.right = false;
});
