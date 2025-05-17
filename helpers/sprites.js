/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

export const backgroudImg = new Image();
backgroudImg.src = "./images/background.png";
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
      this.size.width,
      this.size.height
    );
  }
}

class Boundary {
  /**
   * @param { Object } options
   * @param { Object } options.position
   * @param {number} options.position.x
   * @param {number} options.position.y
   * @param {Object} options.size
   * @param {number} options.size.width
   * @param {number} options.size.height
   */
  constructor({ position, size }) {
    this.position = position;
    this.size = size;
  }

  draw() {
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
}
const tileSizeInPixel = 48;

export const boundary = new Boundary({
  position: {
    x: 600,
    y: 600,
  },
  size: {
    width: tileSizeInPixel,
    height: tileSizeInPixel,
  },
});

export const boundaryTwo = new Boundary({
  position: {
    x: 400,
    y: 400,
  },
  size: {
    width: 48,
    height: 48,
  },
});

const originalBackgroundWidth = 3072;
const originalBackgroundHeight = 2304;
const canvasWidth = 1400;
const canvasHeight = 900;

export const backgroundSprite = new Sprite({
  image: backgroudImg,
  position: {
    x: -600,
    y: -600,
  },
  size: {
    width: originalBackgroundWidth,
    height: originalBackgroundHeight,
  },
  velocity: 6,
});

export const bearSprite = new Sprite({
  image: bearImg,
  position: {
    x: canvasWidth / 2 - 50,
    y: canvasHeight / 2 - 50,
  },
  size: {
    width: 48,
    height: 48,
  },
});

export function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
