import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import clearDom from './clearDom';

const startApp = () => {
  clearDom();
  domBuilder();
  navBar();
  logoutButton();
};

export default startApp;
