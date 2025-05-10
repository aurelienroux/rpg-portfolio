/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

export const villageImg = new Image();
villageImg.src = "./images/village.png";
export const bearImg = new Image();
bearImg.src = "./images/bear.png";

export class Sprite {
  /**
   * Creates a new Sprite instance.
   * @param {Object} options - The options for the sprite.
   * @param {HTMLImageElement} options.image - The image to be used for the sprite.
   * @param {Object} options.position - The position of the sprite on the canvas.
   * @param {number} options.position.x - The x-coordinate of the sprite.
   * @param {number} options.position.y - The y-coordinate of the sprite.
   * @param {Object} options.size - The size of the sprite.
   * @param {number} options.size.width - The width of the sprite.
   * @param {number} options.size.height - The height of the sprite.
   */
  constructor({ image, position, size }) {
    this.image = image;
    this.position = position;
    this.size = size;
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

export function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
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
