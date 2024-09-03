// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import loginButton from '../components/loginButton';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <div id="click-me">
    ${loginButton()}
    </div>
  `;

  // <button class="btn btn-danger" id="click-me">Login</button> for button if you have to

  document
    .querySelector('#click-me')
    .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
  ViewDirectorBasedOnUserAuthStatus();
};

init();
