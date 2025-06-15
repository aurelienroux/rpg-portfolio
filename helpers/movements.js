import { activeDialogMode } from "./dialogs.js";

/**
 * @typedef {{up: boolean, left: boolean, down: boolean, right: boolean}} PressedKeys
 */
export let pressedKeys = { up: false, left: false, down: false, right: false };
export let lastKeyPressed = "";

// mobile inputs
const arrowUpInput = document.getElementById("input-arrow-up");
const arrowDownInput = document.getElementById("input-arrow-down");
const arrowLeftInput = document.getElementById("input-arrow-left");
const arrowRightInput = document.getElementById("input-arrow-right");

arrowUpInput.addEventListener("mousedown", () => {
  pressedKeys.up = true;
  lastKeyPressed = "up";
});

arrowDownInput.addEventListener("mousedown", () => {
  pressedKeys.down = true;
  lastKeyPressed = "down";
});

arrowLeftInput.addEventListener("mousedown", () => {
  pressedKeys.left = true;
  lastKeyPressed = "left";
});

arrowRightInput.addEventListener("mousedown", () => {
  pressedKeys.right = true;
  lastKeyPressed = "right";
});

const mobileInputs = [
  arrowUpInput,
  arrowLeftInput,
  arrowRightInput,
  arrowDownInput,
];
mobileInputs.forEach((input) => {
  input.addEventListener("mouseup", () => {
    pressedKeys.up = false;
    pressedKeys.left = false;
    pressedKeys.down = false;
    pressedKeys.right = false;
  });
});

// keyboard inputs
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
