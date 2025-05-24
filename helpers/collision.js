import { collisions } from "../data/collision.js";
import { Boundary } from "./classes.js";
import { startingOffset } from "./sprites.js";

const tileSizeInPixel = 48; // map is exported on x3 ratio
const tiledCollisionSymbol = 14429;
const tiledWidth = 64;

export const collisionMargin = 5;
export const collisionsMap = [];
export const boundaries = [];

for (let i = 0; i < collisions.length; i += tiledWidth) {
  collisionsMap.push(collisions.slice(i, tiledWidth + i));
}

// fill up the boundaries map with respective sizes
collisionsMap.map((row, i) => {
  return row.map((collision, j) => {
    if (collision === tiledCollisionSymbol) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * tileSizeInPixel + startingOffset.x,
            y: i * tileSizeInPixel + startingOffset.y,
          },
          size: {
            width: tileSizeInPixel,
            height: tileSizeInPixel,
          },
        })
      );
    }
  });
});

/**
 * Checks if two sprites are colliding based on their positions and sizes.
 *
 * @param {Object} spriteOne - The first sprite object.
 * @param {Object} spriteOne.position - The position of the first sprite.
 * @param {number} spriteOne.position.x - The x-coordinate of the first sprite.
 * @param {number} spriteOne.position.y - The y-coordinate of the first sprite.
 * @param {Object} spriteOne.size - The size of the first sprite.
 * @param {number} spriteOne.size.width - The width of the first sprite.
 * @param {number} spriteOne.size.height - The height of the first sprite.
 * @param {Object} spriteTwo - The second sprite object.
 * @param {Object} spriteTwo.position - The position of the second sprite.
 * @param {number} spriteTwo.position.x - The x-coordinate of the second sprite.
 * @param {number} spriteTwo.position.y - The y-coordinate of the second sprite.
 * @param {Object} spriteTwo.size - The size of the second sprite.
 * @param {number} spriteTwo.size.width - The width of the second sprite.
 * @param {number} spriteTwo.size.height - The height of the second sprite.
 * @returns {boolean} True if the two sprites are colliding, otherwise false.
 *
 */
export function isColliding(spriteOne, spriteTwo) {
  return (
    spriteOne.position.x + spriteOne.size.width >= spriteTwo.position.x &&
    spriteOne.position.x <= spriteTwo.position.x + spriteTwo.size.width &&
    // the player sprite is 2 tiles in height so need to add 1 full tile height for collision detection
    spriteOne.position.y + tileSizeInPixel <=
      spriteTwo.position.y + spriteTwo.size.height &&
    spriteOne.position.y + spriteOne.size.height >= spriteTwo.position.y
  );
}
