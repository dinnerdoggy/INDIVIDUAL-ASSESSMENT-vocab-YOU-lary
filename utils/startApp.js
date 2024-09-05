import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import viewCards from '../pages/cards';
// import clearDom from './clearDom';

const startApp = () => {
  // clearDom();
  domBuilder();
  navBar();
  logoutButton();
  viewCards();
};

export default startApp;
