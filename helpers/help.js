export const helpElement = document.getElementById("help");
export const helpExpandedClassName = "help--expanded";

// open help menu
window.addEventListener("keydown", (e) => {
  if (e.key === "h" || e.key === "H") {
    helpElement.classList.toggle(helpExpandedClassName);
  }
});
