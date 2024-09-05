import client from '../utils/client';

const endpoint = client.databaseURL;

const getTech = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getTech;
