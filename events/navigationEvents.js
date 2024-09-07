import techForm from '../pages/form';

const navEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // Click event for showing the form
    if (e.target.id.includes('add-form-btn')) {
      techForm();
    }
  });
};

export default navEvents;
