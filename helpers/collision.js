import { collisions } from "../data/collision.js";
import { Boundary } from "./classes.js";
import { startingOffset } from "./sprites.js";

const tiledCollisionSymbol = 14429; // Tiled map collision code
const tiledMapWidth = 64; // Tiled map width in square

export const tileSizeInPixel = 48; // map is exported on x3 ratio (16px * 3)
export const collisionMargin = 5; // safe space to avoid overlapping collisions
export const collisionsMap = [];
export const boundaries = [];

// map collisions data based on Tiled export map width
for (let i = 0; i < collisions.length; i += tiledMapWidth) {
  collisionsMap.push(collisions.slice(i, tiledMapWidth + i));
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
 * @param {Object} spriteOne
 * @param {Object} spriteOne.position
 * @param {number} spriteOne.position.x
 * @param {number} spriteOne.position.y
 * @param {Object} spriteOne.size
 * @param {number} spriteOne.size.width
 * @param {number} spriteOne.size.height
 * @param {Object} spriteTwo
 * @param {Object} spriteTwo.position
 * @param {number} spriteTwo.position.x
 * @param {number} spriteTwo.position.y
 * @param {Object} spriteTwo.size
 * @param {number} spriteTwo.size.width
 * @param {number} spriteTwo.size.height
 * @returns {boolean}
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
