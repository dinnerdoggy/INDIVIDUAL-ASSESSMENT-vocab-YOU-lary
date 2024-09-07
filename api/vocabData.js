import client from '../utils/client';

const endpoint = client.databaseURL;

// GET the data from the database
const getTech = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// Add a tech
const createTech = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Update tech
const updateTech = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve);
  console.warn(payload)
    .catch(reject);
});

export { createTech, getTech, updateTech };
