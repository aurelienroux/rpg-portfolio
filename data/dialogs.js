import { DialogBox, DialogChoicesBox } from "../helpers/classes.js";
import { tileSizeInPixel } from "../helpers/collision.js";

const dialog = new DialogBox({
  position: {
    x: 500,
    y: 500,
  },
  size: {
    width: tileSizeInPixel,
    height: tileSizeInPixel,
  },
  text: "first dialog box <a target='_blank' href='https://google.ca'> here</a>",
});

const dialogTwo = new DialogBox({
  position: {
    x: 650,
    y: 650,
  },
  size: {
    height: tileSizeInPixel,
    width: tileSizeInPixel,
  },
  text: "second dialog box",
});

const testChoices = new DialogChoicesBox({
  position: {
    x: 600,
    y: 800,
  },
  size: {
    width: tileSizeInPixel,
    height: tileSizeInPixel,
  },
  text: "this is le text",
  choices: [
    {
      displayText: "le text a display",
      url: "https://www.stars-music.fr/",
    },
    {
      displayText: "le text a display 2",
      url: "https://github.com",
    },
    {
      displayText: "le text a display 3",
      url: "https://google.ca",
    },
  ],
});

/** @type {(DialogBox|DialogChoicesBox)[]} */
export const dialogs = [dialog, dialogTwo, testChoices];
