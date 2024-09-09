import { getTech, deleteTech } from '../api/vocabData';
import viewCards from '../pages/cards';
import clearDom from '../utils/clearDom';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-tech')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE TECH', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteTech(firebaseKey).then(() => {
          clearDom();
          getTech().then(viewCards);
        });
      }
    }
  });
};

export default domEvents;
