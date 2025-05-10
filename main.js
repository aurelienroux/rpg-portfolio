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

  requestAnimationFrame(main);
}

preload().then(main);

window.addEventListener("keydown", (e) => {
  console.log(e);
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
