const crypto = require('crypto');

//This is converting the random numbers to colors
const numsToRGBColor = ([color1, color2, color3]) => {
  return `rgb(${color1}, ${color2}, ${color3})`;
};

// This is getting random numbers
const getRandomBytes = () => new Promise((resolve, reject) => {
  crypto.randomFill(new Uint8Array(3), (err, buffer) => {
    if (err) return reject(err);
    resolve([...buffer]);
  });
});

// This is pushing the pushing the colors into an array by invoking both previous functions
const return4RandomColors = () => {
  const colors = [];
  return getRandomBytes()
    .then((buffer) => {
      colors.push(numsToRGBColor(buffer))
      return getRandomBytes()
    })
    .then((buffer) => {
      colors.push(numsToRGBColor(buffer))
      return getRandomBytes()
    })
    .then((buffer) => {
      colors.push(numsToRGBColor(buffer))
      return getRandomBytes()
    })
    .then((buffer) => {
      colors.push(numsToRGBColor(buffer))
      return getRandomBytes()
    })
    .catch((err) => {
      console.error(err);
    });
};

return4RandomColors().then(console.log);

module.exports = {
  numsToRGBColor,
  getRandomBytes,
  return4RandomColors,
};
