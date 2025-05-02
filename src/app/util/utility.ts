export const artList = [
  "g/char1.png",
  "g/char2.png",
  "g/char3.png",
  "g/char4.png",
];
export function getRandomArts() {
  const numR = Math.floor(Math.random() * artList.length);
  let numL = Math.floor(Math.random() * artList.length);

  while (numL === numR) {
    numL = Math.floor(Math.random() * artList.length);
  }
  return [artList[numL], artList[numR]];
}
