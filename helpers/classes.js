/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

export class Sprite {
  /**
   * @param {Object} options
   * @param {HTMLImageElement} options.image
   * @param {Object} options.position
   * @param {number} options.position.x
   * @param {number} options.position.y
   * @param {Object} options.crop
   * @param {number} options.crop.sx
   * @param {number} options.crop.sy
   * @param {number} options.crop.sWidth
   * @param {number} options.crop.sHeight
   * @param {Object} options.size
   * @param {number} options.size.width
   * @param {number} options.size.height
   * @param {number} velocity
   */
  constructor({ image, position, size, crop, velocity = 1 }) {
    this.image = image;
    this.position = position;
    this.size = size;
    this.crop = crop;
    this.velocity = velocity;
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.crop.sx, // sprite top x left corner
      this.crop.sy, // sprite top y left corner
      this.crop.sWidth, // sprite width
      this.crop.sHeight, // sprite height
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
}

export class Boundary {
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
