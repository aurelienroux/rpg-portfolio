/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const village = new Image();
village.src = "village.png";

const bear = new Image();
bear.src = "bear.png";

/**
 * @param {HTMLImageElement} image
 * @returns {Promise<void>}
 */
function loadImage(image) {
  return new Promise((res) => {
    image.addEventListener("load", res);
  });
}

Promise.all([loadImage(village), loadImage(bear)]).then(() => {
  ctx.drawImage(village, -175, -400, 1600, 1600);
  ctx.drawImage(bear, 1024 / 2 - 50, 761 / 2 - 50, 100, 100);
});

window.addEventListener("keydown", (e) => {
  console.log(e);
});
