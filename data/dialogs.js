import { DialogBox, DialogChoicesBox } from "../helpers/classes.js";
import { office_dialogs } from "./office-dialogs.js";

// const dialog = new DialogBox({
//   position: {
//     x: 198,
//     y: 290,
//   },
//   size: {
//     width: tileSizeInPixel,
//     height: tileSizeInPixel,
//   },
//   text: "Aurelien Roux | Software developer",
// });

// const dialogTwo = new DialogBox({
//   position: {
//     x: 650,
//     y: 650,
//   },
//   size: {
//     height: tileSizeInPixel,
//     width: tileSizeInPixel,
//   },
//   text: "second dialog box",
// });

// const testChoices = new DialogChoicesBox({
//   position: {
//     x: 600,
//     y: 800,
//   },
//   size: {
//     width: tileSizeInPixel,
//     height: tileSizeInPixel,
//   },
//   text: "this is le text",
//   choices: [
//     {
//       displayText: "le text a display",
//       url: "https://www.stars-music.fr/",
//     },
//     {
//       displayText: "le text a display 2",
//       url: "https://github.com",
//     },
//     {
//       displayText: "le text a display 3",
//       url: "https://google.ca",
//     },
//   ],
// });

/** @type {(DialogBox|DialogChoicesBox)[]} */
export const dialogs = [
  // dialog, dialogTwo, testChoices,
  ...office_dialogs,
];
