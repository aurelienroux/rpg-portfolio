import { Sprite } from "./classes.js";

const originalBackgroundWidth = 3072;
const originalBackgroundHeight = 2304;
const canvasWidth = 1400;
const canvasHeight = 900;

const playerHeight = 96;
export const playerWidth = 48;
const animationSprite = 5; // 6 images spritesheet minus 1 width
export const fullAnimationCycle = animationSprite * playerWidth;
export const animationThreshold = 1000;

const animationIdleDown = {
  sx: 864,
  sy: 96,
};

export const animationWalkUp = {
  sx: 288,
  sy: 192,
};

export const animationWalkLeft = {
  sx: 576,
  sy: 192,
};

export const animationWalkDown = {
  sx: 864,
  sy: 192,
};

export const animationWalkRight = {
  sx: 0,
  sy: 192,
};

// starts in the middle of the office
export const startingOffset = {
  x: -331,
  y: -412,
};

export const backgroudImg = new Image();
export const playerImg = new Image();
backgroudImg.src = "./images/background.png";
playerImg.src = "./images/player.png";

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

export const playerSprite = new Sprite({
  image: playerImg,
  position: {
    x: canvasWidth / 2 - playerWidth / 2,
    y: canvasHeight / 2 - playerHeight / 2,
  },
  crop: {
    // player starts looking down
    sx: animationWalkDown.sx, // x advance by multiple of 48
    sy: animationWalkDown.sy, // y advance by multiple of 96
    // sx: 864, // x advance by multiple of 48
    // sy: 192, // y advance by multiple of 96
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
