import { DialogBox, DialogChoicesBox } from "./classes.js";
import { tileSizeInPixel } from "./collision.js";

export const spaceBtn = document.getElementById("space-btn");
export const dialogBoxElement = document.getElementById("dialog-box");
export const dialogBoxTextElement = document.getElementById("dialog-box-text");
export const hiddenClass = "hidden";

let canInteract = false;
export function setCanInteract(value) {
  canInteract = value;
}

window.addEventListener("keydown", (e) => {
  if (!!canInteract && e.key === " ") {
    dialogBoxElement.classList.toggle(hiddenClass);
  }

  if (e.key === "Escape") {
    dialogBoxElement.classList.add(hiddenClass);
  }
});

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
      url: "https://google.com",
    },
    {
      displayText: "le text a display 2",
      url: "https://google.ca",
    },
    {
      displayText: "le text a display 3",
      url: "https://google.ca",
    },
  ],
});

/** @type {(DialogBox|DialogChoicesBox)[]} */
export const dialogs = [dialog, dialogTwo, testChoices];
