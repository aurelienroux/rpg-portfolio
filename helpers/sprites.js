import { animationWalkDown } from "./animation.js";
import { Sprite } from "./classes.js";

const originalBackgroundWidth = 3072;
const originalBackgroundHeight = 2304;
const canvasWidth = 1400;
const canvasHeight = 900;

const playerHeight = 96;
export const playerWidth = 48;

export const backgroudImg = new Image();
export const foregroundImg = new Image();
export const playerImg = new Image();
backgroudImg.src = "./images/background.png";
foregroundImg.src = "./images/foreground.png";
playerImg.src = "./images/player.png";

// starts in the middle of the office
export const startingOffset = {
  x: -331,
  y: -412,
};

export const backgroundSprite = new Sprite({
  image: backgroudImg,
  crop: {
    sx: 0,
    sy: 0,
    sWidth: originalBackgroundWidth,
    sHeight: originalBackgroundHeight,
  },
  position: {
    x: startingOffset.x,
    y: startingOffset.y,
  },
  size: {
    width: originalBackgroundWidth,
    height: originalBackgroundHeight,
  },
  velocity: 6,
});

export const foregroundSprite = new Sprite({
  image: foregroundImg,
  crop: {
    sx: 0,
    sy: 0,
    sWidth: originalBackgroundWidth,
    sHeight: originalBackgroundHeight,
  },
  position: {
    x: startingOffset.x,
    y: startingOffset.y,
  },
  size: {
    width: originalBackgroundWidth,
    height: originalBackgroundHeight,
  },
  velocity: 6,
});

export const playerSprite = new Sprite({
  image: playerImg,
  position: {
    x: canvasWidth / 2 - playerWidth / 2,
    y: canvasHeight / 2 - playerHeight / 2,
  },
  crop: {
    sx: animationWalkDown.sx,
    sy: animationWalkDown.sy,
    sWidth: playerWidth,
    sHeight: playerHeight,
  },
  size: {
    width: playerWidth,
    height: playerHeight,
  },
  canMove: false,
  direction: "down",
});
