import { collisions } from "../data/collision.js";

export const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 64) {
  collisionsMap.push(collisions.slice(i, 64 + i));
}
