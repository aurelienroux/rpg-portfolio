import { Boundary, Sprite } from "./classes.js";

const originalBackgroundWidth = 3072;
const originalBackgroundHeight = 2304;
const canvasWidth = 1400;
const canvasHeight = 900;

const playerWidth = 48;
const playerHeight = 96;

const tileSizeInPixel = 48; // map is exported on x3 ratio

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
    // starts in the middle of the office
    x: -331,
    y: -412,
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
    sx: 144, // x advance by multiple of 48
    sy: 0, // y advance by multiple of 96
    sWidth: playerWidth,
    sHeight: playerHeight,
  },
  size: {
    width: playerWidth,
    height: playerHeight,
  },
});

export const boundary = new Boundary({
  position: {
    x: 580,
    y: 595,
  },
  size: {
    width: tileSizeInPixel,
    height: tileSizeInPixel,
  },
});

export const boundaryTwo = new Boundary({
  position: {
    x: 580,
    y: 400,
  },
  size: {
    width: 48,
    height: 48,
  },
});
