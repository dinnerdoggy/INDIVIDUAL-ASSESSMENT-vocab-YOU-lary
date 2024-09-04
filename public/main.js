// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import loginButton from '../components/loginButton';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <div id="click-me">
    </div>
  `;

  // <button class="btn btn-danger" id="click-me">Login</button> for button if you have to
  loginButton();
  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
  ViewDirectorBasedOnUserAuthStatus();
};

init();
