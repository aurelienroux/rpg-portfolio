/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

export const villageImg = new Image();
villageImg.src = "./images/village.png";
export const bearImg = new Image();
bearImg.src = "./images/bear.png";

export class Sprite {
  /**
   * @param {Object} options
   * @param {HTMLImageElement} options.image
   * @param {Object} options.position
   * @param {number} options.position.x
   * @param {number} options.position.y
   * @param {Object} options.size
   * @param {number} options.size.width
   * @param {number} options.size.height
   * @param {number} velocity
   */
  constructor({ image, position, size, velocity = 1 }) {
    this.image = image;
    this.position = position;
    this.size = size;
    this.velocity = velocity;
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.height,
      this.size.width
    );
  }
}

export const backgroundSprite = new Sprite({
  image: villageImg,
  position: {
    x: -175,
    y: -400,
  },
  size: {
    width: 1600,
    height: 1600,
  },
  velocity: 4,
});

export const bearSprite = new Sprite({
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

export function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
