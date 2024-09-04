import 'bootstrap';
import '../styles/main.scss';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
};

init();
