import { createTech, getTech, updateTech } from '../api/vocabData';
import viewCards from '../pages/cards';
import clearDom from '../utils/clearDom';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // Click event for submitting tech
    if (e.target.id.includes('techForm')) {
      const payload = {
        title: document.querySelector('#inputTitle').value,
        definition: document.querySelector('#inputDefinition').value,
        language: document.querySelector('#techSelect').value,
      };
      createTech(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTech(patchPayload).then(() => {
          clearDom();
          getTech().then(viewCards);
        });
      });
    }
  });
};

export default formEvents;
