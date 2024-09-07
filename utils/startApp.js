import getTech from '../api/vocabData';
import filterBtns from '../components/filterButtons';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import navEvents from '../events/navigationEvents';
import viewCards from '../pages/cards';
// import clearDom from './clearDom';

const startApp = () => {
  // clearDom();
  domBuilder();
  navEvents();
  navBar();
  filterBtns();
  logoutButton();

  getTech().then((data) => viewCards(data));
};

export default startApp;
