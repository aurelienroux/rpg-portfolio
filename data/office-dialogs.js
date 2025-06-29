import { DialogBox, DialogChoicesBox } from "../helpers/classes.js";
import { tileSizeInPixel } from "../helpers/collision.js";

const intro = new DialogBox({
  position: {
    x: 628,
    y: 500,
  },
  size: {
    width: tileSizeInPixel,
    height: tileSizeInPixel,
  },
  text: `
  <p>
    Hello! Welcome to my portfolio. My name is Aurelien Roux and I am a Front-end developer from France.
    I create sleek, user-centered digital experiences on the web.
  </p>
  <p>
    This portfolio is organized into four spaces: Office, Gym, Interests, and Projects.
    You can navigate between rooms using the arrow keys.
    On mobile, every blue dialog box is a clickable button.
  </p>
  <p>
    Interaction points are marked with a downward-moving arrow. When you reach one, press the <strong>SPACE</strong> key or click the bottom-right button to activate it.
    If a dialog offers choices (indicated by a pointing hand), use the <strong>UP</strong> and <strong>DOWN</strong> arrows to navigate, and press <strong>ENTER</strong> to select.
    To close a dialog, press or tap <strong>ESC</strong>.
  </p>
  <p>
    To view my CV directly, press <strong>O</strong> or click the button in the top-left corner.
    For help, press <strong>H</strong> or click the top-right button.
  </p>
  <p>
    Thank you for visiting, I hope you enjoy the experience!
  </p>
  `,
});

const diplomas = new DialogBox({
  position: {
    x: 820,
    y: -275,
  },
  size: {
    width: tileSizeInPixel,
    height: tileSizeInPixel,
  },
  text: `
  <p>
    My original background is in Business and Administration,
    having studied in both France and Canada.
  </p>
  <p>
    In 2012, I earned my MBA from HEC Montreal.
  </p>`,
});

const code = new DialogBox({
  position: {
    x: 918,
    y: -275,
  },
  size: {
    width: tileSizeInPixel,
    height: tileSizeInPixel,
  },
  text: `
   A self-taught developer, I further strengthened my skills in 2017 by completing DecodeMTL’s
   intensive 8 weeks full-stack JavaScript bootcamp.
  `,
});

const opquast = new DialogBox({
  position: {
    x: 1016,
    y: -275,
  },
  size: {
    width: tileSizeInPixel,
    height: tileSizeInPixel,
  },
  text: `
    In 2022, I earned the Opquast certification (Open quality standards)
    with a score of 910/1000, qualifying at the Expert level.`,
});

const agencies = new DialogChoicesBox({
  position: {
    x: 54,
    y: 30,
  },
  size: {
    width: tileSizeInPixel,
    height: tileSizeInPixel,
  },
  text: `
    I began my career as a front-end developer in 2017, working in digital agencies
    where I contributed to projects for a wide range of clients across France and Canada.
  `,
  choices: [
    {
      displayText: "Open CleverAge site",
      url: "https://www.clever-age.com/agences/north-america/",
    },
    {
      displayText: "Open Adfab site",
      url: "https://adfab.fr",
    },
  ],
});

const startups = new DialogChoicesBox({
  position: {
    x: 196,
    y: 545,
  },
  size: {
    width: tileSizeInPixel,
    height: tileSizeInPixel,
  },
  text: `
    After agencies, I shifted to startup environments in 2019, taking on front-end developer roles
    in companies ranging from pre-seed stage, to mature organizations with 500+ employees.
  `,
  choices: [
    {
      displayText: "Open Busbud",
      url: "https://www.busbud.com",
    },
    {
      displayText: "Open AcquireApp",
      url: "https://www.crunchbase.com/organization/acquire-app",
    },
    {
      displayText: "Open AerialAI",
      url: "https://aerial.ai",
    },
  ],
});

const volunteering = new DialogChoicesBox({
  position: {
    x: 875,
    y: 570,
  },

  size: {
    width: tileSizeInPixel,
    height: tileSizeInPixel,
  },
  text: `
    Since 2017, I have been developing and maintaining the website for FIKAS,
    a Nordic cultural festival held in Montreal.
  `,
  choices: [
    {
      displayText: "Open Fikasfest",
      url: "https://www.fikasfest.com",
    },
  ],
});

/** @type {(DialogBox|DialogChoicesBox)[]} */
export const office_dialogs = [
  intro,
  code,
  opquast,
  diplomas,
  agencies,
  startups,
  volunteering,
];
