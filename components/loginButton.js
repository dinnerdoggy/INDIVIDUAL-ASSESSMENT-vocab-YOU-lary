import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
    <div class="container">
    <h1>Welcome to Vocab-YOU-lary</h1>
      <button id="click-me" class="btn btn-danger">GOOGLE LOGIN</button>
    </div>
  `;
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#click-me').addEventListener('click', signIn);
};

export default loginButton;
