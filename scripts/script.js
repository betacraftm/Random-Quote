import quotesArray from './quote.js';
import randomNumber from './utils/random.js';

let quote = document.querySelector(".quote-display");
let author = document.querySelector(".author-display");

document.querySelector('.generator').addEventListener("click", () => {
  let number = randomNumber();
  quote.innerHTML = `"${quotesArray[number].quote}"`
  author.innerHTML = `${quotesArray[number].author}`
});