import { DialogBox, DialogChoicesBox } from "./classes.js";
import { tileSizeInPixel } from "./collision.js";

export const spaceBtn = document.getElementById("space-btn");
export const dialogBoxElement = document.getElementById("dialog-box");
export const hiddenClass = "hidden";

let canInteract = false;
let activeDialog = null;

export function setCanInteract(value) {
  canInteract = value;
}

export function setActiveDialog(dialog) {
  activeDialog = dialog;
}

window.addEventListener("keydown", (e) => {
  if (!!canInteract && e.key === " ") {
    dialogBoxElement.classList.toggle(hiddenClass);
  }

  if (activeDialog && activeDialog.choices) {
    if (e.key === "ArrowUp") {
      activeDialog.selectNext();
    } else if (e.key === "ArrowDown") {
      activeDialog.selectPrevious();
    } else if (e.key === "Enter") {
      window.open(activeDialog.selectedChoice.url, "_blank");
    }
  }

  // Example: log current choices
  if (activeDialog && activeDialog.choices) {
    console.log("here", activeDialog.choices[activeDialog.selectedChoiceIndex]);
  }

  if (e.key === "Escape") {
    dialogBoxElement.classList.add(hiddenClass);
    setActiveDialog(null);
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
