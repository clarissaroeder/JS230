async function asyncDownloadFile() {
  console.log('Downloading file...');

  const message = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Download completed.');
    }, 1500);
  });

  console.log(message);
}

// asyncDownloadFile();

async function loadData() {
  try {
    const message = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('Data loaded.');
        } else {
          reject('Network error.');
        }
      }, 1000);
    });

    console.log(message);
  } catch(error) {
    console.error(error);
  }
}

// loadData();

async function fetchResource(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch(error) {
    console.error('Failed to load resource.');
  } finally {
    console.log('Resource fetch attempt made.');
  }
}

// Example usage:
fetchResource("https://jsonplaceholder.typicode.com/todos/1");
// Logs fetched data, then "Resource fetch attempt made"
// On error, logs "Failed to load resource", then "Resource fetch attempt made"