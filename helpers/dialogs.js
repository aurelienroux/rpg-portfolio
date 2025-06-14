export const spaceBtn = document.getElementById("interaction--btn");
export const dialogBoxElement = document.getElementById("dialog-box");
export const hiddenClass = "hidden";

// when player collides with a collision box
let canOpenDialog = false;
export function setCanOpenDialog(value) {
  canOpenDialog = value;
}

// preload UI dialog before displaying it
let preloadedDialog = null;
export function preloadDialog(dialog) {
  preloadedDialog = dialog;
}

// dispatchs arrows keypress to player or dialog box depending on mode
export let activeDialogMode = false;

window.addEventListener("keydown", (e) => {
  if (!!canOpenDialog && e.key === " ") {
    dialogBoxElement.classList.toggle(hiddenClass);
    activeDialogMode = !activeDialogMode;
  }

  if (!!activeDialogMode && preloadedDialog && preloadedDialog.choices) {
    if (e.key === "ArrowUp") {
      preloadedDialog.selectNext();
    } else if (e.key === "ArrowDown") {
      preloadedDialog.selectPrevious();
    } else if (e.key === "Enter") {
      window.open(preloadedDialog.selectedChoice.url, "_blank");
    }
  }

  if (e.key === "Escape") {
    dialogBoxElement.classList.add(hiddenClass);
    preloadDialog(null);
    activeDialogMode = false;
  }
});
