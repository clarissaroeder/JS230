function basicCallback(cb, number) {
  setTimeout(() => {
    cb(number);
  }, 2000);
}

// // Example usage:
// basicCallback((number) => {
//   console.log(number * 2);
// }, 5);
// // After 2 seconds, logs: 10

function downloadFile(callback) {
  console.log('Downloading file...');

  setTimeout(() => {
    callback('Download complete!');
  }, 1500);
}

// downloadFile((message) => {
//   console.log(message);
// });

function processData(array, callback) {
  setTimeout(() => {
    console.log(array.map(callback));
  }, 1000);
}

// // Example usage:
// processData([1, 2, 3], (number) => number * 2);
// // After 1 second, logs: [2, 4, 6]

function waterfallOverCallbacks(array, number) {
  array.forEach(callback => {
    number = callback(number);
  });

  console.log(number);
}

// // Example usage:
// const double = (x) => x * 2;
// waterfallOverCallbacks([double, double, double], 1);
// // Logs: 8

function startCounter(callback) {
  let counter = 0;

  const id = setInterval(() => {
    counter++;
    if (callback(counter)) {
      clearInterval(id);
    }
  }, 1000);
  
}


// Example usage:
startCounter((count) => {
  console.log(count);
  return count === 5;
});
// Logs 1, 2, 3, 4, 5, then stops