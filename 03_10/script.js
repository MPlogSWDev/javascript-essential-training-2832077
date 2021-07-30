/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";
import House from "./House.js";
const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

const myHouse = new House(
  "636 Orchs=ard st.",
  2,
  1,
  900,
  true,
  true,
  false,
  12,
  true,
  "1/4 Acre"
);

console.log(myHouse);
addGarbadgeDisposal();
console.log(myHouse);
