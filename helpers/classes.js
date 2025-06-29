import {
  animationThreshold,
  animationWalkDown,
  animationWalkLeft,
  animationWalkRight,
  animationWalkUp,
  fullAnimationCycle,
} from "./animation.js";
import { playerWidth, uiImage } from "./sprites.js";
import { updateSelectedChoiceUI } from "./utils.js";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

export const dialogBoxChoices = document.getElementById("dialog-box--choices");

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
   * @param {boolean} canMove
   * @param {number} animationCounter
   */
  constructor({
    image,
    position,
    size,
    crop,
    velocity = 1,
    canMove = false,
    animationCounter = 0,
    direction,
  }) {
    this.image = image;
    this.position = position;
    this.size = size;
    this.crop = crop;
    this.velocity = velocity;
    this.canMove = canMove;
    this.animationCounter = animationCounter;
    this.direction = direction;
    this.baseCrop = { sx: crop.sx, sy: crop.sy };
  }

  setDirection(direction) {
    if (this.direction !== direction) {
      this.direction = direction;

      // Update baseCrop based on the direction to run correct spritesheet animation
      switch (direction) {
        case "up":
          this.baseCrop = { sx: animationWalkUp.sx, sy: animationWalkUp.sy };
          break;
        case "down":
          this.baseCrop = {
            sx: animationWalkDown.sx,
            sy: animationWalkDown.sy,
          };
          break;
        case "left":
          this.baseCrop = {
            sx: animationWalkLeft.sx,
            sy: animationWalkLeft.sy,
          };
          break;
        case "right":
          this.baseCrop = {
            sx: animationWalkRight.sx,
            sy: animationWalkRight.sy,
          };
          break;
      }

      // Reset crop.sx to the base value for the new direction
      this.crop.sx = this.baseCrop.sx;
      this.crop.sy = this.baseCrop.sy;
    }
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

    if (!this.canMove) {
      return;
    }

    this.animationCounter++;

    if (this.animationCounter % animationThreshold === 0) {
      if (this.crop.sx < this.baseCrop.sx + fullAnimationCycle) {
        this.crop.sx += playerWidth;
      } else {
        this.crop.sx = this.baseCrop.sx; // Reset to the first frame of the current direction
      }
    }
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
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
}

export class DialogBox {
  /**
   * @param {Object} options
   * @param {HTMLImageElement} options.image
   * @param {Object} options.position
   * @param {number} options.position.x
   * @param {number} options.position.y
   * @param {Object} options.size
   * @param {number} options.size.width
   * @param {number} options.size.height
   * @param {string} options.text
   * @param {Array<choice>} options.choices
   */

  // ui spritesheet down arrow animation coordinates
  #crop = {
    sx: 384,
    sy: 528,
    sWidth: 48,
    sHeight: 48,
  };

  constructor({ image, position, size, text, animationCounter = 0 }) {
    this.image = image;
    this.position = position;
    this.size = size;
    this.text = text;
    this.animationCounter = animationCounter;
    this.baseCrop = { sx: this.#crop.sx, sy: this.#crop.sy };
  }

  setDialogBoxText() {
    const dialogBoxTextElement = document.getElementById("dialog-box--text");
    dialogBoxTextElement.innerHTML = this.text;
  }

  clearChoices() {
    dialogBoxChoices.innerHTML = "";
  }

  draw() {
    ctx.drawImage(
      uiImage,
      this.#crop.sx, // sprite top x left corner
      this.#crop.sy, // sprite top y left corner
      this.#crop.sWidth, // sprite width
      this.#crop.sHeight, // sprite height
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );

    this.animationCounter++;

    if (this.animationCounter % animationThreshold === 0) {
      if (this.#crop.sx < this.baseCrop.sx + fullAnimationCycle) {
        this.#crop.sx += playerWidth;
      } else {
        this.#crop.sx = this.baseCrop.sx; // Reset to the first frame of the current direction
      }
    }
  }
}

/**
 * @typedef {Object} choice
 * @property {string} displayText
 * @property {string} url
 */

export class DialogChoicesBox extends DialogBox {
  /**
   * @param {Object} options
   * @param {Array<choice>} options.choices
   */
  constructor({ position, size, text, choices }) {
    super({ position, size, text });
    this.choices = choices || [];
    this.selectedChoiceIndex = 0;
  }

  createChoices() {
    this.choices.forEach((choice, index) => {
      const listElement = document.createElement("li");
      const linkElement = document.createElement("a");

      linkElement.textContent = choice.displayText;
      linkElement.href = choice.url;
      linkElement.target = "_blank";

      if (index === 0) {
        listElement.dataset.selected = true;
      }

      listElement.appendChild(linkElement);
      dialogBoxChoices.appendChild(listElement);
    });
  }

  get selectedChoice() {
    return this.choices[this.selectedChoiceIndex];
  }

  resetSelectedChoiceIndex() {
    this.selectedChoiceIndex = 0;
  }

  selectPrevious() {
    if (this.choices.length > 0) {
      this.selectedChoiceIndex =
        (this.selectedChoiceIndex + 1) % this.choices.length;

      updateSelectedChoiceUI(this.selectedChoiceIndex);
    }
  }

  selectNext() {
    if (this.choices.length > 0) {
      this.selectedChoiceIndex =
        (this.selectedChoiceIndex - 1 + this.choices.length) %
        this.choices.length;

      updateSelectedChoiceUI(this.selectedChoiceIndex);
    }
  }
}
