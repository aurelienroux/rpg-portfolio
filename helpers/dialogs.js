import { DialogBox } from "./classes.js";

export const spaceBtn = document.getElementById("space-btn");
export const dialogBoxElement = document.getElementById("dialog-box");

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
    dialogBoxElement.innerHTML = currentDialog;
    dialogBoxElement.classList.toggle(hiddenClass);
  }
});

export const dialog = new DialogBox({
  position: {
    x: 500,
    y: 500,
  },
  size: {
    width: 48,
    height: 48,
  },
  text: "first dialog box",
});

export const dialogTwo = new DialogBox({
  position: {
    x: 650,
    y: 650,
  },
  size: {
    height: 48,
    width: 48,
  },
  text: "second dialog box",
});

export const dialogs = [dialog, dialogTwo];
