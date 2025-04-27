import makeKaplayCtx from "./kaplayCtx";

export default async function initGame() {
  const k = makeKaplayCtx();

  // eslint-disable-next-line no-console
  console.log(`/src/initGame.ts l.6 k => =+=+=+=+=+=+=+=+=+=+=+=+=+`, k);
}
