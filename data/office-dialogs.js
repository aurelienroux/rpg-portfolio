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
  text: `<p>Welcome! My name is Aurelien Roux and I am a software developer.</p>
    <p>Move around with ARROWS or click on the arrows button on mobile.</p>
    <p>Interaction points <img src="../images/down-arrow.png" /> can be opened and closed with SPACE key. To close a dialog, press ESC.</p>
    <p>If a dialog has choices <img src="../images/select-hand.png" />, use UP and DOWN arrows to select and ENTER to confirm.</p>
    <p>You can press O to see my CV directly. And press H For help.</p>
    <p>Thank you for visiting, I hope you enjoy it!</p>`,
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
  text: `<p>My background is in Business and Administration, with studies in France and Canada, and an MBA from HEC Montréal (2012).</p>
    <p>This foundation gives me more than just coding skills. I build products with a strong understanding of
    business strategy, user needs, and product vision.</p>`,
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
  text: `<p>In 2017, I made the leap into web development as a front-end developer, completing Montreal’s DecodeMTL
    full-stack JavaScript bootcamp and building on my self-taught foundation.</p>`,
});

const opquast = new DialogChoicesBox({
  position: {
    x: 1016,
    y: -275,
  },
  size: {
    width: tileSizeInPixel,
    height: tileSizeInPixel,
  },
  text: `<p>In 2022, I earned the Opquast certification (Open Quality Standards) with a score of 910/1000, qualifying at the Expert level.</p>
    <p>Opquast is an internationally recognized standard for web quality and accessibility, covering best practices across performance, security, SEO, accessibility, and user experience.</p>`,
  choices: [
    {
      displayText: "Open Opquast",
      url: "https://www.opquast.com/en/",
    },
  ],
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
  text: `<p>I started as a front-end developer in 2017 in digital agencies where I collaborated on diverse projects
    for clients across France and Canada.</p>
    <p>These experiences exposed me to diverse industries and challenges, strengthening my adaptability, teamwork,
    and ability to deliver effective digital solutions.</p>`,
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
  text: `<p>In 2019, I moved from agencies to startups, working at companies ranging from early-stage ventures to 500+ employees.</p>
    <p>This shift let me experience the full spectrum of product development, from building MVPs in lean teams
    to contributing to scalable solutions in larger organizations.</p>`,

  choices: [
    {
      displayText: "Open AerialAI",
      url: "https://aerial.ai",
    },
    {
      displayText: "Open AcquireApp",
      url: "https://www.crunchbase.com/organization/acquire-app",
    },
    {
      displayText: "Open Busbud",
      url: "https://www.busbud.com",
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
  text: `<p>Since 2017, I have been volunteering with Fikas, a Nordic cultural festival in Montreal,
    where I created and continue to maintain the festival’s website to ensure it remains functional, accessible,
    and up to date for attendees.</p>`,
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
