import {
  cssCards, getTech, htmlCards, jsCards
} from '../api/vocabData';
import viewCards from '../pages/cards';
import techForm from '../pages/form';
import clearDom from '../utils/clearDom';

const navEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // Click event for showing the form
    if (e.target.id.includes('add-form-btn')) {
      techForm();
    }
  });
};

const filterEvents = () => {
  document.querySelector('#add-button').addEventListener('click', (e) => {
    if (e.target.id.includes('jsFilter')) {
      clearDom();
      jsCards().then(viewCards);
    }

    if (e.target.id.includes('htmlFilter')) {
      clearDom();
      htmlCards().then(viewCards);
    }

    if (e.target.id.includes('cssFilter')) {
      clearDom();
      cssCards().then(viewCards);
    }

    if (e.target.id.includes('allCards')) {
      clearDom();
      getTech().then(viewCards);
    }
  });
};

export { navEvents, filterEvents };
