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

export default getTech;
