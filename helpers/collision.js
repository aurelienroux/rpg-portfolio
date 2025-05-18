import { collisions } from "../data/collision.js";
import { Boundary } from "./classes.js";
import { startingOffset } from "./sprites.js";

const tileSizeInPixel = 48; // map is exported on x3 ratio
const tiledCollisionSymbol = 14429;

export const collisionsMap = [];
export const boundaries = [];

for (let i = 0; i < collisions.length; i += 64) {
  collisionsMap.push(collisions.slice(i, 64 + i));
}

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
