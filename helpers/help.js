export const helpElement = document.getElementById("help");
export const helpExpandedClassName = "help--expanded";

const helpInput = document.getElementById("input-help");
const helpInputList = document.getElementById("input-help-list");

// mobile: open help menu
helpInput.addEventListener("click", () => {
  helpElement.classList.toggle(helpExpandedClassName);
});

helpInputList.addEventListener("click", () => {
  helpElement.classList.toggle(helpExpandedClassName);
});

// desktop: open help menu
window.addEventListener("keydown", (e) => {
  if (e.key === "h" || e.key === "H") {
    helpElement.classList.toggle(helpExpandedClassName);
  }
});
