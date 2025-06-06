/**
 * @typedef {{w: boolean, a: boolean, s: boolean, d: boolean}} PressedKeys
 */
export let pressedKeys = { w: false, a: false, s: false, d: false };

export let lastKeyPressed = "";

window.addEventListener("keydown", (e) => {
  if (e.key === "w" || e.key === "W") {
    pressedKeys.w = true;
    lastKeyPressed = "w";
  } else if (e.key === "a" || e.key === "A") {
    pressedKeys.a = true;
    lastKeyPressed = "a";
  } else if (e.key === "s" || e.key === "S") {
    pressedKeys.s = true;
    lastKeyPressed = "s";
  } else if (e.key === "d" || e.key === "D") {
    pressedKeys.d = true;
    lastKeyPressed = "d";
  }
});

window.addEventListener("keyup", (e) => {
  pressedKeys.w = false;
  pressedKeys.a = false;
  pressedKeys.s = false;
  pressedKeys.d = false;
});
