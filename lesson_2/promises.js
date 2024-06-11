function downloadFilePromise() {
  return new Promise((resolve) => {
    console.log('Downloading file...');
    setTimeout(() => {
      resolve('Download complete!');
    }, 1500);
  });
}

// downloadFilePromise().then(message => console.log(message));

function processDataPromise(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(array.map(number => number * 2));
    }, 1000);
  });
}

// processDataPromise([1, 2, 3]).then((processedNumbers) => {
//   console.log(processedNumbers);
//   // After 1 second, logs: [2, 4, 6]
// });

function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve('Operation successful!');
    } else {
      reject('Operation failed!');
    }
  });
}

// flakyService()
//   .then(console.log)
//   .catch(console.log);

function operation() {
  return new Promise((resolve) => { 
    console.log('Operation started.');

    setTimeout(() => {
      resolve('Operation complete.');
    }, 1000);
  });
}

// operation()
//   .then(console.log)
//   .finally(() => { 
//     console.log('Cleanup...');
//   });

// new Promise((resolve, reject) => {
//   setTimeout(() => { resolve(1), 1000});
// })
//   .then(function(number) {
//     console.log(number);
//     return number * 2;
//   })
//   .then(function(number) {
//     console.log(number);
//     return number + 5;
//   })
//   .then(console.log);

Promise.resolve(7)
  .then((number) => number * 2)
  .then((number) => number + 5)
  .then((console.log));

