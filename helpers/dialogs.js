export const spaceBtn = document.getElementById("space-btn");
export const dialogBoxElement = document.getElementById("dialog-box");
export const hiddenClass = "hidden";

let canInteract = false;
export function setCanInteract(value) {
  canInteract = value;
}

let activeDialog = null;
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

  if (e.key === "Escape") {
    dialogBoxElement.classList.add(hiddenClass);
    setActiveDialog(null);
  }
});
