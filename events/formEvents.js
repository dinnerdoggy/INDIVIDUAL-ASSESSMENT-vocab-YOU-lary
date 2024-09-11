import firebase from 'firebase';
import { createTech, getTech, updateTech } from '../api/vocabData';
import viewCards from '../pages/cards';
import clearDom from '../utils/clearDom';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // Click event for submitting tech
    if (e.target.id.includes('techForm')) {
      const payload = {
        title: document.querySelector('#inputTitle').value,
        definition: document.querySelector('#inputDefinition').value,
        language: document.querySelector('#techSelect').value,
        time_submitted: new Date(),
        uid: `${firebase.auth().currentUser.uid}`
      };
      createTech(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTech(patchPayload).then(() => {
          clearDom();
          getTech(user.uid).then(viewCards);
        });
      });
    }
    // Click event for editing a tech
    if (e.target.id.includes('update-tech')) {
      console.warn('clicked update-tech');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#inputTitle').value,
        definition: document.querySelector('#inputDefinition').value,
        language: document.querySelector('#techSelect').value,
        firebaseKey,
      };

      updateTech(payload).then(() => {
        clearDom();
        getTech().then(viewCards);
      });
    }
  });
};

export default formEvents;
