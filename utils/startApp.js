import { getTech } from '../api/vocabData';
import filterBtns from '../components/filterButtons';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import { filterEvents, navEvents } from '../events/navigationEvents';
import viewCards from '../pages/cards';

const startApp = (user) => {
  domBuilder(user);
  formEvents(user);
  domEvents(user);
  navEvents();
  navBar();
  filterEvents();
  filterBtns();
  logoutButton();

  getTech(user.uid).then((data) => viewCards(data));
};

export default startApp;
