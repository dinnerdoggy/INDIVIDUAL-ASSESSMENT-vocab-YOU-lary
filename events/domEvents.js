import { getTech, deleteTech, getSingleTech } from '../api/vocabData';
import viewCards from '../pages/cards';
import techForm from '../pages/form';
import clearDom from '../utils/clearDom';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // Click event for deleting a tech
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
    // Click event for editing a tech
    if (e.target.id.includes('edit-tech-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleTech(firebaseKey).then((techObj) => techForm(techObj));
    }
  });
};

export default domEvents;
