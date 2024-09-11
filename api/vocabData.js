import client from '../utils/client';

const endpoint = client.databaseURL;

// GET the data from the database "READ"
const getTech = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/.json?orderBy="uid"&equalTo="${uid}"`, {
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

// Get single tech
const getSingleTech = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// Add a tech "CREATE"
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

// Update tech "UPDATE"
const updateTech = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// Delete Tech "DELETE"
const deleteTech = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const jsCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const java = Object.values(data).filter((item) => item.language === 'Javascript');
      if (data) {
        resolve(java);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const htmlCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const java = Object.values(data).filter((item) => item.language === 'HTML');
      if (data) {
        resolve(java);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const cssCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const java = Object.values(data).filter((item) => item.language === 'CSS');
      if (data) {
        resolve(java);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  createTech, getTech, updateTech, deleteTech, getSingleTech, jsCards, htmlCards, cssCards
};
