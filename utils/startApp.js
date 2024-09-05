import getTech from '../api/vocabData';
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

  getTech().then((data) => viewCards(data));
};

export default startApp;
