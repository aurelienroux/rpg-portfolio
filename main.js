import { Sprite, toggleFullScreen } from "./helpers.js";

const villageImg = new Image();
villageImg.src = "village.png";
const bearImg = new Image();
bearImg.src = "bear.png";

/**
 * @param {HTMLImageElement} image
 * @returns {Promise<void>}
 */
function loadImage(image) {
  return new Promise((res) => {
    image.addEventListener("load", res);
  });
}

const backgroundSprite = new Sprite({
  image: villageImg,
  position: {
    x: -175,
    y: -400,
  },
  size: {
    width: 1600,
    height: 1600,
  },
});

const bearSprite = new Sprite({
  image: bearImg,
  position: {
    x: 1024 / 2 - 50,
    y: 761 / 2 - 50,
  },
  size: {
    width: 100,
    height: 100,
  },
});

let pressedKeys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

/** @type {string} */
let lastKeyPressed = "";

/**
 * Make sure img assets are loaded
 */
async function preload() {
  await Promise.all([loadImage(villageImg), loadImage(bearImg)]);
}

/**
 * Main animation loop
 */
async function main() {
  backgroundSprite.draw();
  bearSprite.draw();

  if (!!pressedKeys.w && lastKeyPressed == "w") {
    backgroundSprite.position.y += 3;
  } else if (!!pressedKeys.a && lastKeyPressed == "a") {
    backgroundSprite.position.x += 3;
  } else if (!!pressedKeys.s && lastKeyPressed == "s") {
    backgroundSprite.position.y -= 3;
  } else if (!!pressedKeys.d && lastKeyPressed == "d") {
    backgroundSprite.position.x -= 3;
  }

  requestAnimationFrame(main);
}

preload().then(main);

window.addEventListener("keydown", (e) => {
  if (e.key === "w") {
    pressedKeys.w = true;
    lastKeyPressed = "w";
  } else if (e.key === "a") {
    pressedKeys.a = true;
    lastKeyPressed = "a";
  } else if (e.key === "s") {
    pressedKeys.s = true;
    lastKeyPressed = "s";
  } else if (e.key === "d") {
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

document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
  },
  false
);
