import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import client from './client';
import startApp from './startApp';
import removeNavBar from './removeNavBar';
import clearDom from './clearDom';
import hideDiv from './hideDiv';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
      clearDom();
      removeNavBar();
      hideDiv('.btn-toolbar');
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
