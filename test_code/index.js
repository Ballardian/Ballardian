const strings = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quaerat aliquid provident, soluta voluptate praesentium aperiam cumque nulla iusto, cum laborum eligendi quod laudantium quidem facilis omnis unde? Earum, rem?";

// 1. remove space at start
// 2. split by letter
// 3. create an obj
// 4. each on the array of letters
//   1a. if the key doesn't exist in the obj. set key as 1
//   1b. if the key exist, + 1
// 5. return the object

// define a fn

const histogram = (sentence) => {
  const letters = sentence.replace(' ', '');
  const lettersArr = letters.toLowerCase().split('');
  const LETTERSOBJ = {};

  lettersArr.forEach((letter) => {
    if (LETTERSOBJ[letter]) {
      LETTERSOBJ[letter] += 1;
    } else {
      LETTERSOBJ[letter] = 1; // set the obj key with square bracket
    }
  });

  return LETTERSOBJ;
};

console.log(histogram(strings));
