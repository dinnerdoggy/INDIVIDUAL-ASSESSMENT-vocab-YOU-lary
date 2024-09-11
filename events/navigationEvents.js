import firebase from 'firebase';
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
      jsCards(`${firebase.auth().currentUser.uid}`).then(viewCards);
    }

    if (e.target.id.includes('htmlFilter')) {
      clearDom();
      htmlCards(`${firebase.auth().currentUser.uid}`).then(viewCards);
    }

    if (e.target.id.includes('cssFilter')) {
      clearDom();
      cssCards(`${firebase.auth().currentUser.uid}`).then(viewCards);
    }

    if (e.target.id.includes('allCards')) {
      clearDom();
      getTech(`${firebase.auth().currentUser.uid}`).then(viewCards);
    }
  });
};

export { navEvents, filterEvents };
