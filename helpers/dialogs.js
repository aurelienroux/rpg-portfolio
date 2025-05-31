import { DialogBox } from "./classes.js";
import { tileSizeInPixel } from "./collision.js";

export const spaceBtn = document.getElementById("space-btn");
export const dialogBoxElement = document.getElementById("dialog-box");
export const dialogBoxTextElement = document.getElementById("dialog-box-text");

export const hiddenClass = "hidden";
let canInteract = false;
let currentDialog = "";

export function setCanInteract(value) {
  canInteract = value;
}

export function setCurrentDialog(value) {
  currentDialog = value;
}

window.addEventListener("keydown", (e) => {
  if (!!canInteract && e.key === " ") {
    dialogBoxTextElement.innerHTML = currentDialog;
    dialogBoxElement.classList.toggle(hiddenClass);
  }

  if (e.key === "Escape") {
    dialogBoxElement.classList.add(hiddenClass);
  }
});

export const dialog = new DialogBox({
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

export const dialogTwo = new DialogBox({
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

export const dialogs = [dialog, dialogTwo];
